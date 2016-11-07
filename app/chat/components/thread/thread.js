define([
    'text!app/chat/components/thread/thread.html'
], function (template) {

    // Create component object
    var ChatThread = {
        name: 'ChatThread',
        template: template,
        props: {
            thread: Object,
            active: Boolean
        }
    };
    return ChatThread;
});



