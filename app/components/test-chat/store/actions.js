define([
    'app/components/test-chat/api/index',
    'app/components/test-chat/store/mutation-types'
], function (api, types) {

    var getAllMessages = function (store) {
        api.getAllMessages(function (messages) {
            store.commit(types.RECEIVE_ALL, messages);
        });
    };
    var sendMessage = function (store, message) {
        api.createMessage(message.text, message.thread, function (message) {
            store.commit(types.RECEIVE_MESSAGE, message);
        });
    };
    var switchThread = function (store, id) {
        store.commit(types.SWITCH_THREAD, id);
    };
    return {
        getAllMessages: getAllMessages,
        sendMessage: sendMessage,
        switchThread: switchThread
    };
});


