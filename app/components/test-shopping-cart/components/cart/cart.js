define([
    'vuex',
    'text!app/components/test-shopping-cart/components/cart/cart.html'
], function (Vuex, template) {

    //--- Methods ---
    var mapGetters = Vuex.mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus'
    });

    var myComputed = {
        total: function () {
            var total_ = this.products.reduce(function (total, p) {
                return total + p.price * p.quantity;
            }, 0);
            
            return total_;
        }
    };

    var computed = Object.assign(mapGetters, myComputed);

    // Create component object
    var Cart = {
        name: 'Cart',
        template: template,
        computed: computed,
        methods: {
            checkout: function (products) {
                this.$store.dispatch('checkout', products);
            }
        }
    };
    return Cart;
});



