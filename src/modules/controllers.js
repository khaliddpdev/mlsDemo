define(['require', 'ngApp'],function(require){
    var ngApp = require('ngApp');

    var mainController = ngApp.controller('mainController',
        [ '$scope', '$rootScope',
            function ($scope, $rootScope) {

            }
        ]);

    var homeController = ngApp.controller('homeViewController',
        [ '$scope', 'listingsProvider','$rootScope',
            function ($scope, listingsProvider, $rootScope) {
                listingsProvider.$get({

                }, function(err, data){
                    if (err) throw err;
                    $scope.listings = data;
                    console.log($scope.listings);
                })
            }
        ]);

    var aboutController = ngApp.controller('aboutViewController',
        [ '$scope', 'listingsProvider','$rootScope',
            function ($scope, listingsProvider, $rootScope) {
                // about page
            }
        ]);

    console.log('init controllers.');

    return mainController;
});