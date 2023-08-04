import axios from "axios";
import type { App } from "vue";

interface AxiosOptions {
  baseUrl?: string;
  token?: string;
}

export default {
  install: (app: App, options: AxiosOptions) => {
    app.config.globalProperties.$axios = axios.create({
      baseURL: options.baseUrl,
      headers: {
        accept: "application/json",
        "X-API-Key": import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json",
      },
    });
  },
};
