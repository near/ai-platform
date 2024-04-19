let { src, tab, schemaFile, namespace, entityType, returnTo } = props;

const summaryComponent = "${REPL_ACCOUNT}/widget/AI.Agent.AgentSummary";
const customComponentLabel = (component) => {
  if (component === `near/widget/Agent.AgentChat`) {
    return "Chat";
  }
  return (
    <Widget
      src="${REPL_ACCOUNT}/widget/DIG.Tooltip"
      props={{
        content: <p>{component}</p>,
        trigger: "Chat (Custom component)",
      }}
    />
  );
};

const additionalTabs = (entity) => {
  const agentComponent = entity.component
    ? entity.component
    : `${REPL_ACCOUNT}/widget/AI.Agent.AgentChat`;

  return {
    name: customComponentLabel(agentComponent),
    value: "chat",
    content: <Widget src={agentComponent} props={{ src, embedded: true }} />,
    icon: "ph ph-code",
  };
};

return (
  <Widget
    src="${REPL_ACCOUNT}/widget/Entities.Template.EntityDetails"
    props={{
      src,
      tab,
      schemaFile,
      namespace,
      entityType,
      summaryComponent,
      additionalTabs,
      returnTo,
    }}
  />
);
