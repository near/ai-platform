const { entity } = props;

const { accountId, name } = entity;
const agentComponent = entity.component
  ? entity.component
  : `${REPL_ACCOUNT}/widget/AI.Agent.AgentChat`;
const entityActionUrlFunction = (entity) =>
  `https://${REPL_NEAR_URL}/${agentComponent}?src=${accountId}/agent/${name}`;

return (
  <Widget
    src="${REPL_ACCOUNT}/widget/Entities.Template.EntitySummary"
    props={{ ...props, entityActionUrlFunction }}
  />
);
