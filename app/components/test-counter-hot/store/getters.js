define([], function () {
    var limit = 5;
    var getters = {
        count: function (state) {
            return state.count;
        },
        recentHistory: function (state) {
            var end = state.history.length;
            var begin = end - limit < 0 ? 0 : end - limit;
            var arr = state.history.slice(begin, end);
            var strArr = arr.toString();
            strArr = strArr.replace(/,/g, ', ');
            return strArr;
        }
    };
    return getters;
});

