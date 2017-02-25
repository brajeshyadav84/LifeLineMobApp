
LifeLine.controller('hospitalityCtrl', function ($scope, $state, $stateParams, $ionicLoading , BloodBankPage, loadLocaljson, lifeLineService, $cordovaSocialSharing) {
    
    $scope.hospitalityType = $stateParams.hospitalityType;

	$scope.groups = [];
    $scope.countries = [];
    $scope.cities = [];
    $scope.selectedstate = '';
var jsonLocation=URLS.getLocalJsonforHospitals;
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
    }

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
	 }

	$scope.updateDetails = function (objSelected) {
        console.log(objSelected);
        $scope.groups = [];
        var request = {};
        $scope.showLoading();
        
    if (objSelected.ID != null && objSelected.ID != "") {
            console.log(objSelected);            
            BloodBankPage.gethospitals(objSelected.ID.name,$scope.selectedstate).then(function (response) {
                
                if (response.data.success) {
                    for (var i = 0; i < response.data.count; i++) {

                        $scope.groups[i] = {
                            state: response.data.records[i].state,
                            city: response.data.records[i].district,
                            h_name: response.data.records[i].Hospital_Name,
                            items: []
                        };
                        $scope.groups[i].items.push({
                            district: response.data.records[i].district,
                            h_name: response.data.records[i].Hospital_Name,
                            address: response.data.records[i].Location,
                            contact: response.data.records[i].Mobile_Number,
                            helpline: response.data.records[i].Helpline,
                            pincode: response.data.records[i].Pincode,
                            email: response.data.records[i].Hospital_Primary_Email_Id,
                            //service_time: response.data.records[i].service_time,
                        }
                        );

                    }
                }
                //$scope.groups.sort();
                //console.log($scope.groups.length);

            });
        }


	    //var serviceUrl = URLS.getHospitalityDetails + '&query='+$scope.hospitalityType+'in'+ objSelected.ID.name;
	    // lifeLineService.postExternalUrl(request, serviceUrl).then(function (response) {
	    //     console.log("response");console.log(response.data.results);
	    //     $scope.groups = response.data.results;
	    // }, function (error) {
	    //     console.log(error);
	    // });
	        
    }
});