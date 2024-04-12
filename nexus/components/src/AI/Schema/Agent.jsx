const { genSchema: genericGenSchema } = VM.require(
  "${REPL_ACCOUNT}/widget/Entities.Template.GenericSchema",
);

const genSchema = (ignored) => {
  const namespace = "near";
  const entityType = "agent";
  const entityTitle = "Agent";

  const genericSchema = genericGenSchema(namespace, entityType, entityTitle);
  return {
    ...genericSchema,
    prompt: {
      type: "string",
      inputProps: {
        min: 2,
        max: 8192,
        placeholder: "The prompt for the agent.",
        required: true,
      },
      multiline: true,
      label: "Prompt",
      order: 3,
    },
    component: {
      type: "string",
      inputProps: {
        min: 0,
        max: 255,
        placeholder:
          "The component used to run the agent, default is ${REPL_ACCOUNT}/widget/AI.Agent.AgentChat",
        required: false,
      },
      label: "Component",
      order: 4,
    },
    // preferredProvider: {
    //     inputProps: {
    //         min: 2,
    //         max: 255,
    //         placeholder: "The preferred provider for the agent.",
    //         required: false,
    //     },
    //     label: "Preferred Provider",
    //     order: 4,
    // },
    // preferredModel: {
    //   inputProps: {
    //     min: 2,
    //     max: 255,
    //     placeholder: "The preferred model for the agent.",
    //     required: false,
    //   },
    //   label: "Preferred Model",
    //   order: 5,
    // },
    // variables: {
    //     inputProps: {
    //         min: 2,
    //         max: 255,
    //         placeholder: "The variables for the agent.",
    //         required: false,
    //     },
    //     label: "A comma separated list of variables that should be passed into the prompt. Example: ['rfp', 'proposal'].",
    //     order: 6,
    // },
    // tools: {
    //     inputProps: {
    //         min: 2,
    //         max: 255,
    //         placeholder: "A JSON array of Tools or Functions the agent should have access to.",
    //         required: false,
    //     },
    //
    //     label: "Tools",
    //     order: 9,
    // },
    // properties: {
    //   inputProps: {
    //     min: 2,
    //     max: 1024,
    //     placeholder: "JSON properties for the agent.",
    //     required: false,
    //   },
    //
    //   label: "Properties",
    //   order: 10,
    // },
  };
};

return { genSchema };
