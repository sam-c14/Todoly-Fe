import "./assets/main.css";
import "vue-material-design-icons/styles.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as BiIcons from "oh-vue-icons/icons/bi";
import * as PrIcons from "oh-vue-icons/icons/pr";
import * as RiIcons from "oh-vue-icons/icons/ri";
import * as LaIcons from "oh-vue-icons/icons/la";
import * as OiIcons from "oh-vue-icons/icons/oi";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

const Fa = Object.values({ ...FaIcons });
const Bi = Object.values({ ...BiIcons });
const Pr = Object.values({ ...PrIcons });
const Ri = Object.values({ ...RiIcons });
const La = Object.values({ ...LaIcons });
const Oi = Object.values({ ...OiIcons });
addIcons(...Fa, ...Bi, ...Pr, ...Ri, ...La, ...Oi);

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // is optimized
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.use(router);

app.mount("#app");
