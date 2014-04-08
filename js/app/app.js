'use strict';


var ccApp = angular.module( 'ccApp', [
    'ngRoute'
])

.config( function ccAppConfig ( $routeProvider, $httpProvider ) {

    // Check if the user is connected
    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){

        // Initialize a new promise
        var deferred = $q.defer();

        // For demo purposes, let's assume user has logged in
        $timeout(deferred.resolve, 0);

        /* IN PRODUCTION, REPLACE THE PREVIOUS TWO LINES OF LOGIC WITH THE FOLLOWING BLOCK:

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user){
                if (user !== '0') {
                    // Authenticated
                    $timeout(deferred.resolve, 0);
                } else {
                    // Not Authenticated
                    $timeout(function(){deferred.reject();}, 0);
                    $location.url('/login');
                }
            });

        */

        return deferred.promise;

    };


    // Add an interceptor for AJAX errors
    $httpProvider.responseInterceptors.push(function($q, $location) {
        return function(promise) {
            return promise.then(
                // Success: just return the response
                function(response){
                return response;
            },
            // Error: check the error status to get only the 401
            function(response) {
                if (response.status === 401)
                    $location.url('/login');
                return $q.reject(response);
            }
            );
        }
    });

    $routeProvider.when('/', {templateUrl: 'home.html', controller: 'HomeCtrl'});

    $routeProvider.when('/login', {templateUrl: 'login.html', controller: 'LoginCtrl'});

    $routeProvider.when('/welcome', {templateUrl: 'welcome.html', controller: 'WelcomeCtrl', resolve: {loggedin: checkLoggedin} });

    $routeProvider.when('/history', {templateUrl: 'history.html', controller: 'HistoryCtrl', resolve: {loggedin: checkLoggedin}});

    $routeProvider.when('/contact', {templateUrl: 'contact.html', controller: 'ContactCtrl', resolve: {loggedin: checkLoggedin}});

    $routeProvider.when('/events', {templateUrl: 'events.html', controller: 'EventsCtrl', resolve: {loggedin: checkLoggedin}});

    $routeProvider.when('/introductions', {templateUrl: 'introductions.html', controller: 'IntroductionsCtrl', resolve: {loggedin: checkLoggedin}});

    $routeProvider.when('/links', {templateUrl: 'links.html', controller: 'LinksCtrl', resolve: {loggedin: checkLoggedin}});

    $routeProvider.otherwise({redirectTo: '/'});

})

;
