define([
    // Vue.js
    'vue',
    'text!app/components/app/content_site/sidebar.html',
], function (Vue, template) {

    // Create component ContentSidebar class
    var ContentSidebar = Vue.extend({
        template: template
    })
    return ContentSidebar;
});