define([
    'vuex',
    'text!app/components/todomvc/components/todo/todo.html'
], function (Vuex, template) {

    //--- Methods ---
    var mapMutations = Vuex.mapMutations([
        'editTodo',
        'toggleTodo',
        'deleteTodo'
    ]);
    
    var myMethods = {
        doneEdit: function (e) {
            var value = e.target.value.trim();
            
            if (!value) {
                this.deleteTodo(this.todo);
            } else if (this.editing) {
                this.editTodo({todo: this.todo, value: value});
                this.editing = false;
            }
        },
        cancelEdit: function (e) {
            e.target.value = this.todo.text;
            this.editing = false;
        }
    };

    var methods = Object.assign(mapMutations, myMethods);

    // Create component object
    var todo = {
        name: 'Todo',
        template: template,
        props: ['todo'],
        data: function () {
            return {
                editing: false
            };
        },
        directives: {
            focus: function (el, value, vnode) {
                if (value) {// vnode.context -> Vue component -> todo
                    vnode.context.$nextTick(function () {
                        el.focus();
                    });
                }
            }
        },
        methods: methods
    }
    return todo;
});

