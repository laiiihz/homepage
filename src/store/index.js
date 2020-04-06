import Vue from "vue";
import Vuex from "vuex";
import engines from "../static/Engines";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appBarTransparent: false,
    darkMode: false,
    engine: "baidu",
    enginePrefix: "//baidu.com/s?wd="
  },
  mutations: {
    changeAppBarTransparent(state, transparent) {
      state.appBarTransparent = transparent;
    },
    changeDarkMode(state, mode) {
      state.darkMode = mode;
    },
    changeEngine(state, name) {
      state.engine = name;
      engines.forEach(item => {
        if (item.name === name) {
          console.log(item.name);
          state.enginePrefix = item.prefix;
          window.localStorage.setItem("enginePrefix", item.prefix);
        }
      });
    }
  },
  actions: {},
  modules: {}
});
