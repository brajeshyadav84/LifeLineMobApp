angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $state, $stateParams) {
	if(localStorage.isFirstTime){
		$state.go("app.dashboard");
	} else {
		$state.go("tour");
	}
})

.controller('DashCtrl', function($scope) {
	localStorage.setItem("isFirstTime", true);
})

.controller('BBListCtrl', function($scope) {
    $scope.groups = [];
    for (var i = 0; i < 10; i++) {
        $scope.groups[i] = {
            name: i,
            items: []
        };
        for (var j = 0; j < 1; j++) {
            //$scope.groups[i].items.push(i + '-' + j);
            $scope.groups[i].items.push("Blood Bank Description goes here...");
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
    };
    $scope.isGroupShown = function (group) {
        return $scope.shownGroup === group;
    };
});


