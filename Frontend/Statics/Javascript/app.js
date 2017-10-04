
var app = angular.module('CollabWrite', ['ui.router']);

    app.config(function ($stateProvider) {
        $stateProvider
        .state('home', {
            url : '/',
            templateUrl: '/Templates/Views/Home.html',
            controller: 'HomeController'
        })
    });

    app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });
