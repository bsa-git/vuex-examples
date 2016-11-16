define([
    'vuex',
    'app/components/counter-hot/store/index',
    'text!app/components/counter-hot/counter.html',
], function (Vuex, store, template) {

    // Create component class
    var CounterHot = {
        name: 'CounterHot',
        store: store,
        template: template,
        computed: Vuex.mapGetters([
            'count',
            'recentHistory'
        ]),
        methods: Vuex.mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
    return CounterHot;
});

