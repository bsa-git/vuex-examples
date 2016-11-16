define([
    'vue',
    'vuex',
    'app/components/chat/store/actions',
    'app/components/chat/store/getters',
    'app/components/chat/store/mutations'
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


