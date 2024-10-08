const { genSchema: genericGenSchema } = VM.require(
  "${REPL_ACCOUNT}/widget/Entities.Template.GenericSchema",
);

const genSchema = (namespace, entityType, title) => {
  const entityTitle = "Training Dataset";

  const genericSchema = genericGenSchema(namespace, entityType, entityTitle);
  return {
    ...genericSchema,
    languages: {
      type: "string",
      inputProps: {
        min: 0,
        max: 1024,
        placeholder: `Languages in the dataset.`,
        required: false,
      },
      label: "Languages",
      order: 10,
    },
    file: {
      type: "file",
      inputProps: {
        min: 4,
        max: 255,
        placeholder: `Upload the dataset file`,
        required: false,
      },
      label: "File",
      order: 15,
    },
  };
};

return { genSchema };
