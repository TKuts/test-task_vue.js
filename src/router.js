import { createRouter, createWebHashHistory } from "vue-router";

import Form from "./components/Form.vue";
import HomePage from "./components/HomePage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/form", component: Form, alias: "/" },
    { path: "/home", component: HomePage },
  ],
});
