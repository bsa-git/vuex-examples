define([
    // Vue.js
    'vue',
    'text!app/components/app/header/menubar.html',
], function (Vue, template) {

    // Create component Logo class
    var Menubar = Vue.extend({
        template: template
    })
    return Menubar;
});