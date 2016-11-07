define([
    'vue',
    'vuex',
    'app/todomvc/store/mutations',
    'app/todomvc/store/plugins',
], function (Vue, Vuex, mutations, plugins) {

    Vue.use(Vuex);

    // A Vuex instance is created by combining the state, mutations, actions,
    // and getters.
    var store = new Vuex.Store({
        state: mutations.state,
        mutations: mutations.mutations,
        plugins: plugins
    })
    
    return store;

});

