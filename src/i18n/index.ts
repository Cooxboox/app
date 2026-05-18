import { createI18n } from "vue-i18n";

import fr from "./fr";

type MessageSchema = typeof fr;

export default createI18n<[MessageSchema], "fr">({
  legacy: false,
  locale: "fr",
  fallbackLocale: "fr",
  messages: { fr },
});
