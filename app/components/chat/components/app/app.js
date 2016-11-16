define([
    'vue',
    'app/components/chat/store/index',
    'app/components/chat/store/actions',
    'app/components/chat/components/message_section/message_section',
    'app/components/chat/components/thread_section/thread_section',
    'text!app/components/chat/components/app/app.html',
    'css!app/components/chat/css/chat.css',
], function (Vue, store, actions, message_section, thread_section, template) {


    // Create component object
    var Chat = {
        name: 'Chat',
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

