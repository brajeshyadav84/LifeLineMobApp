LifeLine.controller('helpCtrl', function ($scope, $state, lifeLineService, $stateParams, $cordovaSocialSharing) {

	$scope.helpForShake = $stateParams.helpForShake;

	//listen to shake event
    var shakeEvent = new Shake({threshold: 10});
    shakeEvent.start();
    window.addEventListener('shake', function(){
        onShake();
    }, false);

    //stop listening
    function stopShake(){
        shakeEvent.stop();
    }

    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Shake doen't supported on your device");}


	console.log($scope.helpForShake);
	// if(window.shake) {
	// 	if($scope.helpForShake){
	// 		shake.startWatch(onShake, 25);
	// 	}
	// }

	$scope.shakeHandler = function() {
		onShake();
	};

	var onShake = function () {
		//alert("Shake testing done");
	  	// Fired when a shake is detected
	    var number = '88765035';
	    var message = 'LifeLine test Help message';
	    
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

	// var onError = function () {
	//   // Fired when there is an accelerometer error (optional)
	// };

})