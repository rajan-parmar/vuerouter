const state = {
    addToCarts: [],
};
const mutations = {
    addToCart(state, cartProduct) {
        state.addToCarts.push(Object.assign({}, cartProduct));
    },
    removeProduct(state, productId) {
        state.addToCarts = state.addToCarts.filter(addToCarts => addToCarts.id !== productId);
    },
    cartQuantityPlus(state, cartQuantityValue) {
        state.addToCarts.qty = cartQuantityValue;
    },
    updateProduct(state, items) {
        state.addToCarts.forEach((item, index) => {
            if (item.id == items.id) {
                state.addToCarts.splice(index, 1, items);
            }
        });
    }
};
const actions = {};

const getters = {
    allCarts: state => state.addToCarts
}

export default {
    state,
    mutations,
    actions,
    getters,
}