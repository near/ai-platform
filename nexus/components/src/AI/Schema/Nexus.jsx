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
const schema = {
  overview: {
    title: "Overview",
    icon: "ph ph-flower-lotus",
  },
  datasets: {
    title: "Datasets",
    icon: "ph ph-list-checks",
    defaultValue: "alignment",
    items: [
      {
        name: "Crowdsourcing",
        value: "crowdsourcing",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{ namespace: "near", entityType: "crowdsourcedDataset" }}
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
            props={{ namespace: "near", entityType: "dataMarketplace" }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Foundation",
        value: "foundation",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{ namespace: "near", entityType: "foundationDataset" }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Supervised Fine Tuning",
        value: "fineTuning",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              entityType: "fineTuningDataset",
              title: "Supervised Fine Tuning Datasets",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Alignment",
        value: "alignment",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
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
    defaultValue: "providers",
    items: [
      {
        name: "Providers",
        value: "providers",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              entityType: "modelProvider",
              schemaFile: "${REPL_ACCOUNT}/widget/AI.Schema.Provider",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Standard Model Names",
        value: "modelNames",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
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
        value: "models",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
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
    defaultValue: "agents",
    items: [
      {
        name: "Agents",
        value: "agents",
        content: (
          <Widget src="${REPL_ACCOUNT}/widget/AI.Agent.AgentEntityConfig" />
        ),
        icon: "ph ph-address-book",
      },
      {
        name: "Frameworks",
        value: "frameworks",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{ namespace: "near", entityType: "agentFramework" }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "Modules",
        value: "modules",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{ namespace: "near", entityType: "agentModule" }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
      {
        name: "User Interfaces",
        value: "uis",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              entityType: "customUI",
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
    defaultValue: "contracts",
    items: [
      {
        name: "On-chain Contracts",
        value: "contracts",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
              entityType: "contractTool",
              title: "On-Chain Contracts",
            }}
          />
        ),
        icon: "ph ph-address-book",
      },
      {
        name: "APIs",
        value: "apis",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              namespace: "near",
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
    defaultValue: "privateDataSource",
    items: [
      {
        name: "Data Sources",
        value: "dataSource",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{ namespace: "near", entityType: "dataSource" }}
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
            props={{ namespace: "near", entityType: "dataSourceType" }}
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
              entityType: "delegation",
              title: "Permissions you can Delegate",
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
    ],
  },
  verification: {
    title: "Verifications",
    icon: "ph ph-list-checks",
    defaultValue: "privateDataSource",
    items: [
      {
        name: "Data Reputation",
        value: "dataReputation",
        content: (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{ namespace: "near", entityType: "dataReputation" }}
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
            props={{ namespace: "near", entityType: "agentReputation" }}
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
