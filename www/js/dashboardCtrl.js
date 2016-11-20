//angular.module('starter.controllers', [])

LifeLine.controller('dashboardCtrl', function ($scope, $state, $cordovaSocialSharing) {
    localStorage.setItem("isFirstTime", true);

    $scope.onClickHospitality = function (Type) {
        $state.go("app.Hospitality", {"hospitalityType": Type});
    };


    /// Start :: Manage Contact

    /// End :: Manage Contact

    /// Start :: Feedback

    /// End :: Feedback

    /// Start :: Share App
    $scope.onClickShare = function (){
        $cordovaSocialSharing.share('Hi!, It is nice app for Software Developers', 'InterviewGully', null, 'http://www.interviewgully.com/API/appLauncher.html');
    };
    /// End :: Share App

})
