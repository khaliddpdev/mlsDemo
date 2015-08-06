define(['ngApp'],function(ngApp){
    return ngApp.directive('featureChips',[ '$mdMedia', function(){
        return {
            restrict : 'AC',
            controller : function($scope, $mdMedia){
                //$scope.features =['n/a'];
                //console.log('featureChips.scope: ', $scope);
                //if($scope.property.interiorFeatures){
                //    $scope.features = $scope.property.interiorFeatures.split(',');
                //}
            }
        }
    }])
});