const Wrapper = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 244px 1.5fr;
  align-items: start;
  height: 100%;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;
const { schema } = VM.require(`${REPL_ACCOUNT}/widget/Schema.Nexus`);
if (!schema) {
  return <></>;
}

const storedGroup = Storage.get("nexus-group");
if (storedGroup === null) {
  return <></>;
}
const storedTabs = Storage.get("nexus-tabs");
if (storedTabs === null) {
  return <></>;
}
const [activeGroup, setActiveGroup] = useState(storedGroup || "overview");
useEffect(() => {
  Storage.set("nexus-group", activeGroup);
}, [activeGroup]);

const [activeTabs, setActiveTabs] = useState(
  storedTabs || {
    datasets: "alignment",
    models: "providers",
    agents: "agents",
  },
);

useEffect(() => {
  Storage.set("nexus-tabs", activeTabs);
}, [activeTabs]);

const [paramsHandled, setParamsHandled] = useState(false);
if (!paramsHandled && props.group && props.group !== activeGroup) {
  setParamsHandled(true);
  setActiveGroup(props.group);
  const activeTab = activeTabs[activeGroup];
  if (props.tab && props.tab !== activeTab) {
    const newTabs = { ...activeTabs };
    newTabs[props.group] = props.tab;
    setActiveTabs(newTabs);
  }
}

const content = {
  overview: () => {
    return (
      <Widget
        src="${REPL_ACCOUNT}/widget/Overview"
        props={{ handleMenuClick }}
      />
    );
  },
  subGroups: (groupName, group) => {
    return (
      <div>
        <h4 style={{ textAlign: "left" }}>{group.title}</h4>

        <Widget
          src="${REPL_ACCOUNT}/widget/DIG.Tabs"
          props={{
            variant: "line",
            size: "large",
            value:
              activeTabs[groupName] ||
              group.defaultValue ||
              group.items[0].value,
            onValueChange: (value) => {
              const newTabs = { ...activeTabs };
              newTabs[groupName] = value;
              setActiveTabs(newTabs);
            },
            items: group.items,
          }}
        />
      </div>
    );
  },
  dashboard: () => {
    return <Widget src="${REPL_ACCOUNT}/widget/Dashboard" props={{}} />;
  },
};

const renderContent = () => {
  switch (activeGroup) {
    case "overview":
      return content.overview();
    case "dashboard":
      return content.dashboard();
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
};

return (
  <div className="gateway-page-container">
    <div className="d-flex flex-column gap-5">
      <Wrapper>
        <Widget
          src={`${REPL_ACCOUNT}/widget/Moderation.Sidebar`}
          props={{
            title: "NEAR AI",
            activeTab: activeGroup,
            items: sidebarItems(schema),
          }}
        />
        {renderContent()}
      </Wrapper>
    </div>
  </div>
);
