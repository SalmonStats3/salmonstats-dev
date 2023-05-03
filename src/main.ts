import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Filler,
  LineElement,
} from "chart.js";
import { registerSW } from "virtual:pwa-register";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";

import enUS from "@/locales/en-US.yaml";
import jaJP from "@/locales/ja-JP.yaml";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  RadialLinearScale,
  LineElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend,
);

const i18n = createI18n({
  allowComposition: true,
  availableLocales: ["en", "ja"],
  fallbackLocale: "ja",
  fallbackRoot: true,
  legacy: false,
  locale: "ja",
  messages: {
    en: enUS,
    ja: jaJP,
  },
});

loadFonts();
registerSW();

createApp(App).use(router).use(vuetify).use(i18n).mount("#app");
