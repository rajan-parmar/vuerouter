import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toasted from 'vue-toasted';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(Toasted);
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://product-router.local'
axios.defaults.withCredentials = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");