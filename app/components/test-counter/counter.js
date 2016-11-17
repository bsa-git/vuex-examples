define([
    'vuex',
    'app/components/test-counter/store',
    'text!app/components/test-counter/counter.html',
], function (Vuex, store, template) {

    // Create component class
    var Counter = {
        name: 'Counter',
        store: store,
        template: template,
        computed: Vuex.mapGetters([
            'evenOrOdd'
        ]),
        methods: Vuex.mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])

    }
    return Counter;
});

