define([
    // Vue.js
    'vue',
    // Components
    'app/components/app/header/header',
    'app/components/app/content_header/content_header',
    'app/components/app/content_site/content_site',
    'app/components/app/content_footer/content_footer',
    'app/components/app/footer/footer'
], function (Vue, Header, ContentHeader, ContentSite, ContentFooter, Footer) {

    // Create component App class
    var App = Vue.extend({
        components: {
            'app-header': Header,
            'app-content-header': ContentHeader,
            'app-content-site': ContentSite,
            'app-content-footer': ContentFooter,
            'app-footer': Footer,
        }
    })
    return App;
});
