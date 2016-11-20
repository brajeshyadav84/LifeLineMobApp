//angular.module('starter.controllers', [])

LifeLine.controller('dashboardCtrl', function ($scope, $state, lifeLineService, $ionicPopup) {
    localStorage.setItem("isFirstTime", true);

    $scope.onClickHospitality = function (Type) {
        $state.go("app.Hospitality", {"hospitalityType": Type});
    };

    /// Start :: help Me
    $scope.onClickForHelp = function () {
        $state.go("app.helpme", {"helpForShake": true});
    };
    /// End :: help Me

    /// Start :: Manage Contact
    $scope.bloodGroupList = [
        {'id': 1, 'label': '0 +'},
        {'id': 2, 'label': '0 -'},
        {'id': 3, 'label': 'A +'},
        {'id': 4, 'label': 'A -'},
        {'id': 5, 'label': 'B +'},
        {'id': 6, 'label': 'B -'},
        {'id': 7, 'label': 'AB +'},
        {'id': 8, 'label': 'AB -'},
    ];

    $scope.btnSave = function (userInfo) {
        console.log(userInfo);
    };

    /// End :: Manage Contact

    /// Start :: Feedback

    /// End :: Feedback

    /// Start :: Share App
    $scope.onClickShare = function (){
        window.plugins.socialsharing.share('Hi!, It is nice app for Software Developers', 'InterviewGully', null, 'http://www.interviewgully.com/API/appLauncher.html');
    };
    /// End :: Share App

    /// start force upgrade Implememntation

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var isIOS = (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i));
    var isAndroid = (userAgent.match(/Android/i));
    var isDesktop = !(isIOS || isAndroid);

    var request = {
    };

    var forceurl = URLS.forceUpgrade;
    lifeLineService.postExternalUrl(request, forceurl).then( function(response){
        var data = response.data;
        if(!!isAndroid){
            var id = data.androidSettings.versions[0];
            if(id != "2.0"){
                console.log('Loading android upgrade screen');
                $scope.showConfirm(data.androidSettings.itunesurl);
            }
        } else {
            var id = data.iosSettings.versions[0];
            if(id != "2.0"){
                console.log('Loading ios upgrade screen');
                $scope.showConfirm(data.iosSettings.itunesurl);
            }
        }
        
    },function(error){
        console.log(error);
    });


    $scope.showConfirm = function(storeURL) {
           var confirmPopup = $ionicPopup.confirm({
             title: 'App Upgrade',
             template: 'Are you want to upgrade app to avail new features?'
           });

           confirmPopup.then(function(res) {
             if(res) {
               window.open(storeURL, "_system");
             } else {
               console.log('You are not sure');
             }
           });
     };

    /// end force upgrade Implememntation

})
