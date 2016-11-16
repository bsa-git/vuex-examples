define([
    // Vue.js
    'vue',
    // Components
    'app/components/app/header/logo',
    'app/components/app/header/menubar',
    'text!app/components/app/header/header.html'
], function (Vue, Logo, Menubar, template) {

    // Create component Header class
    var Header = Vue.extend({
        template: template,
        components: {
            'app-logo': Logo,
            'app-menubar': Menubar,
        }
    })
    return Header;
});
