//angular.module('starter.controllers', [])

LifeLine.controller('dashboardCtrl', function ($scope, $state) {
    localStorage.setItem("isFirstTime", true);

    $scope.onClickHospitality = function (Type) {
        $state.go("app.Hospitality", {"hospitalityType": Type});
    };


    /// Start :: Manage Contact
    
    /// End :: Manage Contact

})
