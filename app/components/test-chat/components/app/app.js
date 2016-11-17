define([
    'vue',
    'app/components/test-chat/store/index',
    'app/components/test-chat/store/actions',
    'app/components/test-chat/components/message_section/message_section',
    'app/components/test-chat/components/thread_section/thread_section',
    'text!app/components/test-chat/components/app/app.html',
    'css!app/components/test-chat/css/chat.css',
], function (Vue, store, actions, message_section, thread_section, template) {


    // Create component object
    var Chat = {
        name: 'test-chat',
        store: store,
        template: template,
        components: {
            'message-section': message_section,
            'thread-section': thread_section
        },
        created: function () {
            console.log('Component Chat created');
            // Ini config
            Vue.config.debug = true;
            // Ini filter
            Vue.filter('time', function (timestamp) {
                return new Date(timestamp).toLocaleTimeString();
            });
            actions.getAllMessages(store);
        }
    };

    return Chat;
});

