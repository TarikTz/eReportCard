import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

import axios from "./plugins/axios";

app
  .use(router)
  .use(pinia)
  .use(axios, {
    baseUrl: "https://vault.immudb.io/ics/api/v1/",
  })
  .mount("#app");
