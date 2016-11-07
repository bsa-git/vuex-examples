define([], function () {
    
    var todos = [];
    //----------------------
    var STORAGE_KEY = 'todos-vuejs';
    var oTodos = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if(oTodos){
        todos = oTodos.todos;
    }
    var state = {
        todos: todos
    };

    var mutations = {
        addTodo: function (state, text) {
            state.todos.push({
                text: text,
                done: false
            });
        },
        deleteTodo: function (state, todo) {
            var indexOf = state.todos.indexOf(todo);
            state.todos.splice(indexOf, 1);
        },
        toggleTodo: function (state, todo) {
            todo.done = !todo.done;
        },
        editTodo: function (state, values) {
            values.todo.text = values.value;
        },
        toggleAll: function (state, done) {
            state.todos.forEach(function (todo) {
                todo.done = done;
            });
        },
        clearCompleted: function (state) {
            state.todos = state.todos.filter(function (todo) {
                return !todo.done;
            });
        }
    };
    return {
        storage_key: STORAGE_KEY,
        state: state,
        mutations: mutations
    };
});

