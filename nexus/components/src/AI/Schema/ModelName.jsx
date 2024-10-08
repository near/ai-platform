const { genSchema: genericGenSchema } = VM.require(
  "${REPL_ACCOUNT}/widget/Entities.Template.GenericSchema",
);

const genSchema = (namespace, entityType, title) => {
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
      order: 10,
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

return { genSchema };
