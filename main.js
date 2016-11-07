requirejs.config({
    baseUrl: '',
    paths: {
        css: "js/requirejs/css.min", //requirejs plugin for load css
        text: "js/requirejs/text", //requirejs plugin for load text
        vue: 'js/vue',
        vuex: 'js/vuex',
        vue_router: 'js/vue-router',
    },
    shim: {
    }
});

require([
    // Vue.js
    'vue',
    // Vue-Router
    'vue_router',
    // Components
    'app/home/home',
    'app/counter/counter',
    'app/counter-hot/counter',
    'app/shopping-cart/components/app/app',
    'app/todomvc/components/app/app',
    'app/chat/components/app/app'
],
        function (Vue, VueRouter, Home, Counter, CounterHot, ShoppingCart, TodoMvc, Chat) {

            // Use plugin - VueRouter
            Vue.use(VueRouter);
            // Create the router instance and pass the `routes` option
            var routes = [
                {path: '/', component: Home},
                {path: '/home', component: Home},
                {path: '/counter', component: Counter},
                {path: '/counter-hot', component: CounterHot},
                {path: '/shopping-cart', component: ShoppingCart},
                {path: '/todomvc', component: TodoMvc},
                {path: '/chat', component: Chat},
            ];

            // Create the router instance and pass the `routes` option
            var router = new VueRouter({
                routes: routes
            });

            // Create and mount the root instance.
            var app = new Vue({
                router: router
            }).$mount('#app');

        });


