define(['ngApp'],function(ngApp){
    return ngApp.directive('searchBar',[ 'listingsProvider', function(listingsProvider){
        return {
            restrict : 'AC',
            controller : function($scope){
                $scope.updateResults = function(){
                    $scope.listings = [];
                    listingsProvider.$get({
                        features : $scope.featuresSpec
                    }, function(err, data) {
                        if(err) throw err;
                        $scope.listings = data;
                    });
                }

            }
        }
    }])
});