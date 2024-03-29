const convertSnakeToPascal = (item) => {
    const newItems = {};
    Object.keys(item).forEach((key) => {
    const pascalKey = key.replace(/(_\w)/g, (m) => m[1].toUpperCase());
    newItems[pascalKey] = item[key];
  });
  return newItems;
};
const renderItem = (item, editFunction) => {
  const flatItem = {...item, ...item.attributes};
  delete flatItem.attributes;
  return (
    <Widget
      src="${REPL_AGIGUILD}/widget/Agent.AgentCard"
      props={{
        item: convertSnakeToPascal(flatItem),
        editFunction,
      }}
    />
  );
};
return (
        <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                props={{namespace: 'agiguild', entityType: 'agent', title: 'Agent',
                    schemaFile: "${REPL_AGIGUILD}/widget/Schema.Agent",
                    renderItem,
        }}/>
)