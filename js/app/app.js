'use strict';

angular.module( 'ccApp', [
    'ngRoute'
])

.config( function ccAppConfig ( $routeProvider ) {

    $routeProvider.when('/', {templateUrl: 'home.html', controller: 'HomeCtrl'});

    $routeProvider.when('/login', {templateUrl: 'login.html', controller: 'LoginCtrl'});

    $routeProvider.when('/welcome', {templateUrl: 'welcome.html', controller: 'WelcomeCtrl'});

    $routeProvider.when('/history', {templateUrl: 'history.html', controller: 'HistoryCtrl'});

    $routeProvider.when('/contact', {templateUrl: 'contact.html', controller: 'ContactCtrl'});

    $routeProvider.when('/events', {templateUrl: 'events.html', controller: 'EventsCtrl'});

    $routeProvider.when('/introductions', {templateUrl: 'introductions.html', controller: 'IntroductionsCtrl'});

    $routeProvider.when('/links', {templateUrl: 'links.html', controller: 'LinksCtrl'});

    $routeProvider.otherwise({redirectTo: '/'});

})

.factory( 'WelcomeFactory', function WelcomeFactory ($sce) {

    // private
    var data = {};
    var init = {
            title:'',
            body:''
        };

    // public
    return {
        update: function(freshData){
            data = freshData;
            return data;
        },
        empty: function(){
            data = init;
            return data;
        },
        read: function(){
            return {
                'title': data.title,
                'body': $sce.trustAsHtml(data.body)
            };
        }
    }

})

.controller( 'HomeCtrl', function HomeCtrl ( $scope, $sce, WelcomeFactory ) {

    $scope.welcome = WelcomeFactory.read();

})

;
