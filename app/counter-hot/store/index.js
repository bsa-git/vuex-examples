define([
    'vue',
    'vuex',
    'app/counter-hot/store/getters',
    'app/counter-hot/store/actions',
    'app/counter-hot/store/mutations',
], function (Vue, Vuex, getters, actions, mutations) {

    Vue.use(Vuex);

    // root state object.
    // each Vuex instance is just a single state tree.
    var state = {
        count: 0,
        history: []
    }

    // A Vuex instance is created by combining the state, mutations, actions,
    // and getters.
    var store = new Vuex.Store({
        state: state,
        getters: getters,
        actions: actions,
        mutations: mutations
    })
    
    return store;

});

