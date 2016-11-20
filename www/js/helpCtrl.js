LifeLine.controller('helpCtrl', function ($scope, $state, lifeLineService, $stateParams) {

	$scope.helpForShake = $stateParams.helpForShake;

	console.log($scope.helpForShake);
	if(window.shake) {
		if($scope.helpForShake){
			shake.startWatch(onShake, 25 /*, onError */);
		}
	}

	$scope.shakeHandler = function() {
		onShake();
	};

	var onShake = function () {
	  // Fired when a shake is detected
	  alert("hello shake me");
	};

	var onError = function () {
	  // Fired when there is an accelerometer error (optional)
	};

})