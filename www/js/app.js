// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.factory('BloodBankPage', function ($http) {

    var Countries = [];
    var Cities = [];
    var BloodBanks = [];


        return {
            getCountries: function () {
                return $http.get("http://api.geonames.org/childrenJSON?geonameId=1269750&username=sinnitesh").then(function (response) {
                    Countries = response;
                    return Countries;
                }, function (error) {
                    return error;
                });
            },
            getCities: function (id) {
                return $http.get("http://api.geonames.org/childrenJSON?geonameId="+id+"&username=sinnitesh").then(function (response) {
                    Cities = response;
                    return Cities;
                }, function (error) {
                    return error;
                });
            },
            getbloodBanks: function (id) {
                var res_id = "e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9";
                var api_key = "9555f4b13e18327cb4a655f672c4fb37";
                var filterColumnName = "district";
                var filterColumnValue = id;
                var fields = "state,city,district,h_name,address,pincode,contact,helpline,email,service_time";
                var sortcolumnName = "district";
                var offset="1";
                var no_elements = "100";
                var link = "http://data.gov.in/api/datastore/resource.json"
                            +"?resource_id="+ res_id
                            + "&api-key=" + api_key
                            + "&filters[" + filterColumnName + "]=" + filterColumnValue
                            + "&fields=" + fields
                            + "&sort[" + sortcolumnName + "]=asc"

                return $http.get(link).then(function (response) {
                    BloodBanks = response;
                    return BloodBanks;
                }, function (error) {
                    return error;
                });
            }
        }
    })
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
  })

  // setup an abstract state for the tabs directive
  .state('app.dashboard', {
      url: "/dashboard",
      views: {
        'menuContent' :{
          templateUrl: "templates/tab-dash.html",
          controller: 'DashCtrl'
        }
      }
    })

  // Each tab has its own nav history stack:
  .state('app.addContact', {
      url: '/addContact',
      views: {
        'menuContent' :{
          templateUrl: "templates/tab-addContact.html",
          controller: 'DashCtrl'
        }
      }
  })

  .state('app.helpme', {
      url: '/helpme',
      views: {
        'menuContent' :{
          templateUrl: "templates/tab-helpme.html",
          controller: 'DashCtrl'
        }
      }
  })    
  .state('app.BBlist', {
      url: '/BBlist', 
      views: {
        'menuContent' :{    
      templateUrl: "templates/BloodBankList.html",
      controller: 'BBListCtrl'
        }
      }
        })  
    .state('tour', {
      url: '/tour',
      templateUrl: "templates/Tour/tour.html"
      });

  

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/dashboard');

});


