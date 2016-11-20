LifeLine.controller('helpCtrl', function ($scope, $state, lifeLineService, $stateParams) {

	$scope.helpForShake = $stateParams.helpForShake;

	console.log($scope.helpForShake);

	//if($scope.helpForShake){
		//shake.startWatch(onShake, 25 /*, onError */);
	//}

	var onShake = function () {
	  // Fired when a shake is detected
	  alert("hello shake me");
	};

	var onError = function () {
	  // Fired when there is an accelerometer error (optional)
	};

})