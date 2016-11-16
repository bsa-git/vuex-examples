define([
    // Vue.js
    'vue',
    'text!app/components/app/content_site/content.html',
], function (Vue, template) {

    // Create component ContentSidebar class
    var Content = Vue.extend({
        template: template
    })
    return Content;
});