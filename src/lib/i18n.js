import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "../locales/index";

function i18nInit(language) {
  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    interpolation: {
      escapeValue: false,
    },
  });
}
export default i18nInit;
