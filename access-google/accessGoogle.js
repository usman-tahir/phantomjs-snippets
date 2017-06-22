(function () {
    'use strict';

    var page = require('webpage').create();

    page.open('http://google.com', function (status) {
        console.log('status: ' + status);
        if (status === 'success') {
            console.log('page successfully accessed');
            // Render an image of the page and save it
            page.render('accessed_google.png');
        }
        phantom.exit();
    });
}());