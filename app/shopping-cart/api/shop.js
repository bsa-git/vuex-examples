define([], function () {

    // initial state
    var _products = [
        {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
    ];

    var getProducts = function (cb) {
        return setTimeout(function () {
            cb(_products)
        }, 100);
    };

    var buyProducts = function (products, cb, errorCb) {
        return setTimeout(function () {
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                    ? cb()
                    : errorCb();
        }, 100);
    };

    return {
        getProducts: getProducts,
        buyProducts: buyProducts
    }

});

