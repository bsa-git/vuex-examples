define([
    // Components
    'app/components/app/header/logo',
    'app/components/app/header/menubar',
    'text!app/components/app/header/header.html'
], function (Logo, Menubar, template) {

    // Create component Header class
    var Header = {
        name: 'app-header',
        template: template,
        components: {
            'app-logo': Logo,
            'app-menubar': Menubar,
        }
    };
    return Header;
});
