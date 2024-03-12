const Instructions = styled.div`
  width: 70%;
  color: #555;
`;
const Wrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 244px 1.5fr;
  align-items: start;
  height: 100%;
`;
const { schema } = VM.require(`${REPL_AGIGUILD}/widget/Schema.Nexus`);
if (!schema ) {
    return <></>;
}

const activeTab = Storage.get("nexus-tab") || "overview";
if (props.tab && props.tab !== activeTab) {
  State.update({
    activeTab: props.tab,
  });
}

const content = {
    overview: (group) => {
        return (
            <div>
                <Widget src="${REPL_AGIGUILD}/widget/Agent.AgentHeader" props={{text: "AGI Guild", color: "#11181c"}}/>
                <Instructions>
                    <p>Welcome to the AGI Guild</p>

                    <div style={{paddingLeft: "2em"}}>
                        <p>
                            Description
                        </p>
                    </div>
                </Instructions>
            </div>
        );
    },
    subGroups: (group) => {
        return (
            <div>
                <h4 style={{ textAlign: "left"}}>{group.title}</h4>

                <Widget
                    src="near/widget/DIG.Tabs"
                    props={{
                        variant: "line",
                        size: "large",
                        defaultValue: group.defaultValue,
                        items: group.items,
                    }}
                />
            </div>
        );
    }
}

const renderContent = () => {
  switch (activeTab) {
    case "overview":
      return content.overview();
  default:
      return content.subGroups(schema[activeTab]);
  }
};

const handleMenuClick = (value) => {
  Storage.set("nexus-tab", value);
};

const sidebarItems = (schema) => {
    return Object.keys(schema).map((key) => {
        return {
        name: schema[key].title,
        value: key,
        icon: schema[key].icon,
        onSelect: () => {
            handleMenuClick(key);
        },
        };
    });

}

return (
    <>
      <div className="d-flex flex-column gap-5">
        <Wrapper>
          <Widget
              src={`near/widget/Moderation.Sidebar`}
              props={{
                title: "AGI Guild",
                activeTab,
                items: sidebarItems(schema),
              }}
          />
          {renderContent()}
        </Wrapper>
      </div>
    </>
);


