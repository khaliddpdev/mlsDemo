define(['ngApp'],function(ngApp){
    return ngApp.directive('propertyListing',[ '$mdMedia', function(){
        return {
            restrict : 'AC',
            controller : function($scope, $mdMedia){
                var featuresText = $scope.listing['property']['interiorFeatures'];
                $scope.features = (featuresText)?featuresText.split(','):[];

            }
        }
    }])
});