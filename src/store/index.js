import Vue from "vue";
import Vuex from "vuex";
import engines from "../static/Engines";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appBarTransparent: false,
    darkMode: false,
    engine: "baidu",
    enginePrefix: "//baidu.com/s?wd=",
    appBarColor:"rgba(25,145,76,255)",
  },
  mutations: {
    changeAppBarTransparent(state, transparent) {
      state.appBarTransparent = transparent;
    },
    changeDarkMode(state, mode) {
      state.darkMode = mode;
      window.localStorage.setItem("darkMode", mode);
    },
    changeEngine(state, name) {
      state.engine = name;
      window.localStorage.setItem("engine",name);
      engines.forEach(item => {
        if (item.name === name) {
          state.enginePrefix = item.prefix;
          window.localStorage.setItem("enginePrefix", item.prefix);
        }
      });
    },
    changeAppBarColor(state,color){
      state.appBarColor = color;
    },
  },
  actions: {},
  modules: {}
});
