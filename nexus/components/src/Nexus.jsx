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

const storedGroup = Storage.get("nexus-group");
if(storedGroup === null) {
    return <></>;
}
const storedTabs = Storage.get("nexus-tabs");
if(storedTabs === null) {
    return <></>;
}
const [activeGroup, setActiveGroup] = useState(storedGroup || "overview");
useEffect(() => {
    Storage.set("nexus-group", activeGroup);
}, [activeGroup]);

const [activeTabs, setActiveTabs] = useState(storedTabs || {datasets: "alignment", models: "providers", agents: "agents"});

useEffect(() => {
    Storage.set("nexus-tabs", activeTabs);
}, [activeTabs]);

const [paramsHandled, setParamsHandled] = useState(false);
if (!paramsHandled && props.group && props.group !== activeGroup) {
    setParamsHandled(true);
    setActiveGroup(props.group)
    const activeTab = activeTabs[activeGroup];
    if (props.tab && props.tab !== activeTab) {
        const newTabs = {...activeTabs};
        newTabs[props.group] = props.tab;
        setActiveTabs(newTabs);
    }
}

const content = {
    overview: () => {
        return (
            <div>
                <Widget src="${REPL_AGIGUILD}/widget/Agent.AgentHeader" props={{text: "AGI Guild", color: "#11181c"}}/>
                <Instructions>
                    <p>Welcome to the AGI Guild</p>

                    <div style={{paddingLeft: "2em"}}>
                        <p>
                            <Link href={'https://github.com/agiguild/agiguild/blob/master/README.md'} target="_blank">https://github.com/agiguild/agiguild/</Link>
                        </p>
                    </div>
                </Instructions>
            </div>
        );
    },
    subGroups: (groupName, group) => {
        return (
            <div>
                <h4 style={{ textAlign: "left"}}>{group.title}</h4>

                <Widget
                    src="${REPL_ACCOUNT}/widget/DIG.Tabs"
                    props={{
                        variant: "line",
                        size: "large",
                        value: activeTabs[groupName] || group.defaultValue || group.items[0].value,
                        onValueChange: (value) => {
                            const newTabs = {...activeTabs};
                            newTabs[groupName] = value;
                            setActiveTabs(newTabs);
                        },
                        items: group.items,
                    }}
                />
            </div>
        );
    }
}

const renderContent = () => {
  switch (activeGroup) {
    case "overview":
      return content.overview();
  default:
      return content.subGroups(activeGroup, schema[activeGroup]);
  }
};

const handleMenuClick = (value) => {
  setActiveGroup(value);
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
              src={`${REPL_ACCOUNT}/widget/Moderation.Sidebar`}
              props={{
                title: "AGI Guild",
                activeTab: activeGroup,
                items: sidebarItems(schema),
              }}
          />
          {renderContent()}
        </Wrapper>
      </div>
    </>
);


