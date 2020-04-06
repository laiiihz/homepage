import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAnime from "./plugins/animejs";
import Axios from "./plugins/axios";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

Vue.use(VueAnime);
Vue.use(Axios);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
