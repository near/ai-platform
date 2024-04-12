const apiSchema = {
  chat: {
    type: "string",
  },
  supportedOptions: {
    type: "array",
    items: {
      type: "string",
    },
  },
};

const schema = {
  namespace: "near",
  entityType: "provider",
  api: {
    type: "object",
    schema: apiSchema,
  },
};

const { genSchema: genericGenSchema } = VM.require(
  "${REPL_ACCOUNT}/widget/Entities.Template.GenericSchema",
);

const genSchema = (ignored) => {
  const namespace = "near";
  const entityType = "provider";
  const entityTitle = "Provider";

  const genericSchema = genericGenSchema(namespace, entityType, entityTitle);
  return {
    ...genericSchema,
    category: {
      type: "string",
      inputProps: {
        min: 4,
        max: 255,
        placeholder: `Category: Compute marketplace, Provable training, Distributed training, Provable Inference`,
        required: false,
      },
      label: "Category",
      order: 6,
    },
  };
};

return { genSchema };
