requirejs.config({
    baseUrl: '',
    paths: {
        css: "app/js/requirejs/css.min", //requirejs plugin for load css
        text: "app/js/requirejs/text", //requirejs plugin for load text
        vue: 'https://unpkg.com/vue/dist/vue',
        vuex: 'https://unpkg.com/vuex/dist/vuex',
        vue_router: 'https://unpkg.com/vue-router/dist/vue-router',
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
    'app/components/app/app',
    'app/components/app-home/home',
    'app/components/app-examples/examples',
    'app/components/app-contact/contact',
    'app/components/test-counter/counter',
    'app/components/test-counter-hot/counter',
    'app/components/test-shopping-cart/components/app/app',
    'app/components/test-todomvc/components/app/app',
    'app/components/test-chat/components/app/app'
],
    function (Vue, VueRouter, App, Home, Examples, Contact, Counter, CounterHot, ShoppingCart, TodoMvc, Chat) {

        // Use plugin - VueRouter
        Vue.use(VueRouter);
        // Create the router instance and pass the `routes` option
        var routes = [
            { 
                path: '/',
                meta: { home: true },
                component: Home 
            },
            { 
                path: '/home',
                meta: { home: true }, 
                component: Home 
            },
            { 
                path: '/examples',
                meta: { examples: true }, 
                component: Examples 
            },
            { 
                path: '/contact',
                meta: { contact: true }, 
                component: Contact 
            },
            { 
                path: '/counter',
                meta: { examples: true }, 
                component: Counter 
            },
            { 
                path: '/counter-hot',
                meta: { examples: true }, 
                component: CounterHot 
            },
            { 
                path: '/shopping-cart',
                meta: { examples: true }, 
                component: ShoppingCart 
            },
            { 
                path: '/todomvc',
                meta: { examples: true }, 
                component: TodoMvc 
            },
            { 
                path: '/chat',
                meta: { examples: true }, 
                component: Chat 
            },
        ];

        // Create the router instance and pass the `routes` option
        var router = new VueRouter({
            routes: routes
        });

        // Create and mount the root instance.
        var app = new App({
            router: router
        }).$mount('#main');
    });


