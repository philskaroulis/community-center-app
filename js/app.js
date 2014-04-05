'use strict';


// Declare app level module which depends on filters, and services
angular.module('RiverStationApp', [
    'ngRoute',
    'RiverStationApp.filters',
    'RiverStationApp.services',
    'RiverStationApp.directives',
    'RiverStationApp.controllers'
])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {template: 'home.html', controller: 'HomeCtrl'});

    $routeProvider.when('/login', {template: 'login.html', controller: 'LoginCtrl'});

    $routeProvider.when('/content', {template: 'content.html', controller: 'ContentCtrl'});

    $routeProvider.when('/events', {template: 'events.html', controller: 'EventsCtrl'});

    $routeProvider.when('/artists', {template: 'artists.html', controller: 'ArtistsCtrl'});

    $routeProvider.when('/links', {template: 'links.html', controller: 'LinksCtrl'});

    $routeProvider.otherwise({redirectTo: '/'});

}]);
