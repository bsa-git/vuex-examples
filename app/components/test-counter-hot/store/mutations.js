define([], function () {
    var mutations = {
        increment: function (state) {
            state.count++;
            state.history.push('increment');
        },
        decrement: function (state) {
            state.count--;
            state.history.push('decrement');
        }
    };
    return mutations;
});
    
