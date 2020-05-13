import Vue from "vue";
import Vuex from "vuex";
import module1 from "./modules/ProductForm.js";
import module2 from "./modules/ProductCart.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        module1,
        module2,
    },
});