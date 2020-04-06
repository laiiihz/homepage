import Axios from "axios";
const VueAxios = {
    install(Vue,) {
        Vue.prototype.$axios = Axios;
    }
}
export default  VueAxios;
