define([
    'vuex',
    'app/todomvc/store/index',
    'app/todomvc/components/todo/todo',
    'text!app/todomvc/components/app/app.html',
    'css!app/todomvc/components/app/style.css'
], function (Vuex, store, todo, template) {

    var filters = {
        all: function (todos) {
            return todos;
        },
        active: function (todos) {
            return todos.filter(function (todo) {
                return !todo.done;
            });
        },
        completed: function (todos) {
            return todos.filter(function (todo) {
                return todo.done;
            });
        }
    };

    var mapMutations = Vuex.mapMutations([
        'toggleAll',
        'clearCompleted'
    ]);

    var myMethods = {
        addTodo: function (e) {
            var text = e.target.value;
            if (text.trim()) {
                this.$store.commit('addTodo', text);
            }
            e.target.value = '';
        }
    };

    var methods = Object.assign(mapMutations, myMethods);

    // Create component class
    var TodoMvc = {
        name: 'TodoMvc',
        store: store,
        template: template,
        data: function () {
            return {
                visibility: 'all',
                filters: filters
            }
        },
        components: {todo: todo},
        computed: {
            todos: function () {
                return this.$store.state.todos;
            },
            allChecked: function () {
                return this.todos.every(function (todo) {
                    return todo.done;
                });
            },
            filteredTodos: function () {
                return filters[this.visibility](this.todos);
            },
            remaining: function () {
                return this.todos.filter(function (todo) {
                    return !todo.done
                }).length;
            }
        },
        methods: methods,
        filters: {
            pluralize: function (n, w) {
                return n === 1 ? w : (w + 's');
            },
            capitalize: function (s) {
                return s.charAt(0).toUpperCase() + s.slice(1);
            }
        }

    };
    return TodoMvc;
});

