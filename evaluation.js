(function () {
    'use strict';

    var page = require('webpage').create(),
        url = 'http://google.com';

    page.open(url, function (status) {
        var title = page.evaluate(function () {
            return document.title;
        });
        console.log('page title: ' + title);
        phantom.exit();
    });
}());