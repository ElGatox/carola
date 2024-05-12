import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const black = localFont({
  src: "./fonts/amaticsc-bold.woff",
  display: "swap",
});
// Font files can be colocated inside of `app`
const book = localFont({
  src: "./fonts/Avenir-Book.woff2",
  display: "swap",
});
// Font files can be colocated inside of `app`
const heavy = localFont({
  src: "./fonts/Avenir-Heavy.woff2",
  display: "swap",
});
// Font files can be colocated inside of `app`
const light = localFont({
  src: "./fonts/Avenir-Light.woff2",
  display: "swap",
});
// Font files can be colocated inside of `app`
const medium = localFont({
  src: "./fonts/Avenir-Medium.woff2",
  display: "swap",
});
const aguafina = localFont({
  src: "./fonts/AguafinaScript-Regular.woff2",
  display: "swap",
});

export default {
  aguafina,
  black,
  book,
  heavy,
  light,
  medium,
};
