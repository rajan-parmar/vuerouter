import Vue from "vue";
import Vuex from "vuex";
import ProductForm from "./modules/ProductForm.js";
import ProductCart from "./modules/ProductCart.js";
import Login from "./modules/Login.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ProductForm,
        ProductCart,
        Login
    },
});