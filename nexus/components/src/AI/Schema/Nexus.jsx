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
    defaultValue: "alignmentDataset",
    items: [
      {
        name: "Crowdsourcing",
        value: "crowdsourcedDataset",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "crowdsourcedDataset",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-users-four",
        disabled: true,
      },
      {
        name: "Data marketplace",
        value: "dataMarketplace",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "dataMarketplace",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-basket",
        disabled: true,
      },
      {
        name: "Training Datasets",
        value: "trainingDataset",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "trainingDataset",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-chart-bar-horizontal",
      },
    ],
  },
  models: {
    title: "Models & Providers",
    icon: "ph ph-graph",
    defaultValue: "modelProvider",
    items: [
      {
        name: "Providers",
        value: "modelProvider",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "modelProvider",
              schemaFile: "${REPL_ACCOUNT}/widget/AI.Schema.Provider",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-cpu",
      },
      {
        name: "Standard Model Names",
        value: "modelName",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "modelName",
              title: "Standard Model Names",
              schemaFile: "${REPL_ACCOUNT}/widget/AI.Schema.ModelName",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-identification-card",
      },
      {
        name: "Model Weights",
        value: "model",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "model",
              title: "Model Weights",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-files",
      },
    ],
  },
  agents: {
    title: "Agents",
    icon: "ph ph-user-circle-gear",
    defaultValue: "agent",
    items: [
      {
        name: "Agents",
        value: "agent",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/AI.Agent.AgentEntityConfig"
            props={{
              entityType: "agent",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-user-circle-gear",
      },
      {
        name: "Frameworks",
        value: "agentFramework",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "agentFramework",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-factory", // ph-blueprint after upgrade to 2.1.0
      },
      {
        name: "Modules",
        value: "agentModule",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "agentModule",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-puzzle-piece",
      },
      {
        name: "User Interfaces",
        value: "agentUserInterface",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "agentUserInterface",
              title: "Custom User Interfaces",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-layout",
      },
    ],
  },
  agentTools: {
    title: "Tools for Agents",
    icon: "ph ph-toolbox",
    defaultValue: "contractTool",
    items: [
      {
        name: "On-chain Contracts",
        value: "contractTool",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "contractTool",
              title: "On-Chain Contracts",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-link",
      },
      {
        name: "APIs",
        value: "apiTool",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "apiTool",
              title: "API Tools",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-computer-tower", // ph-network after 2.1.0 upgrade
      },
    ],
  },
  datasources: {
    title: "Data Sources",
    icon: "ph ph-tree-structure",
    defaultValue: "dataSource",
    items: [
      {
        name: "Data Sources",
        value: "dataSource",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "dataSource",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-database",
      },
      {
        name: "Data Source Types",
        value: "dataSourceType",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "dataSourceType",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-hard-drives",
      },
      {
        name: "Delegated Permissions",
        value: "delegation",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "delegation",
              title: "Permissions you can Delegate",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-fingerprint",
        disabled: true,
      },
    ],
  },
  verifications: {
    title: "Verifications",
    icon: "ph ph-seal-check",
    defaultValue: "dataReputation",
    items: [
      {
        name: "Data Reputation",
        value: "dataReputation",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "dataReputation",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-seal-question", // ph-seal-percent after 2.1.0 upgrade
      },
      {
        name: "Agent Reputation",
        value: "agentReputation",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "agentReputation",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-crown-simple", //  ph-ranking after 2.1.0 upgrade
      },
      {
        name: "Compliance Proofs",
        value: "proof",
        content: (contentProps) => (
          <Widget
            src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
            props={{
              entityType: "proof",
              title: "Compliance Proofs",
              ...contentProps,
            }}
          />
        ),
        icon: "ph ph-lock-laminated",
        disabled: true,
      },
    ],
  },
  dashboard: {
    title: "Dashboard",
    icon: "ph ph-gauge",
  },
};
return { schema };
