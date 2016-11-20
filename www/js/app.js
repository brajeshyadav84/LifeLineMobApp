// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var LifeLine = angular.module('starter', ['ionic']);


LifeLine.run(function($ionicPlatform) {
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

LifeLine.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/SideMenu.html"
  })

  // setup an abstract state for the tabs directive
  .state('app.dashboard', {
      url: "/dashboard",
      views: {
        'menuContent' :{
          templateUrl: "templates/Dashboard.html",
          controller: 'dashboardCtrl'
        }
      }
    })

  // Each tab has its own nav history stack:
  .state('app.addContact', {
      url: '/addContact',
      views: {
        'menuContent' :{
          templateUrl: "templates/ManageContact.html",
          controller: 'dashboardCtrl'
        }
      }
  })

  .state('app.feedbackt', {
      url: '/feedback',
      views: {
        'menuContent' :{
          templateUrl: "templates/Feedback.html",
          controller: 'dashboardCtrl'
        }
      }
  })

  .state('app.helpme', {
      url: '/helpme/:helpForShake',
      views: {
        'menuContent' :{
          templateUrl: "templates/HelpMe.html",
          controller: 'helpCtrl'
        }
      }
  })    
  .state('app.BBlist', {
      url: '/BBlist', 
      views: {
        'menuContent' :{    
      templateUrl: "templates/BloodBankList.html",
      controller: 'bloodBankCtrl'
        }
      }
        })  
  .state('app.Hospitality', {
      url: '/Hospitality/:hospitalityType', 
      views: {
        'menuContent' :{    
      templateUrl: "templates/Hospitality.html",
      controller: 'hospitalityCtrl'
        }
      }
        }) 
  .state('tour', {
      url: '/tour',
      templateUrl: "templates/Tour/Welcome.html",
      controller: 'tourCtrl'
  });

  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');

});


