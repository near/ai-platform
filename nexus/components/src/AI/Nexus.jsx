const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-template-columns: 200px 1fr;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

const Section = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font: var(--text-l);
  font-weight: 600;
`;

const { schema } = VM.require(`${REPL_ACCOUNT}/widget/AI.Schema.Nexus`);
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
    datasets: "trainingDataset",
    models: "modelProvider",
    agents: "agent",
    agentTools: "contractTool",
    dataSources: "dataSource",
    verifications: "dataReputation",
  }
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

const [globalTagFilter, setGlobalTagFilter] = useState(null);

const content = {
  overview: () => {
    return (
      <Widget
        src="${REPL_ACCOUNT}/widget/AI.Overview"
        props={{ handleMenuClick }}
      />
    );
  },
  subGroups: (groupName, group) => {
    const contentProps = {
      namespace: "near",
      homeLink: "${REPL_ACCOUNT}/widget/AI.Nexus",
      globalTagFilter,
      setGlobalTagFilter: (value) => setGlobalTagFilter(value),
    };
    return (
      <Section>
        <Title>{group.title}</Title>

        <Widget
          src="${REPL_ACCOUNT}/widget/DIG.Tabs"
          props={{
            variant: "line",
            size: "default",
            value:
              activeTabs[groupName] ||
              group.defaultValue ||
              group.items[0].value,
            onValueChange: (value) => {
              setGlobalTagFilter(null);
              const newTabs = { ...activeTabs };
              newTabs[groupName] = value;
              setActiveTabs(newTabs);
            },
            items: group.items,
            contentProps,
          }}
        />
      </Section>
    );
  },
  dashboard: () => {
    return <Widget src="${REPL_ACCOUNT}/widget/AI.Dashboard" props={{}} />;
  },
};

const renderContent = () => {
  switch (activeGroup) {
    case "overview":
      return content.overview();
    case "dashboard":
      return content.dashboard();
    default:
      return content.subGroups(
        activeGroup,
        schema[activeGroup],
        globalTagFilter // forces re-render, gets passed through Storage
      );
  }
};

const handleMenuClick = (value) => {
  setGlobalTagFilter(null);
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

const findEntityInSchema = (schema, entityType) => {
  for (const [category, group] of Object.entries(schema)) {
    if (!group.items) continue;
    for (const item of group.items) {
      if (item.value === entityType) {
        return [category, item.value];
      }
    }
  }
  return [null, null];
};

const handleTagClick = (tag) => {
  const entityType = tag.entityType ?? tag.entity_type;
  const [category, subType] = findEntityInSchema(schema, entityType);
  if (!category || !subType) {
    console.error(`Entity type ${entityType} not found in schema`);
    return;
  }
  Storage.set("global-tag-filter", [tag.tag]);
  setGlobalTagFilter([tag]);
  setActiveTabs((prev) => {
    return { ...prev, [category]: subType };
  });
  setActiveGroup(category);
};

return (
  <div className="gateway-page-container">
    <div className="d-flex flex-column gap-5">
      <Wrapper>
        <Widget
          src={`${REPL_ACCOUNT}/widget/AI.Navigation`}
          props={{
            title: "Ecosystem AI Directory",
            activeTab: activeGroup,
            items: sidebarItems(schema),
            additionalContent: (
              <Widget
                src="${REPL_ACCOUNT}/widget/Entities.Template.Forms.TagCloud"
                props={{
                  namespace: "near",
                  onSelect: handleTagClick,
                  initialTags: globalTagFilter,
                }}
              />
            ),
          }}
        />

        {renderContent()}
      </Wrapper>
    </div>
  </div>
);
