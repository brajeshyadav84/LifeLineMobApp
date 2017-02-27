LifeLine.controller('emergencyCtrl', function ($scope, $state,$ionicLoading, lifeLineService, $stateParams) {

    var EmergencyRequest = { };

    var emergencyURL = URLS.emergencyURL;
    lifeLineService.postExternalUrl(EmergencyRequest, emergencyURL).then(function (response) {
        //$scope.showLoading();
        var data = response.data;
        $scope.emergencyList = data;
        console.log("data emergency"); console.log(data);
    }, function (error) {
        console.log(error);
    });

 
})