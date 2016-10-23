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
	localStorage.setItem("isFirstTime", true);
});


