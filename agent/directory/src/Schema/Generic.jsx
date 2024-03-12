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

};

return {schema}