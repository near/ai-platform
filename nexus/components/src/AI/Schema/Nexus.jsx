// This schema lists the entity types used by the Nexus
// it is used to lay out the Nexus UI

// Potential resources:
//   Model providers, including Provable Inference
//   Agent frameworks: mintbase, LangChain
//   Custom UIs on BOS
//   Modules: Incentive frameworks, Triggers: time, on-chain event based
//   Reputation: of data, models, agents
//   Github repos
//   Papers
//   Data sources: Vector DBs, Near Social,
//   Private data sources: personal RAG, idOS
const homeLink = "${REPL_ACCOUNT}/widget/AI.Nexus";

const schema = {
  overview: {
    title: "Overview",
    icon: "ph ph-flower-lotus",
  },
  datasets: {
    title: "Datasets",
    icon: "ph ph-list-checks",
    defaultValue: "alignmentDataset",
    items: [
      {
        name: "Crowdsourcing",
        value: "crowdsourcedDataset",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "crowdsourcedDataset",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Data marketplace",
        value: "dataMarketplace",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "dataMarketplace",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Foundation",
        value: "foundationDataset",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "foundationDataset",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Supervised Fine Tuning",
        value: "fineTuningDataset",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "fineTuningDataset",
              title: "Supervised Fine Tuning Datasets",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Alignment",
        value: "alignmentDataset",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "alignmentDataset",
              title: "Alignment Datasets: RLHF, DPO",
              schemaFile: "${REPL_ACCOUNT}/widget/AI.Schema.AlignmentDataset",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
    ],
  },
  models: {
    title: "Models & Providers",
    icon: "ph ph-list-checks",
    defaultValue: "modelProvider",
    items: [
      {
        name: "Providers",
        value: "modelProvider",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "modelProvider",
              schemaFile: "${REPL_ACCOUNT}/widget/AI.Schema.Provider",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Standard Model Names",
        value: "modelName",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "modelName",
              title: "Standard Model Names",
              schemaFile: "${REPL_ACCOUNT}/widget/AI.Schema.ModelName",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Model Weights",
        value: "model",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "model",
              title: "Model Weights",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
    ],
  },
  agents: {
    title: "Agents",
    icon: "ph ph-list-checks",
    defaultValue: "agent",
    items: [
      {
        name: "Agents",
        value: "agent",
        content: (
          <Widget src="${REPL_ACCOUNT}/widget/AI.Agent.AgentEntityConfig" />
        ),
        icon: "ph ph-address-book",
      },
      {
        name: "Frameworks",
        value: "agentFramework",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "agentFramework",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Modules",
        value: "agentModule",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{ namespace: "near", homeLink, entityType: "agentModule" }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "User Interfaces",
        value: "agentUserInterface",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "agentUserInterface",
              title: "Custom User Interfaces",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
    ],
  },
  agentTools: {
    title: "Tools for Agents",
    icon: "ph ph-list-checks",
    defaultValue: "contractTool",
    items: [
      {
        name: "On-chain Contracts",
        value: "contractTool",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "contractTool",
              title: "On-Chain Contracts",
            }}
          />
        ),
        icon: "ph ph-address-book",
      },
      {
        name: "APIs",
        value: "apiTool",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "apiTool",
              title: "API Tools",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
    ],
  },
  datasources: {
    title: "Data Sources",
    icon: "ph ph-list-checks",
    defaultValue: "dataSource",
    items: [
      {
        name: "Data Sources",
        value: "dataSource",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{ namespace: "near", homeLink, entityType: "dataSource" }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Data Source Types",
        value: "dataSourceType",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "dataSourceType",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Delegated Permissions",
        value: "delegation",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "delegation",
              title: "Permissions you can Delegate",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
    ],
  },
  verifications: {
    title: "Verifications",
    icon: "ph ph-list-checks",
    defaultValue: "dataReputation",
    items: [
      {
        name: "Data Reputation",
        value: "dataReputation",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "dataReputation",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Agent Reputation",
        value: "agentReputation",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "agentReputation",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Compliance Proofs",
        value: "proof",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              homeLink,
              entityType: "proof",
              title: "Compliance Proofs",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
    ],
  },
  dashboard: {
    title: "Dashboard",
    icon: "ph ph-gauge",
  },
};
return { schema };
