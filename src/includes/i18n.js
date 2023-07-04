import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import kz from "../locales/kz.json";

export default createI18n({
   locale: "kz",
   fallbackLocale: "en",
   messages: {
      en,
      kz
   },
   numberFormats: {
      en: {

         currency: {
            style: "currency",
            currency: "USD"
         }
      },
      kz: {
         currency: {
            style: "currency",
            currency: "T",
         }
      }
   }
})