define([], function () {

    var threads = function (state) {
        return state.threads;
    };
    var currentThread = function (state) {
        var thread = state.currentThreadID ? state.threads[state.currentThreadID] : {};
        return thread;
    };
    var currentMessages = function (state) {
        var thread = currentThread(state);
        var messages = thread.messages ? thread.messages.map(function (id) {
            return state.messages[id];
        }) : [];
        return messages;
    };
    return {
        threads: threads,
        currentThread: currentThread,
        currentMessages: currentMessages
    };
});

