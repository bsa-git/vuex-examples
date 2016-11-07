define([
    'vuex',
    'text!app/shopping-cart/components/product_list/product_list.html'
], function (Vuex, template) {

    // Create component object
    var ProductList = {
        name: 'ProductList',
        template: template,
        computed: Vuex.mapGetters({
            products: 'allProducts'
        }),
        methods: Vuex.mapActions([
            'addToCart'
        ]),
        created: function () {
            this.$store.dispatch('getAllProducts');
        }
    };
    return ProductList;
});

