const { genSchema: genericGenSchema } = VM.require(
    "${REPL_ACCOUNT}/widget/Entities.Template.GenericSchema",
);

const genSchema = (namespace, entityType, title) => {
    const entityTitle = title ?? "Evaluation Set";

    const genericSchema = genericGenSchema(namespace, entityType, entityTitle);
    return {
        ...genericSchema,
        input: {
            type: "string",
            inputProps: {
                min: 0,
                max: 1024,
                placeholder: `User input submitted to the Agent`,
                required: true,
            },
            label: "Input",
            order: 10,
        },
        output: {
            type: "string",
            inputProps: {
                min: 0,
                max: 1024,
                placeholder: `Output from the Agent`,
                required: true,
            },
            label: "Output",
            order: 11,
        },
        multiturn: {
            type: "boolean",
            inputProps: {
                required: false,
            },
            label: "Multi-turn inputs and outputs array",
            order: 12,
        },
    };
};

return { genSchema };
