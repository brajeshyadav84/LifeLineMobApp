LifeLine.controller('tourCtrl', function ($scope, $state, lifeLineService, $stateParams) {

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

    //$scope.user.bloodGroup= $scope.bloodGroupList[0]; // Set by default the value "test1"

	$scope.btnSubmit = function (userInfo) {
		console.log(userInfo);
		$state.go("app.dashboard");
	}

})