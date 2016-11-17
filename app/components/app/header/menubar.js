define([
    'text!app/components/app/header/menubar.html',
], function (template) {

    // Create component Logo class
    var Menubar = {
        name: 'app-menubar',
        template: template
    };
    return Menubar;
});