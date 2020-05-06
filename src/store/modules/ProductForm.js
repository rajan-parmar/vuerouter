const state = {
    products: [],
    getProduct: null
};
const mutations = {
    addToNew(state, product) {
        state.products.push(product);
    },
    removeProduct(state, productId) {
        state.products = state.products.filter(product => product.id !== productId);
    },
    getProductData(state, productId) {
        state.getProduct = state.products.filter(product => product.id == productId);
    }
};
const actions = {
    getProduct({ commit }, productId) {
        commit('getProductData', productId);
    }
};
const getters = {
    allProducts: state => state.products
}

export default {
    state,
    mutations,
    actions,
    getters,
}