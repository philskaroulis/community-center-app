'use strict';

ccApp

.controller( 'HomeCtrl', function HomeCtrl ( $scope, $sce, WelcomeFactory, EventsFactory ) {

    $scope.welcome = $sce.trustAsHtml(WelcomeFactory.read());
    $scope.events = EventsFactory.read();

})

.controller( 'WelcomeCtrl', function WelcomeCtrl ( $scope, WelcomeFactory ) {

    $scope.welcome = WelcomeFactory.read();

    $scope.update = function () {
        WelcomeFactory.update($scope.welcome);
    }

})

.controller( 'EventsCtrl', function EventsCtrl ( $scope, EventsFactory ) {

    $scope.formVisible = false;

    $scope.template = EventsFactory.getClear().list[0];

    $scope.events = EventsFactory.getClear();
//    $scope.events = EventsFactory.read();

    $scope.create = function () {
        EventsFactory.create($scope.template);
        $scope.template = EventsFactory.getClear();
    };

    $scope.update = function () {
        EventsFactory.update($scope.template);
        $scope.template = EventsFactory.getClear();
    };

    $scope.delete = function () {
        EventsFactory.create($scope.template);
        $scope.template = EventsFactory.getClear();
    };

})

;
