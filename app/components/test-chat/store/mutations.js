define([
    'vue'
], function (Vue) {

    var mutations = {
        RECEIVE_ALL: function (state, messages) {

            var latestMessage;
            messages.forEach(function (message) {
                // create new thread if the thread doesn't exist
                if (!state.threads[message.threadID]) {
                    createThread(state, message.threadID, message.threadName);
                }
                // mark the latest message
                if (!latestMessage || message.timestamp > latestMessage.timestamp) {
                    latestMessage = message;
                }
                // add message
                addMessage(state, message);
            });
            // set initial thread to the one with the latest message
            setCurrentThread(state, latestMessage.threadID);
        },
        RECEIVE_MESSAGE: function (state, message) {
            addMessage(state, message);
        },
        SWITCH_THREAD: function (state, id) {
            setCurrentThread(state, id);
        }
    };

    var createThread = function (state, id, name) {
        Vue.set(state.threads, id, {
            id: id,
            name: name,
            messages: [],
            lastMessage: null
        });
    };

    var addMessage = function (state, message) {
        // add a `isRead` field before adding the message
        message.isRead = message.threadID === state.currentThreadID;
        // add it to the thread it belongs to
        var thread = state.threads[message.threadID];
        if (!thread.messages.some(function (id) {
            return id === message.id;
        })) {
            thread.messages.push(message.id);
            thread.lastMessage = message;
        }
        // add it to the messages map
        Vue.set(state.messages, message.id, message);
    };

    var setCurrentThread = function (state, id) {
        state.currentThreadID = id;
//        if (!state.threads[id]) {
//            debugger
//        }
        // mark thread as read
        state.threads[id].lastMessage.isRead = true;
    };


    return mutations;

});

