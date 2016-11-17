define([
    'text!app/components/test-chat/components/message/message.html'
], function (template) {

    // Create component object
    var ChatMessage = {
        name: 'ChatMessage',
        template: template,
        props: {
            message: Object
        }
    };
    return ChatMessage;
});



