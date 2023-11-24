import "./assets/main.css";
import "vue-material-design-icons/styles.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // is optimized
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.use(router);

app.mount("#app");
