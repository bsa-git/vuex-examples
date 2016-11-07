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
            state.all.find(function (p) {
                return p.id === id;
            }).inventory--;
        }
    };

    return {
        state: state,
        mutations: mutations
    };

});

