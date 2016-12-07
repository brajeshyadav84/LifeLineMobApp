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
	    var number = '88765035';
	    var message = 'test message';
	    
	    //CONFIGURATION
	    var options = {
	        replaceLineBreaks: false, // true to replace \n by a new line, false by default
	        android: {
	            intent: 'INTENT'  // send SMS with the native android SMS messaging
	            //intent: '' // send SMS without open any other app
	        }
	    };

	    var success = function () { alert('Message sent successfully'); };
	    var error = function (e) { alert('Message Failed:' + e); };
	    sms.send(number, message, options, success, error);
	};

	var onError = function () {
	  // Fired when there is an accelerometer error (optional)
	};

})