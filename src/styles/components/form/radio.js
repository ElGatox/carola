import Text from "../text";

const Radio = {
  variants: {
    primary: {
      control: {
        borderRadius: "full",
        border: "1px solid",
        borderColor: "gray.500",
        w: "22px",
        h: "22px",
        transition: "all 0.2s ease-in-out",
        _checked: {
          bg: "transparent",
          color: "blue.600",
          _before: {
            w: "12px",
            h: "12px",
          },
        },
      },
      label: {
        _hover: {
          color: "blue.600",
        },
        transition: "color 0.2s ease-in-out",
        ...Text.variants.primary,
        _checked: {
          color: "blue.900",
          bg: "transparent",
        },
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Radio;
