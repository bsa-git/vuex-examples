define([], function () {
    var actions = {
        increment: function (context) {
            return context.commit('increment');
        },
        decrement: function (context) {
            context.commit('decrement');
        },
        incrementIfOdd: function (context) {
            if ((context.state.count + 1) % 2 === 0) {
                context.commit('increment');
            }
        },
        incrementAsync: function (context) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    context.commit('increment');
                    resolve();
                }, 1000);
            });
        }
    };
    return actions;
});
