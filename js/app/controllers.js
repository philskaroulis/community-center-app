'use strict';

ccApp

.controller( 'HomeCtrl', function HomeCtrl ( $scope, WelcomeFactory, EventsFactory ) {

//    $scope.welcome = $sce.trustAsHtml(WelcomeFactory.read());
    $scope.welcome = WelcomeFactory.read();

    $scope.events = EventsFactory.read();

})

;
