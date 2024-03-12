const schema = {
    id: {
        type: "integer",
        displayType: "hidden",
    },
    accountId: {
        type: "text",
        displayType: "hidden",
    },
    name: {
        inputProps: {
            min: 2,
            max: 80,
            allowCommaAndSpace: false,
            placeholder: "Choose a unique identifier for your agent. Example: travel-agent.",
            required: true,
        },
        label: "Name",
        order: 1,
    },
    displayName: {
        inputProps: {
            min: 2,
            max: 255,
            placeholder: "The name that will be displayed to users.",
            required: true,
        },
        label: "Display Name",
        order: 2,
    },
    prompt: {
        inputProps: {
            min: 2,
            max: 8192,
            placeholder: "The prompt for the agent.",
            required: true,
        },
        multiline: true,
        label: "Prompt",
        order: 3,
    },
    component: {
        inputProps: {
            min: 0,
            max: 255,
            placeholder: "The component used to run the agent, default is near/widget/Agent.AgentChat",
            required: false,
        },
        label: "Component",
        order: 4,
    },
    logoUrl: {
        inputProps: {
            min: 4,
            max: 255,
            placeholder: "The logo URL for the agent.",
            required: false,
        },

        label: "Logo URL",
        order: 5,
    },
    // preferredProvider: {
    //     inputProps: {
    //         min: 2,
    //         max: 255,
    //         placeholder: "The preferred provider for the agent.",
    //         required: false,
    //     },
    //     label: "Preferred Provider",
    //     order: 4,
    // },
    // preferredModel: {
    //   inputProps: {
    //     min: 2,
    //     max: 255,
    //     placeholder: "The preferred model for the agent.",
    //     required: false,
    //   },
    //   label: "Preferred Model",
    //   order: 5,
    // },
    // variables: {
    //     inputProps: {
    //         min: 2,
    //         max: 255,
    //         placeholder: "The variables for the agent.",
    //         required: false,
    //     },
    //     label: "A comma separated list of variables that should be passed into the prompt. Example: ['rfp', 'proposal'].",
    //     order: 6,
    // },
    // tools: {
    //     inputProps: {
    //         min: 2,
    //         max: 255,
    //         placeholder: "A JSON array of Tools or Functions the agent should have access to.",
    //         required: false,
    //     },
    //
    //     label: "Tools",
    //     order: 9,
    // },
    // properties: {
    //   inputProps: {
    //     min: 2,
    //     max: 1024,
    //     placeholder: "JSON properties for the agent.",
    //     required: false,
    //   },
    //
    //   label: "Properties",
    //   order: 10,
    // },
};

return {schema}