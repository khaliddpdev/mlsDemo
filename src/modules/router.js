define(['require', 'ngApp'], function(require){
    var ngApp = require('ngApp');

    var router = ngApp.config(["$routeProvider", function ($routeProvider) {
        return $routeProvider
            .when("/", {templateUrl: "views/home.html", controller: 'homeViewController'})
            .when("/home", {templateUrl: "views/home.html", controller: 'homeViewController'})
            .when("/about", {templateUrl: "views/about.html", controller: 'aboutViewController'})
            .otherwise({redirectTo: "/"})
    }]);

    console.log('init router.');


    return {
        router : router
    };

});