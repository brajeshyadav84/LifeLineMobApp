//angular.module('starter.controllers', [])

LifeLine.controller('bloodBankCtrl', function ($scope, $state, BloodBankPage, lifeLineService) {
    $scope.groups = [];
    $scope.countries = [];
    $scope.cities = [];
    $scope.bloodbankResult = {

    };

    var request = {};
    var serviceUrl = URLS.getCountryDetails;

    lifeLineService.postExternalUrl(request, serviceUrl).then(function (response) {
        console.log("bloodbank");
        for (var i = 0; i < response.data.totalResultsCount; i++) {
            $scope.countries[i] = {
                name: response.data.geonames[i].name,
                id: response.data.geonames[i].geonameId
            };
        }

        for (var i = 0; i < response.data.totalResultsCount; i++) {
            $scope.countries[i] = {
                name: response.data.geonames[i].name,
                id: response.data.geonames[i].geonameId
            };
        }
    }, function (error) {
        console.log(error);
    });

    //Update Cities


    $scope.updateCities = function (city_id) {
        var request = {};
        var serviceUrl = URLS.getCityDetails + city_id + "&username=sinnitesh";
        lifeLineService.postExternalUrl(request, serviceUrl).then(function (response) {
            console.log("City Details");
            for (var i = 0; i < response.data.totalResultsCount; i++) {
                $scope.cities[i] = {
                    name: response.data.geonames[i].name,
                    id: response.data.geonames[i].geonameId
                };
            }
        });
    }

    $scope.updatebloodBanks = function (objSelected) {
        console.log(objSelected);
        $scope.groups = [];
        var request = {};
        var serviceUrl = URLS.getBloodBankDetails
                    + "?resource_id=" + bloodBankParam.res_id
                    + "&api-key=" + bloodBankParam.api_key
                    + "&filters[" + bloodBankParam.filterColumnName + "]=" + objSelected.ID.name
                    + "&fields=" + bloodBankParam.fields
                    + "&sort[" + bloodBankParam.sortcolumnName + "]=asc"
        // var serviceUrl = URLS.getCityDetails + city_id + "&username=sinnitesh";
        //lifeLineService.postExternalUrl(request, serviceUrl).then(function (response) {
        //    console.log("Blood Bank Details");
        //    if (response.data.success) {
        //        for (var i = 0; i < response.data.count; i++) {

        //            $scope.groups[i] = {
        //                state: response.data.records[i].state,
        //                city: response.data.records[i].city,
        //                items: []
        //            };
        //            $scope.groups[i].items.push({
        //                district: response.data.records[i].district,
        //                h_name: response.data.records[i].h_name,
        //                address: response.data.records[i].address,
        //                contact: response.data.records[i].contact,
        //                helpline: response.data.records[i].helpline,
        //                pincode: response.data.records[i].pincode,
        //                email: response.data.records[i].email,
        //                service_time: response.data.records[i].service_time,
        //            }

        //                );


        //        }
        //    }
        //    console.log($scope.groups.length);
        //});
        BloodBankPage.getbloodBanks(objSelected.ID.name).then(function (response) {
            console.log(response.data);
            if (response.data.success) {
                for (var i = 0; i < response.data.count; i++) {

                    $scope.groups[i] = {
                        state: response.data.records[i].state,
                        city: response.data.records[i].city,
                        h_name: response.data.records[i].h_name,
                        items: []
                    };
                    $scope.groups[i].items.push({
                        district: response.data.records[i].district,
                        h_name: response.data.records[i].h_name,
                        address: response.data.records[i].address,
                        contact: response.data.records[i].contact,
                        helpline: response.data.records[i].helpline,
                        pincode: response.data.records[i].pincode,
                        email: response.data.records[i].email,
                        service_time: response.data.records[i].service_time,
                    }
                        );

                }
            }
            console.log($scope.groups.length);

        });


    }
    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    }
    $scope.isGroupShown = function (group) {
        return $scope.shownGroup === group;
    }
})