//angular.module('starter.factory', [])

LifeLine.factory('BloodBankPage', function ($http) {

    var Countries = [];
    var Cities = [];
    var BloodBanks = [];


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
                return $http.get("http://api.geonames.org/childrenJSON?geonameId="+id+"&username=sinnitesh").then(function (response) {
                    Cities = response;
                    return Cities;
                }, function (error) {
                    return error;
                });
            },
            getbloodBanks: function (id) {
                var res_id = "e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9";
                var api_key = "9555f4b13e18327cb4a655f672c4fb37";
                var filterColumnName = "district";
                var filterColumnValue = id;
                var fields = "state,city,district,h_name,address,pincode,contact,helpline,email,service_time";
                var sortcolumnName = "district";
                var offset="1";
                var no_elements = "100";
                var link = "http://data.gov.in/api/datastore/resource.json"
                            +"?resource_id="+ res_id
                            + "&api-key=" + api_key
                            + "&filters[" + filterColumnName + "]=" + filterColumnValue
                            + "&fields=" + fields
                            + "&sort[" + sortcolumnName + "]=asc"

                return $http.get(link).then(function (response) {
                    BloodBanks = response;
                    return BloodBanks;
                }, function (error) {
                    return error;
                });
            }
        }
})
LifeLine.factory('loadLocaljson', function ($http) {
    var mainInfo = [];
    return {
        get: function () {
            //$http.get('js/cities.json'); // this will return a promise to controller
            $http.get('js/cities.json').success(function (data) {
                console.log(data);
                mainInfo = data;

            });
        }
    }
});
