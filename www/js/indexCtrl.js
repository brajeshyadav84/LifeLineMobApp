//angular.module('starter.controllers', [])

LifeLine.controller('indexCtrl', function ($scope, $state, $stateParams, $cordovaSocialSharing ) { //$cordovaSocialSharing, $ionicPopup
    if (!!localStorage.isFirstTime) {
        $state.go("app.dashboard");
    } else {
        $state.go("tour");
    }

    document.addEventListener("offline", onOffline, false);

	function onOffline() {
	    // Handle the offline event
	}

	document.addEventListener("online", onOnline, false);

	function onOnline() {
	    // Handle the online event
	}

	$scope.shareMe = function() {
        $cordovaSocialSharing.share('LifeLine!, aim to help you', 'LifeLine', null, 'http://www.interviewgully.com/API/appLauncher.html');
    };

})






