
LifeLine.controller('hospitalityCtrl', function ($scope, $state, $stateParams, $ionicLoading , BloodBankPage, loadLocaljson, lifeLineService) {
    
    console.log("$stateParams");
    $scope.hospitalityType = $stateParams.hospitalityType;

	$scope.groups = [];
    $scope.countries = [];
    $scope.cities = [];
    $scope.selectedstate = '';

    loadLocaljson.get().then(function (response) {
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

        $scope.groups = [];
        var request = {};
        $scope.showLoading();
        
        var request = {};
	    var serviceUrl = URLS.getHospitalityDetails + '&query=hospital+in+kanpur';
	    lifeLineService.postExternalUrl(request, serviceUrl).then(function (response) {
	        console.log("response");console.log(response.data.results);
	        $scope.groups = response.data.results;
	    }, function (error) {
	        console.log(error);
	    });
	        
    }
});