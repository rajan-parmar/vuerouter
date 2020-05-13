import Vue from "vue";
import Vuex from "vuex";
import module1 from "./modules/ProductForm.js";
import module2 from "./modules/ProductCart.js";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        module1,
        module2,
    },
    state: {
        user: null
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
        },
        logout() {
            localStorage.removeItem('user')
            location.reload()
        }
    },
    getters: {
        isLogged: state => !!state.user
    }
});