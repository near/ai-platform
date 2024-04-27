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
    code: {
      type: "string",
      inputProps: {
        min: 0,
        max: 2048,
        placeholder: `https://github.com/... or other repository url`,
        required: false,
      },
      label: "Repository url",
      order: 10,
    },
  };
};

return { genSchema };
