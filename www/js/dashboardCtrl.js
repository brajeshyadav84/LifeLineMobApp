//angular.module('starter.controllers', [])

LifeLine.controller('dashboardCtrl', function ($scope, $state, $ionicLoading, $ionicPopup, loadLocaljson, lifeLineService, $cordovaSocialSharing) {
    localStorage.setItem("isFirstTime", true);
    $scope.isShowModal = false;

    $scope.onClickHospitality = function (Type) {
        $state.go("app.Hospitality", { "hospitalityType": Type });
    };

    /// Start :: help Me
    $scope.onClickForHelp = function () {
        $state.go("app.helpme", { "helpForShake": true });
    };
    /// End :: help Me

    /// Start :: Manage Contact
    $scope.bloodGroupList = [
        { 'id': 1, 'label': '0 +' },
        { 'id': 2, 'label': '0 -' },
        { 'id': 3, 'label': 'A +' },
        { 'id': 4, 'label': 'A -' },
        { 'id': 5, 'label': 'B +' },
        { 'id': 6, 'label': 'B -' },
        { 'id': 7, 'label': 'AB +' },
        { 'id': 8, 'label': 'AB -' },
    ];

    $scope.btnSave = function (userInfo) {
        localStorage.setItem("userDetails", JSON.stringify(userInfo));
        console.log(userInfo);
        console.log(localStorage.userDetails);

    };

    /// End :: Manage Contact

    /// Start :: Emergency Contact



    $scope.onClickEmergency = function () {
        $state.go("app.emergency");
    };

    /// End :: Emergency Contact

    /// Start :: Feedback

    /// End :: Feedback

    /// Start :: Share App
    $scope.onClickShare = function (type) {
        if(type == 'popup')
            $cordovaSocialSharing.share('LifeLine India!, aim to help you', 'LifeLine India! ', null, $scope.modalDesc);
        else 
            $cordovaSocialSharing.share('LifeLine India!, aim to help you', 'LifeLine India!', null, 'http://www.interviewgully.com/API/appLauncher.html');
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
    lifeLineService.postExternalUrl(request, forceurl).then(function (response) {
        var data = response.data;
        if (!!isAndroid) {
            var id = data.androidSettings.versions[0];
            if (id != "2.0") {
                console.log('Loading android upgrade screen');
                $scope.showConfirm(data.androidSettings.itunesurl);
            }
        } else {
            var id = data.iosSettings.versions[0];
            if (id != "2.0") {
                console.log('Loading ios upgrade screen');
                $scope.showConfirm(data.iosSettings.itunesurl);
            }
        }

        if("All" == data.targetState){
             $scope.isShowModal = data.isShowModal;
        } else if (data.targetState == $scope.user.SelectedState.ID.name){
             console.log($scope.user.SelectedState.ID.name);
             $scope.isShowModal = data.isShowModal;
        }
        $scope.modalTitle = data.modalTitle;
        $scope.modalDesc = data.modalDesc;


    }, function (error) {
        console.log(error);
    });

    $scope.onClickCloseModal = function () {
        $scope.isShowModal = false;
    };



    $scope.showConfirm = function (storeURL) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'App Upgrade',
            template: 'Are you want to upgrade app to avail new features?'
        });

        confirmPopup.then(function (res) {
            if (res) {
                window.open(storeURL, "_system");
            } else {
                console.log('You are not sure');
            }
        });
    };

    /// end force upgrade Implememntation

    $scope.groups = [];
    $scope.countries = [];
    $scope.cities = [];
    $scope.selectedstate = '';
    var jsonLocation = URLS.getLocalJsonforBlodBank;
    loadLocaljson.get(jsonLocation).then(function (response) {
        //console.log(response.data);        
        $scope.selectedstate = '';
        for (var i = 0; i < response.data.length; i++) {
            $scope.countries[i] = {
                name: response.data[i].state,
                id: response.data[i].id,
                city: response.data[i].cityname
            };
        }
    }, function (error) {
        console.log(error);
    });

    $scope.updateCities = function (city_id) {
        console.log(city_id);
        $scope.cities = [];
        if (city_id.ID != "" && city_id.ID != null) {
            $scope.selectedstate = city_id.ID.name;
            for (var i = 0; i < city_id.ID.city.length; i++) {
                $scope.cities[i] = {
                    name: city_id.ID.city[i],
                    id: i + 1
                };
            }
        }
        console.log($scope.cities);
    }

    if (!!localStorage.userDetails) {
        if (localStorage.userDetails.length > 0) {
            var userCollection = JSON.parse(localStorage.userDetails);
            console.log("userCollection"); console.log(userCollection);
            $scope.user = userCollection;
            //$scope.updateCities(userCollection.SelectedState);
            //<option label="Chandigarh" value="object:70">Chandigarh</option>
            //$('#StateID').append('<option selected label="'+userCollection.SelectedState.ID.name+'" value="'+userCollection.SelectedState.ID.$$hashKey+'">Chandigarh</option>');
        }
    }



})
