const {genSchema: genericGenSchema} = VM.require("${REPL_ACCOUNT}/widget/Entities.Template.GenericSchema");

const genSchema = (ignored) => {
    const namespace = "near";
    const entityType = "modelName";
    const entityTitle = "Model Name";

    const genericSchema = genericGenSchema(namespace, entityType, entityTitle);
    return {
        ...genericSchema,
        proprietary: {
            type: "boolean",
            inputProps: {
                min: 4,
                max: 255,
                placeholder: `Whether this is a proprietary model or open source`,
                required: false,
            },
            label: "Is proprietary",
            order: 6,
        },
        // we can have both!
        //     relationships: [
        //         {
        //             namespace: "near",
        //             entityType: "provider",
        //         }
        //     ],
        //     providers: {
        //         type: "object",
        //         schema: "near.provider",
        //     }
        // }
    };
};

return {genSchema};