import Text from "./text";

const Radio = {
  variants: {
    primary: {
      control: {
        borderRadius: "full",
        border: "1px solid",
        borderColor: "neutral.500 !important",
        color: "transparent",
        w: "22px",
        h: "22px",
        transition: "all 0.2s ease-in-out",
        _checked: {
          bg: "neutral.50",
          color: "primary.500",
          _before: {
            w: "12px",
            h: "12px",
          },
        },
      },
      label: {
        //todo ver variante de texto
        _hover: {
          bg: "neutral.50",
          color: "primary.800",
        },
        color: "neutral.500",
        transition: "color 0.2s ease-in-out",
        ...Text.variants.form,
        _checked: {
          color: "primary.1000",
        },
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Radio;
