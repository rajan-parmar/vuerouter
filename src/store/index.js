import Vue from "vue";
import Vuex from "vuex";
import module1 from "./modules/ProductForm.js";
import module2 from "./modules/ProductCart.js";
import axios from 'axios'

Vue.use(Vuex);

axios.defaults.baseURL = 'http://laraveltesting.local/api/'

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

            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        clearUserData() {
            localStorage.removeItem('user')
            location.reload()
        }
    },
    actions: {
        login({ commit }, credentials) {
            return axios
                .post('/login', credentials)
                .then(({ data }) => {
                commit('setUserData', data)
            })
        },
        logout ({ commit }) {
            commit('clearUserData')
        }
    },
    getters: {
        isLogged: state => !!state.user
    }
});