const { genSchema: genericGenSchema } = VM.require(
  "${REPL_ACCOUNT}/widget/Entities.Template.GenericSchema",
);

const genSchema = (namespace, entityType, title) => {
  const entityTitle = title ?? "Model Weight";

  const genericSchema = genericGenSchema(namespace, entityType, entityTitle);
  return {
    ...genericSchema,
    file: {
      type: "file",
      inputProps: {
        min: 4,
        max: 255,
        placeholder: `Upload a model weights file`,
        required: false,
      },
      label: "File",
      order: 15,
    },
  };
};

return { genSchema };
