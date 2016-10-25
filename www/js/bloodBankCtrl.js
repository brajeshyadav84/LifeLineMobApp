//angular.module('starter.controllers', [])

LifeLine.controller('bloodBankCtrl', function ($scope, $state, BloodBankPage) {
    $scope.groups = [];
    $scope.countries = [];
    $scope.cities = [];
    $scope.bloodbankResult = {


    };
    //Fetching Country List    
    BloodBankPage.getCountries().then(function (response) {


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

    });
    //Update Cities
    $scope.updateCities = function (city_id) {
        BloodBankPage.getCities(city_id).then(function (response) {
            for (var i = 0; i < response.data.totalResultsCount; i++) {
                $scope.cities[i] = {
                    name: response.data.geonames[i].name,
                    id: response.data.geonames[i].geonameId
                };
            }
            $scope.groups = [];
            //console.log($scope.cities);
        });

    }

    $scope.updatebloodBanks = function (objSelected) {
        console.log(objSelected);
        BloodBankPage.getbloodBanks(objSelected.ID.name).then(function (response) {
            console.log(response.data);
            if (response.data.success) {
                for (var i = 0; i < response.data.count; i++) {

                    $scope.groups[i] = {
                        state: response.data.records[i].state,
                        city: response.data.records[i].city,
                        items: []
                        //district: response.data.records[i].district,
                        //h_name: response.data.records[i].h_name,
                        //address: response.data.records[i].address,
                        //contact: response.data.records[i].contact,
                        //helpline: response.data.records[i].helpline,
                        //pincode: response.data.records[i].pincode,
                        //email: response.data.records[i].email,
                        //service_time: response.data.records[i].service_time,


                    };
                    //for (var j = 0; j < 1; j++) {

                        //$scope.groups[i].items.push("Blood Bank Description goes here...");
                    $scope.groups[i].items.push({
                        district: response.data.records[i].district,
                        h_name: response.data.records[i].h_name ,
                        address: response.data.records[i].address,
                        contact: response.data.records[i].contact,
                        helpline: response.data.records[i].helpline ,
                        pincode: response.data.records[i].pincode,
                        email: response.data.records[i].email,
                        service_time: response.data.records[i].service_time,
                    }
                        //response.data.records[i]
                        );
                    //}

                }
            }
            console.log($scope.groups.length);

        });

    }
    //Update list items

    //for (var i = 0; i < 10; i++) {
    //    $scope.groups[i] = {
    //        name: i,
    //        items: []
    //    };
    //    for (var j = 0; j < 1; j++) {
    //        //$scope.groups[i].items.push(i + '-' + j);
    //        $scope.groups[i].items.push("Blood Bank Description goes here...");
    //    }
    //}

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
    };
    $scope.isGroupShown = function (group) {
        return $scope.shownGroup === group;
    };
});