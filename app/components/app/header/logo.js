define([
    'text!app/components/app/header/logo.html',
], function (template) {

    // Create component Logo class
    var Logo = {
        name: 'app-logo',
        template: template,
        data: function () {
            return { 
                logo_1: 'Vuex',
                logo_2: 'Examples',
                logo_description: 'Vuex is a state management pattern + library for Vue.js applications.', 
            }
        }
    };
    return Logo;
});