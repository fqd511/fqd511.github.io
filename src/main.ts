import App from "./App.vue";
import "normalize.css";
import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import Home from "~/pages/index.vue";
import NotFound from "~/pages/404.vue";

import "uno.css";
import "~/style/common.scss";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];
const router = createRouter({ routes, history: createWebHistory() });

const i18n = createI18n({
  locale: "en",
  messages,
});

createApp(App).use(i18n).use(createPinia()).use(router).mount("#app");
