//angular.module('starter.controllers', [])

LifeLine.controller('indexCtrl', function ($scope, $state, $stateParams) {
    if (!!localStorage.isFirstTime) {
        $state.go("app.dashboard");
    } else {
        $state.go("tour");
    }
})






