import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Navigation from "../views/Navigation";
import Tools from "../views/Tools";
import Base64 from "../views/tools/Base64";
import ToolsMain from "../views/tools/ToolsMain";
import UriSafe from "../views/tools/UriSafe";
import UUID from "../views/tools/UUID";
import SHA from "../views/tools/SHA";

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
    component: Tools,
    children: [
      { path: "", name: "ToolsMain", component: ToolsMain },
      { path: "base64", name: "Base64", component: Base64 },
      { path: "URISafe", name: "URISafe", component: UriSafe },
      { path: "UUID", name: "UUID", component:UUID },
      { path: "SHA", name: "SHA", component:SHA }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
