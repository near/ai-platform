const { href } = VM.require("devhub.${REPL_ACCOUNT}/widget/core.lib.url");
const { schema } = VM.require(`${REPL_AGIGUILD}/widget/Schema.Agent`);
if (!href || !schema ) {
    return <></>;
}


let { src, tab, highlightComment } = props;
const [accountId, entityType, agentName] = src.split("/") ?? [null, null, null];

let agent = Social.get(`${accountId}/agent/${agentName}/**`);
const exists = !existsData || Object.keys(existsData).length > 0;

if (!exists) {
  return (
    <div className="alert alert-danger mx-3" role="alert">
      <div>Error</div>
      <div>Could not find: {src}</div>
    </div>
  );
}

agent = { accountId, name: agentName, ...agent };
const { prompt } = agent;
const agentComponent = agent.component ? agent.component : `${REPL_AGIGUILD}/widget/Agent.AgentChat`;
const editType = accountId === context.accountId ? "edit" : "fork";
const editLabel = editType === "edit" ? "Edit" : "Fork";
const editIcon = editType === "edit" ? "ph-bold ph-pencil-simple" : "ph-bold ph-git-fork";
const listLink = href({
  widgetSrc: `${REPL_AGIGUILD}/widget/Nexus`,
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 48px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 260px;
  gap: 32px;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }
`;

const Header = styled.h1`
  font-size: 24px;
  line-height: 39px;
  color: #11181c;
  margin: 0;
  font-weight: 600;
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${(p) => (p.bold ? "#11181C" : "#687076")};
  font-weight: ${(p) => (p.bold ? "600" : "400")};
  font-size: ${(p) => (p.small ? "12px" : "14px")};

  i {
    margin-right: 4px;
  }
`;
const PropValue = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 10px;
`;
const agentProperties = (obj) => {
  const { accountId, name, displayName, logoUrl, ...displayProps } = obj;
  return (
    <>
      {Object.keys(displayProps).map((k) => (
        <>
          <Text bold key={k}>
            {k}:
          </Text>
          <PropValue>{obj[k]}</PropValue>
        </>
      ))}
    </>
  );
};

return (
  <Wrapper>
    <Link to={listLink}>
      <Header>
        <i className="ph ph-arrow-left" />
        Agent List
      </Header>
    </Link>
    <Widget
      src="${REPL_AGIGUILD}/widget/Agent.AgentSummary"
      props={{
        size: "small",
        showTags: true,
        agent: agent,
        showActions: true,
      }}
    />
    <ContentWrapper>
      <Widget
        src="${REPL_ACCOUNT}/widget/DIG.Tabs"
        props={{
          variant: "line",
          size: "large",
          defaultValue: "prompt",
          items: [
            {
              name: "Properties",
              value: "prompt",
              content: agentProperties(agent),
              icon: "ph ph-code",
            },
            {
              name: editLabel,
              value: "edit",
              content: <Widget src={"${REPL_ACCOUNT}/widget/Entities.Template.EntityCreate"} props={{entityType, schema, data: agent, cancelLabel: 'Clear changes' }} />,
              icon: editIcon,
            },
            {
              name: "Chat " + agentComponent,
              value: "chat",
              content: <Widget src={agentComponent} props={{ src, embedded: true }} />,
              icon: "ph ph-code",
            },
          ],
        }}
      />

      <Widget src="${REPL_ACCOUNT}/widget/ComponentDetails.Sidebar" props={{ src }} />
    </ContentWrapper>
  </Wrapper>
);
