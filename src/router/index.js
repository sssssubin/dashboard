import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import DashboardLayout from "../layouts/DashboardLayout.vue"

// Pages
import Dashboard from "../pages/home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
    meta: { layout: DashboardLayout },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
