import Text from "./text";
const Textarea = {
  variants: {
    primary: {
      ...Text.variants.form,
      p: "14px",
      border: "1px",
      borderColor: "neutral.200",
      borderOpacity: "0.5",
      color: "primary.1000",
      _focus: { border: "1px", borderColor: "primary.500" },
      resize: "unset",
      _placeholder: { color: "neutral.500", opacity: "0.5" },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Textarea;
