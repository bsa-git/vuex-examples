define([], function () {

    // initial state
    var state = {
        all: []
    };

    var mutations = {
        RECEIVE_PRODUCTS: function (state, products) {
            state.all = products;
        },
        ADD_TO_CART: function (state, id) {
            var findProduct = _.find(state.all, function (p) {
                return p.id === id;
            });
            findProduct.inventory--;
        }
    };

    return {
        state: state,
        mutations: mutations
    };

});

