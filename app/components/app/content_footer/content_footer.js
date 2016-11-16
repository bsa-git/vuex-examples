define([
    // Vue.js
    'vue',
    'text!app/components/app/content_footer/content_footer.html',
], function (Vue, template) {

    // Create component ContentFooter class
    var ContentFooter = Vue.extend({
        template: template
    })
    return ContentFooter;
});