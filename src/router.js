import { createRouter, createWebHashHistory } from "vue-router";

import Form from "./components/Form.vue";
import HomePage from "./components/HomePage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/form", name: "form", component: Form, alias: "/" },
    { path: "/home", name: "home", component: HomePage },
  ],
});
