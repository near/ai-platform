// define apiSchema and credential types

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

const genSchema = (namespace, entityType, title) => {
  const entityTitle = title ?? "Provider";

  const genericSchema = genericGenSchema(namespace, entityType, entityTitle);
  return {
    ...genericSchema,
    documentationUrl: {
      type: "string",
      inputProps: {
        min: 4,
        max: 255,
        placeholder: `https://...`,
        required: false,
      },
      label: "Documentation URL",
      order: 10,
    },
  };
};

return { genSchema };
