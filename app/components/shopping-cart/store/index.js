define([
    'vue',
    'vuex',
    'app/components/shopping-cart/store/actions',
    'app/components/shopping-cart/store/getters',
    'app/components/shopping-cart/store/modules/cart',
    'app/components/shopping-cart/store/modules/products',
], function (Vue, Vuex, actions, getters, cart, products) {

    Vue.use(Vuex);

    // A Vuex instance is created by combining the modules, getters, actions,
    // and getters.
    var store = new Vuex.Store({
        actions: actions,
        getters: getters,
        modules: {
            cart: cart,
            products: products
        }
    });

    return store;
});


