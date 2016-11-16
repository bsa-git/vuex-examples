define([
    // Vue.js
    'vue',
    'app/components/app/content_site/content',
    'app/components/app/content_site/sidebar',
    'text!app/components/app/content_site/content_site.html'
], function (Vue, Content, Sidebar, template) {

    // Create component ContentSite class
    var ContentSite = Vue.extend({
        template: template,
        components: {
            'app-content': Content,
            'app-sidebar': Sidebar,
        }
    })
    return ContentSite;
});