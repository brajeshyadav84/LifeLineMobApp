//angular.module('starter.services', [])

    LifeLine.service('lifeLineService',function($http,$q,$ionicLoading,$timeout){

    	return {
    		postLifeLineAPI: function (Request, serviceMethod) {
                var deferred = $q.defer();
                $ionicLoading.show({template: 'Loading...'});
                var url = SERVER.LIfeLIneUrl + serviceMethod;
                return $http.post(url, Request)
                    .success(function (response) {
                        $ionicLoading.hide();
                        deferred.resolve(response);
                    })
                    .error(function (error) {
                        $ionicLoading.hide();
                        deferred.reject(error);
                    });
                return deferred.promise;
            },

            postExternalUrl: function (Request, serviceUrl) {
                var deferred = $q.defer();
                $ionicLoading.show({template: 'Loading...'});
                var url = serviceUrl;
                return $http.post(url, Request)
                    .success(function (response) {
                        $ionicLoading.hide();
                        deferred.resolve(response);
                    })
                    .error(function (error) {
                        $ionicLoading.hide();
                        deferred.reject(error);
                    });
                return deferred.promise;
            }
    	}
    })