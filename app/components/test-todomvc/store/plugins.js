define(['app/components/test-todomvc/store/mutations'], function (mutations) {

    var localStoragePlugin = function (store) {
        store.subscribe(function (mutation, todos) {
            window.localStorage.setItem(mutations.storage_key, JSON.stringify(todos))
        })
    }
    return [localStoragePlugin];
});
