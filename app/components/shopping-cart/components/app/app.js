define([
    'vue',
    'app/components/shopping-cart/store/index',
    'app/components/shopping-cart/filters/currency',
    'app/components/shopping-cart/components/cart/cart',
    'app/components/shopping-cart/components/product_list/product_list',
    'text!app/components/shopping-cart/components/app/app.html'
], function (Vue, store, currency, cart, product_list, template) {

    // Reg filter
    Vue.filter('currency', currency);

    // Create component object
    var ShoppingCart = {
        name: 'ShoppingCart',
        store: store,
        template: template,
        components: {
            'product-list': product_list, 
            cart: cart
        }
    };
    return ShoppingCart;
});

