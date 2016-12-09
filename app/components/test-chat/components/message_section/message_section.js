define([
    'vuex',
    'app/components/test-chat/components/message/message',
    'text!app/components/test-chat/components/message_section/message_section.html'
], function (Vuex, message, template) {

    //--- Methods ---
    var mapGetters = Vuex.mapGetters({
        thread: 'currentThread',
        messages: 'currentMessages'
    });

    var myComputed = {
        sortedMessages: function () {
            return this.messages
                    .slice()
                    .sort(function (a, b) {
                        return a.timestamp - b.timestamp;
                    });
        }
    };

    var computed = _.merge(mapGetters, myComputed);

    // Create component object
    var ChatMessageSection = {
        name: 'ChatMessageSection',
        template: template,
        components: {message: message},
        computed: computed,
        watch: {
            'thread.lastMessage': function () {
                this.$nextTick(function () {
                    var ul = this.$refs.list;
                    ul.scrollTop = ul.scrollHeight;
                });
            }
        },
        methods: {
            sendMessage: function (e) {
                var text = e.target.value;
                if (text.trim()) {
                    this.$store.dispatch('sendMessage', {
                        text: text,
                        thread: this.thread
                    });
                    e.target.value = '';
                }
            }
        }
    };
    return ChatMessageSection;
});



