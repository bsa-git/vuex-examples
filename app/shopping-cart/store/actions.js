define([
    'app/shopping-cart/api/shop',
    'app/shopping-cart/store/mutation-types'
], function (shop, types) {

    var addToCart = function (store, product) {
        if (product.inventory > 0) {
            store.commit(types.ADD_TO_CART, product.id);
        };
    };
    var checkout = function (store, products) {
        var savedCartItems = store.state.cart.added;
        store.commit(types.CHECKOUT_REQUEST);
        shop.buyProducts(
                products,
                function () {
                    store.commit(types.CHECKOUT_SUCCESS);
                },
                function () {
                    store.commit(types.CHECKOUT_FAILURE, savedCartItems);
                }
        );
    };
    var getAllProducts = function (store) {
        shop.getProducts(function (products) {
            store.commit(types.RECEIVE_PRODUCTS, products);
        });
    };
    return {
        addToCart: addToCart,
        checkout: checkout,
        getAllProducts: getAllProducts
    };
});


