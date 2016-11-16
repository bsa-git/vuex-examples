define([
    'app/components/chat/api/mock-data',
], function (data) {

    var LATENCY = 16;

    var getAllMessages = function (cb) {
        return setTimeout(function () {
            cb(data);
        }, LATENCY);
    };

    var createMessage = function (text, thread, cb) {
        var timestamp = Date.now();
        var id = 'm_' + timestamp;
        var message = {
            id: id,
            text: text,
            timestamp: timestamp,
            threadID: thread.id,
            threadName: thread.name,
            authorName: 'Evan'
        };
        setTimeout(function () {
            cb(message);
        }, LATENCY);
    };

    return {
        getAllMessages: getAllMessages,
        createMessage: createMessage
    };

});



