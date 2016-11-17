define([
    'text!app/components/app/content_header/content_header.html',
], function (template) {

    // Create component ContentHeader class
    var ContentHeader = {
        name: 'app-content-header',
        template: template
    };
    return ContentHeader;
});