const state = {
    products: [],
};
const mutations = {
    addToNew(state, product) {
        state.products.push(product);
    },
    removeProduct(state, productId) {
        state.products = state.products.filter(product => product.id !== productId);
    },
    updateProduct(state, items) {
        state.products.forEach((item, index) => {
            if (item.id == items.id) {
                state.products.splice(index, 1, items);
            }
        });
    }
};
const actions = {};
const getters = {
    allProducts: state => state.products
}

export default {
    state,
    mutations,
    actions,
    getters,
}