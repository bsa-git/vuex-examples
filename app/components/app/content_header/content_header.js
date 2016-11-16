define([
    // Vue.js
    'vue',
    'text!app/components/app/content_header/content_header.html',
], function (Vue, template) {

    // Create component ContentHeader class
    var ContentHeader = Vue.extend({
        template: template
    })
    return ContentHeader;
});