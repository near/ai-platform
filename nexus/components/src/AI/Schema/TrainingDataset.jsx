const { genSchema: genericGenSchema } = VM.require(
  "${REPL_ACCOUNT}/widget/Entities.Template.GenericSchema",
);

const genSchema = (ignored) => {
  const namespace = "near";
  const entityType = "trainingDataset";
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
  };
};

return { genSchema };
