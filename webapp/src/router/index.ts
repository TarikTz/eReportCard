import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/ListView.vue"),
    },
    {
      path: "/users/add-new",
      name: "add-new",
      component: () => import("../views/AddNewView.vue"),
    },
  ],
});

export default router;
