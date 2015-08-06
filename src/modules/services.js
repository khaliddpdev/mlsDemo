define(['ngApp','underscore'],function(ngApp, _){

    /**
     * @name listingsProvider
     * @type {*|Object}
     */
    var listingsProvider = ngApp.service('listingsProvider', ['$http', function($http){


        this.$get = function(passedParams, callback, thisArg){
            var searchParams = {
                type : 'residential'
            },
                baseURL = 'https://api.simplyrets.com/properties?',
                compiledURL = baseURL;

            _.extend(searchParams, passedParams);

            _.forEach(searchParams, function(key, val, obj){
                compiledURL += encodeURI(val+'='+key+'&');
            });

            console.log('getting url: ', compiledURL, arguments);
            $http({
                url: compiledURL,
                method: 'GET',
                headers: {
                    "Authorization" : "Basic " + btoa("simplyrets:simplyrets")
                }
            })
                .success(function(data, status, headers, config) {
                    if (data.length == 0) data.push({result: 'no results'});
                    callback.apply(thisArg, [null, data, searchParams, status]);
                })
                .error(function(data, status, headers, config) {
                    callback.apply(thisArg, [new Error(status), searchParams, status]);
                });
        };

        return this;
    }]);

    console.log('init services');

});