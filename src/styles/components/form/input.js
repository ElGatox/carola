import Text from "../text";
const Input = {
  variants: {
    primary: {
      field: {
        ...Text.variants["form-input"],
        p: "14px",
        border: "1px",
        borderColor: "gray.100",
        color: "blue.900",
        h: "48px",
        _placeholder: { color: "gray.500", opacity: "0.5" },
        _focus: {
          borderColor: "blue.600",
        },
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Input;
