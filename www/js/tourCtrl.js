LifeLine.controller('tourCtrl', function ($scope, $state, lifeLineService, $stateParams, loadLocaljson, lifeLineService) {

	$scope.bloodGroupList = [
		{'id': 1, 'label': '0 +'},
        {'id': 2, 'label': '0 -'},
        {'id': 3, 'label': 'A +'},
        {'id': 4, 'label': 'A -'},
        {'id': 5, 'label': 'B +'},
        {'id': 6, 'label': 'B -'},
        {'id': 7, 'label': 'AB +'},
        {'id': 8, 'label': 'AB -'},
    ];

    ////$scope.user.bloodGroup= $scope.bloodGroupList[0]; // Set by default the value "test1"

	$scope.btnSubmit = function (userInfo) {
		var userDetails = {
            email: userInfo.email,
            name: userInfo.name,
            mobile: userInfo.mobile,
            bloodGroup: userInfo.bloodGroup,
            state: userInfo.SelectedState.ID,
            city: userInfo.SelectedOption.ID
        }
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
		$state.go("app.dashboard");
	};

    $scope.groups = [];
    $scope.countries = [];
    $scope.cities = [];
    $scope.selectedstate = '';
    var jsonLocation=URLS.getLocalJsonforBlodBank;
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
    };


})