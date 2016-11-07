define([
    'vuex',
    'app/counter/store',
    'text!app/counter/counter.html',
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

