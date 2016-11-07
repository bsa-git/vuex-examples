define([], function () {

    // initial state
    var state = {
        added: [],
        checkoutStatus: null
    };

    var mutations = {
        ADD_TO_CART: function (state, id) {
            var record = state.added.find(function (p) {
                return p.id === id;
            });
            if (!record) {
                state.added.push({
                    id: id,
                    quantity: 1
                });
            } else {
                record.quantity++;
            }
        },
        CHECKOUT_REQUEST: function (state) {
            // clear cart
            state.added = [];
            state.checkoutStatus = null;
        },
        CHECKOUT_SUCCESS: function (state) {
            state.checkoutStatus = 'successful';
        },
        CHECKOUT_FAILURE: function (state, savedCartItems) {
            // rollback to the cart saved before sending the request
            state.added = savedCartItems;
            state.checkoutStatus = 'failed';
        }
    };

    return {
        state: state,
        mutations: mutations
    };

});

