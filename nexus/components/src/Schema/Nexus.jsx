// This schema lists the entity types used by the Nexus
// it is used to lay out the Nexus UI


// Potential resources:
//   Model providers, including Provable Inference
//   Agent frameworks: mintbase, LangChain
//   Custom UIs on BOS
//   Triggers: time, on-chain event based
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
                name: "Foundation",
                value: "foundation",
                content: <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                                 props={{namespace: 'agiguild', entityType: 'foundationDataset', title: 'Foundation Datasets'}}/>,
                icon: "ph ph-chart-bar-horizontal",
            },
            {
                name: "Supervised Fine Tuning",
                value: "fineTuning",
                content: <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                                 props={{namespace: 'agiguild', entityType: 'fineTuningDataset', title: 'Supervised Fine Tuning Datasets'}}/>,
                icon: "ph ph-chart-bar-horizontal",
            },
            {
                name: "Alignment",
                value: "alignment",
                content: <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                                 props={{namespace: 'agiguild', entityType: 'alignmentDataset', title: 'Alignment Datasets: RLHF, DPO',
                                     schemaFile: "${REPL_AGIGUILD}/widget/Schema.AlignmentDataset"}}/>,
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
                name: "Model Names",
                value: "modelNames",
                content: <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                                 props={{namespace: 'agiguild', entityType: 'modelName', title: 'Model Name',
                                     schemaFile: "${REPL_AGIGUILD}/widget/Schema.ModelName"}}/>,
                icon: "ph ph-chart-bar-horizontal",
            },
            {
                name: "Providers",
                value: "providers",
                content: <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                                 props={{namespace: 'agiguild', entityType: 'modelProvider', title: 'Model Providers'}}/>,
                icon: "ph ph-chart-bar-horizontal",
            },
            {
                name: "Models",
                value: "models",
                content: <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                                 props={{namespace: 'agiguild', entityType: 'model', title: 'Models'}}/>,
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
                content: <Widget src="${REPL_AGIGUILD}/widget/Agent.AgentEntityConfig"/>,
                icon: "ph ph-address-book",
            },
            {
                name: "Frameworks",
                value: "frameworks",
                content: <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                                 props={{namespace: 'agiguild', entityType: 'agentFramework', title: 'Agent Frameworks'}}/>,
                icon: "ph ph-chart-bar-horizontal",
            },
            {
                name: "User Interfaces",
                value: "uis",
                content: <Widget src="${REPL_ACCOUNT}/widget/Entities.Template.GenericEntityConfig"
                                 props={{namespace: 'agiguild', entityType: 'customUI', title: 'Custom User Interfaces'}}/>,
                icon: "ph ph-chart-bar-horizontal",
            },
        ],
    },
}
return {schema};