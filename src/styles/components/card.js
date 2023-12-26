const Card = {
  variants: {
    "privacy-policy": {
      container: {
        transition: "background-color 0.3s ease-in-out",
        w: "full",
        maxW: "20rem",
        h: "max-content",
        bg: "transparent",
        p: "20px",
        borderRadius: "0.5rem",
        border: "1px solid",
        position: "fixed",
        right: "32",
        bottom: "10",
      },
      header: {
        color: "white",
        fontSize: "20px",
        p: "0",
        pb: "1rem",
        bg: "transparent",
      },
      body: {
        color: "white",
        p: "0",
        pb: "2rem",
        whiteSpace: "pre-line",
      },
      footer: {
        display: "flex",
        w: "full",
        p: "0rem",
        justifyContent: "space-between",
      },
    },
  },
  defaultProps: {
    variant: "privacy-policy",
  },
};

export default Card;
