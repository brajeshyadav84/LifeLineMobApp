//angular.module('starter.factory', [])

LifeLine.factory('BloodBankPage', function ($http,$q, $ionicLoading) {

    var Countries = [];
    var Cities = [];
    var BloodBanks = [];
 var deferred = $q.defer();
  $ionicLoading.show({ template: 'Loading...' });

    return {
        getCountries: function () {
            return $http.get("http://api.geonames.org/childrenJSON?geonameId=1269750&username=sinnitesh").then(function (response) {
                Countries = response;
                return Countries;
            }, function (error) {
                return error;
            });
        },
        getCities: function (id) {
            return $http.get("http://api.geonames.org/childrenJSON?geonameId=" + id + "&username=sinnitesh").then(function (response) {
                Cities = response;
                return Cities;
            }, function (error) {
                return error;
            });
        },
        getbloodBanks: function (cityname, selectedstate) {            
            var serviceUrl = URLS.getBloodBankDetails
                + "?resource_id=" + bloodBankParam.res_id
                + "&api-key=" + bloodBankParam.api_key
                + "&filters[" + bloodBankParam.filterColumnName + "]=" + window.encodeURIComponent(selectedstate)
                + "&filters[" + bloodBankParam.filterColumnName1 + "]=" + window.encodeURIComponent(cityname)+",NA"
                + "&fields=" + bloodBankParam.fields
                + "&sort[" + bloodBankParam.sortcolumnName + "]=asc"
            console.log(serviceUrl);
            return $http.get(serviceUrl).success(function (response) {
          
                 $ionicLoading.hide();
                deferred.resolve(response);
            })
             .error(function (error) {
                $ionicLoading.hide();
                deferred.reject(error);
            });
        },
         gethospitals: function (cityname, selectedstate) {            
            var serviceUrl = URLS.getHospitalityDetails
                + "?resource_id=" + hospitalsParam.res_id
                + "&api-key=" + hospitalsParam.api_key
                + "&filters[" + hospitalsParam.filterColumnName + "]=" + window.encodeURIComponent(selectedstate)
                + "&filters[" + hospitalsParam.filterColumnName1 + "]=" + window.encodeURIComponent(cityname)+",NA"
                + "&fields=" + hospitalsParam.fields
                + "&sort[" + hospitalsParam.sortcolumnName + "]=asc"
            console.log(serviceUrl);
            return $http.get(serviceUrl).success(function (response) {
          
                 $ionicLoading.hide();
                deferred.resolve(response);
            })
             .error(function (error) {
                $ionicLoading.hide();
                deferred.reject(error);
            });
        }
    }
     return deferred.promise;
})
LifeLine.factory('loadLocaljson', function ($http, $q, $ionicLoading) {
    var mainInfo = [];
    var deferred = $q.defer();
    $ionicLoading.show({ template: 'Loading...' });
    return {
        get: function (serviceUrl) {            //$http.get('js/cities.json'); // this will return a promise to controller

           // return $http.get('js/citylist.json').success(function (data) {
         return $http.get(serviceUrl).success(function (data) {
                // then(function (data) {
                mainInfo = data;
                $ionicLoading.hide();
                deferred.resolve(data);
            })
                .error(function (error) {
                    $ionicLoading.hide();
                    deferred.reject(error);
                });
        }
    }
    return deferred.promise;
});
