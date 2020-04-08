import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Navigation from "../views/Navigation";
import Tools from "../views/Tools";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/navigation",
    name: "navigation",
    component: Navigation
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/tools",
    name: "Tools",
    component: Tools
  }
];

const router = new VueRouter({
  routes
});

export default router;
