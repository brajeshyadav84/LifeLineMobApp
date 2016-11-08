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
            // var res_id = "e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9";
            // var api_key = "9555f4b13e18327cb4a655f672c4fb37";
            // var filterColumnName = "district";
            // var filterColumnValue = id;
            // var fields = "state,city,district,h_name,address,pincode,contact,helpline,email,service_time";
            // var sortcolumnName = "district";
            // var offset = "1";
            // var no_elements = "100";
            // var link = "http://data.gov.in/api/datastore/resource.json"
            //     + "?resource_id=" + res_id
            //     + "&api-key=" + api_key
            //     + "&filters[" + filterColumnName + "]=" + filterColumnValue
            //     + "&fields=" + fields
            //     + "&sort[" + sortcolumnName + "]=asc"
            var serviceUrl = URLS.getBloodBankDetails
                + "?resource_id=" + bloodBankParam.res_id
                + "&api-key=" + bloodBankParam.api_key
                + "&filters[" + bloodBankParam.filterColumnName + "]=" + window.encodeURIComponent(selectedstate)
                + "&filters[" + bloodBankParam.filterColumnName1 + "]=" + window.encodeURIComponent(cityname)+",NA"
                + "&fields=" + bloodBankParam.fields
                + "&sort[" + bloodBankParam.sortcolumnName + "]=asc"
            console.log(serviceUrl);
            return $http.get(serviceUrl).success(function (response) {
            
            //.then(function (response) {
               // BloodBanks = response;
                //return BloodBanks;
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
        get: function () {            //$http.get('js/cities.json'); // this will return a promise to controller

            return $http.get('js/citylist.json').success(function (data) {
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
