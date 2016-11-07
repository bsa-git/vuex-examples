define([
    'vuex',
    'app/chat/components/thread/thread',
    'text!app/chat/components/thread_section/thread_section.html'
], function (Vuex, thread, template) {

    //--- Methods ---
    var mapGetters = Vuex.mapGetters([
        'threads',
        'currentThread'
    ]);

    var myComputed = {
        unreadCount: function () {
            var threads = this.threads;
            return Object.keys(threads).reduce(function (count, id) {
                return threads[id].lastMessage.isRead
                        ? count
                        : count + 1;
            }, 0);
        }
    };

    var computed = Object.assign(mapGetters, myComputed);

    // Create component object
    var ChatThreadSection = {
        name: 'ChatThreadSection',
        template: template,
        components: {thread: thread},
        computed: computed,
        methods: {
            switchThread: function (id) {
                this.$store.dispatch('switchThread', id);
            }
        }
    };
    return ChatThreadSection;
});



