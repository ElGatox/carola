import Text from "../text";
const Textarea = {
  variants: {
    primary: {
      ...Text.variants.primary,
      p: "14px",
      border: "1px",
      borderColor: "gray.100",
      borderOpacity: "0.5",
      color: "blue.900",
      _focus: { border: "1px", borderColor: "blue.600" },
      resize: "unset",
      _placeholder: { color: "gray.500", opacity: "0.5" },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Textarea;
