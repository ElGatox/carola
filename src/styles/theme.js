import { extendTheme } from "@chakra-ui/react";
import Avenir from "./fonts"

export const theme = extendTheme({
  fonts: {
    "avenir-black": Avenir.black.style.fontFamily,
    "avenir-book": Avenir.book.style.fontFamily,
    "avenir-heavy": Avenir.heavy.style.fontFamily,
    "avenir-light": Avenir.light.style.fontFamily,
    "avenir-medium": Avenir.medium.style.fontFamily,
  },
});
