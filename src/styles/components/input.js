import Text from "./text";
const Input = {
  variants: {
    primary: {
      field: {
        ...Text.variants["form-input"],
        p: "14px",
        border: "1px",
        borderColor: "neutral.200",
        color: "primary.1000",
        h: "48px",
        _placeholder: { color: "neutral.500", opacity: "0.5" },
        _focus: {
          borderColor: "primary.500",
        },
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Input;
