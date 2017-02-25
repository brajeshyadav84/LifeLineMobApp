//angular.module('starter.controllers', [])

LifeLine.controller('bloodBankCtrl', function ($scope, $state,$ionicLoading , BloodBankPage, loadLocaljson, lifeLineService, $cordovaSocialSharing ) { // $cordovaSocialSharing, $ionicPopup
    $scope.groups = [];
    $scope.countries = [];
    $scope.cities = [];
    $scope.selectedstate = '';
    // $scope.bloodbankResult = {};
    var request = {};
    // var serviceUrl = URLS.getCountryDetails;
    // lifeLineService.postExternalUrl(request, serviceUrl).then(function (response) {
    //     //console.log("bloodbank");
    //     $scope.selectedstate = '';
    //     for (var i = 0; i < response.data.totalResultsCount; i++) {
    //         $scope.countries[i] = {
    //             name: response.data.geonames[i].name,
    //             id: response.data.geonames[i].geonameId
    //         };
    //     }
    // }, function (error) {
    //     console.log(error);
    // });
var jsonLocation=URLS.getLocalJsonforBlodBank;
 console.log(jsonLocation); 
    loadLocaljson.get(jsonLocation).then(function (response) {
        //console.log(response.data);        
        $scope.selectedstate = '';
        for (var i = 0; i < response.data.length; i++) {
            $scope.countries[i] = {
                name: response.data[i].state,
                id: response.data[i].id,
                city: response.data[i].cityname
            };
        }
    }, function (error) {
        console.log(error);
    });
 console.log( $scope.countries);     
    //Update Cities
    $scope.updateCities = function (city_id) {
        console.log(city_id);
         $scope.cities=[];
        if (city_id.ID != "" && city_id.ID != null) {
            $scope.selectedstate = city_id.ID.name;
            for (var i = 0; i < city_id.ID.city.length; i++) {
                $scope.cities[i] = {
                    name: city_id.ID.city[i],
                    id: i+1
                };
            }
        }
          console.log($scope.cities);
        // var request = {};
        // var serviceUrl = URLS.getCityDetails + city_id.ID.id + "&username=sinnitesh";
        // lifeLineService.postExternalUrl(request, serviceUrl).then(function (response) {

        //     for (var i = 0; i < response.data.totalResultsCount; i++) {
        //         $scope.cities[i] = {
        //             name: response.data.geonames[i].name,
        //             id: response.data.geonames[i].geonameId
        //         };
        //     }
        // });
    }

    $scope.updatebloodBanks = function (objSelected) {

        $scope.groups = [];
        var request = {};
         $scope.showLoading();
        if (objSelected.ID != null && objSelected.ID != "") {
            console.log(objSelected);            
            BloodBankPage.getbloodBanks(objSelected.ID.name,$scope.selectedstate).then(function (response) {
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
                            contact: response.data.records[i].contact.split(","),
                            helpline: response.data.records[i].helpline,
                            pincode: response.data.records[i].pincode,
                            email: response.data.records[i].email,
                            service_time: response.data.records[i].service_time,
                        }
                        );

                    }
                }
                //$scope.groups.sort();
                //console.log($scope.groups.length);

            });
        }


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
    $scope.showLoading = function() {
        $ionicLoading.show({
          template: 'Loading...',
          duration: 3000
        }).then(function(){
           console.log("The loading indicator is now displayed");
        });
    };

    $scope.btnDoners = function () {
        window.open("http://www.bloodbankindia.net/home/index#",'_system');
    }

    $scope.shareDetails = function(data){
        var address = data.address != "NA" ? "Address -: "+data.address : "";
        var contact = data.contact != "NA" ? "Contact -: "+data.contact : "";
        var result = data.h_name + address + contact;
        console.log(result);
        $cordovaSocialSharing.share(result, 'LifeLine India!', null, 'http://www.interviewgully.com/API/appLauncher.html');
    };


  
})