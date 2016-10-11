'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'views/landing.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            templateUrl: '404.html'
    });

});