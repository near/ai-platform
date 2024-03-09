const entityType = "Agent";
const entityIndexer = "agents";
const entityTable = "agents";

const user = "dataplatform_near";
const collection = `${user}_${entityIndexer}_${entityTable}`;

const { schema } = VM.require(`${REPL_AGIGUILD}/widget/Schema.Agent`);
if (!schema ) {
  return <></>;
}

const buildQueries = (searchKey, sort) => {
  const queryFilter = searchKey ? `name: {_ilike: "%${searchKey}%"}` : "";
  let querySortOption;
  switch (sort) {
    case "z-a":
      querySortOption = `{ name: desc },`;
      break;
    case "a-z":
      querySortOption = `{ name: asc },`;
      break;
    default:
      querySortOption = "{ id: desc },";
  }

  return `
query ListQuery($offset: Int, $limit: Int) {
  ${collection}(
      where: {${queryFilter}}
      order_by: [${querySortOption} ], 
      offset: $offset, limit: $limit) {
      ${Object.keys(convertPascalToSnake(schema)).join("\n")}
  }
  ${collection}_aggregate {
    aggregate {
      count
    }
  }
}
`;
};
const queryName = "ListQuery";

const convertSnakeToPascal = (item) => {
    const newItems = {};
    Object.keys(item).forEach((key) => {
    const pascalKey = key.replace(/(_\w)/g, (m) => m[1].toUpperCase());
    newItems[pascalKey] = item[key];
  });
  return newItems;
};
const convertPascalToSnake = (item) => {
    const newItems = {};
    Object.keys(item).forEach((key) => {
        const snakeKey = key.replace(/([A-Z])/g, (m) => "_" + m.toLowerCase());
        newItems[snakeKey] = item[key];
    });
    return newItems;
}

const renderItem = (item, editFunction) => {
  return (
    <Widget
      src="${REPL_AGIGUILD}/widget/Agent.AgentCard"
      props={{
        item: convertSnakeToPascal(item),
        editFunction,
      }}
    />
  );
};

const createWidget = "near/widget/Entities.Template.EntityCreate";

return (
  <div>
    <Widget
      src="near/widget/Entities.Template.EntityList"
      props={{ entityType, buildQueries, queryName, collection, renderItem, createWidget, schema }}
    />
  </div>
);
