define([], function () {

    var checkoutStatus = function (state) {
        return state.cart.checkoutStatus;
    };
    var allProducts = function (state) {
        return state.products.all;
    };
    var cartProducts = function (state) {
        return state.cart.added.map(function (cartProduct) {
            var findProduct = _.find(state.products.all, function (p) {
                return p.id === cartProduct.id;
            });

            return {
                title: findProduct.title,
                price: findProduct.price,
                quantity: cartProduct.quantity
            };
        });
    };
    return {
        checkoutStatus: checkoutStatus,
        allProducts: allProducts,
        cartProducts: cartProducts
    };
});


