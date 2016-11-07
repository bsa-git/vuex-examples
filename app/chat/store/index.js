define([
    'vue',
    'vuex',
    'app/chat/store/actions',
    'app/chat/store/getters',
    'app/chat/store/mutations'
], function (Vue, Vuex, actions, getters, mutations) {

    Vue.use(Vuex);

    var state = {
        currentThreadID: null,
        threads: {
            /*
             id: {
             id,
             name,
             messages: [...ids],
             lastMessage
             }
             */
        },
        messages: {
            /*
             id: {
             id,
             threadId,
             threadName,
             authorName,
             text,
             timestamp,
             isRead
             }
             */
        }
    }

    // A Vuex instance is created by combining the getters, actions
    var store = new Vuex.Store({
        state: state,
        actions: actions,
        getters: getters,
        mutations: mutations
    });

    return store;
});


