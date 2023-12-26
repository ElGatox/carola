import { extendTheme } from "@chakra-ui/react";
import Avenir from "./fonts";
import components from "./components";

export const theme = extendTheme({
  components,
  fonts: {
    "default-normal": Avenir.black.style.fontFamily,
    "default-book": Avenir.book.style.fontFamily,
    "default-heavy": Avenir.heavy.style.fontFamily,
    "default-light": Avenir.light.style.fontFamily,
    "default-medium": Avenir.medium.style.fontFamily,
  },
  components,
});
