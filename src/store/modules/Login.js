import axios from 'axios';

const state = {
    user: null
};

const mutations = {
    setUserData(state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
    },
    logout() {
        localStorage.removeItem('user')
        location.reload()
    }
}

const getters = {
    isLogged: state => !!state.user
};

export default {
    state,
    mutations,
    getters
}