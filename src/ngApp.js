define([ 'require', 'jquery', 'angular', 'ng-route', 'ng-animate', 'ng-aria', 'ng-material', 'ng-sanitize'], function(){

    //console.log('init angular.');
    var ngApp = angular.module('ngApp', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngSanitize'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('cyan',{
                    'default': '800'
                })
                .accentPalette('teal',{
                    'default': '900'
                });
        })
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('pastwork')
                .primaryPalette('yellow',{
                    'default': '200'
                })
                .accentPalette('teal',{
                    'default': '600'
                });
        });

    return ngApp;

});