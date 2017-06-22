(function () {
    'use strict';

    var page = require('webpage').create(),
        system = require('system'),
        t,
        address;
    
    if (system.args.length === 1) {
        console.log('usage: loadSpeed.js <some URL>');
        phantom.exit();
    } else {
        t = Date.now();
        address = system.args[1];
        page.open(address, function (status) {
            if (status !== 'success') {
                console.log('failed to load the address.');
            } else {
                t = Date.now() - t;
                console.log('loading ' + address + '...');
                console.log('loading time: ' + t + ' ms');
            }
            phantom.exit();
        });
    }
}());