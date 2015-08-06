({
    name: 'app',
    optimize: 'none',
    waitSeconds: 0,
    paths: {
        'angular' : 'vendors/angular.min',
        'ng-animate' : 'vendors/angular-animate.min',
        'ng-aria' : 'vendors/angular-aria.min',
        'ng-material' : 'vendors/angular-material.min',
        'ng-route' : 'vendors/angular-route.min',
        'ng-sanitize' : 'vendors/angular-sanitize.min',
        'backbone' : 'vendors/backbone.min',
        'underscore' : 'vendors/lodash.min',
        'modernizr' : 'vendors/modernizr',
        'domReady' : 'vendors/domReady.min',
        'text' : 'vendors/text',
        'jquery' : 'vendors/jquery.min',
        'live' : 'vendors/live',
        'flexslider' : 'vendors/flexslider/jquery.flexslider-min',
        'lightbox' : 'vendors/lightbox/js/lightbox.min',
        'ngApp': 'ngApp',
        'controllers': 'modules/controllers',
        'directives': 'modules/directives',
        'services': 'modules/services',
        'router': 'modules/router'
    },
    shim : {
        "angular" : {
            "exports" : "angular"
        },
        "ng-animate" :  ["angular"],
        "ng-aria" :  ["angular"],
        "ng-route" :  ["angular"],
        "ng-material" :  ["angular"],
        "ng-sanitize" :  ["angular"],
        "flexslider" :  ["jquery"],
        "lightbox" :  ["jquery"],
        "live" : []
    },
    out: "../build/mlsDemo-src.js"
});