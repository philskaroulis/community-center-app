'use strict';

ccApp

.directive('welcome', function() {
    return {
        restrict: 'E',
        replace: true,
        template:
            '<div class="cc-row">'+
                '<div class="cc-title">'+
                    '<h3>Welcome<a href ng-click="formVisible=!formVisible"> <span class="glyphicon glyphicon glyphicon-cog"></span></a></h3>'+
                '</div>'+
                '<div class="cc-content cc-content-article">'+
                    '<div ng-bind-html="data"></div>'+
                    '<div class="cc-form top" ng-show="formVisible">' +
                        '<div class="form-group">' +
                            '<textarea ng-model="data" rows="5" class="form-control" placeholder="Welcome body"></textarea>'+
                        '</div>' +
                        '<a ng-click="formVisible=false;" href class="btn btn-block btn-sm btn-info">Save</a>' +
                    '</div>'+
                '</div>'+
            '</div>',
        scope: {
            data: '='
        },
        link: function(scope) {

        }
    };
})

.directive('events', function(EventsFactory) {
    return {
        restrict: 'E',
        replace: true,
        template:
            '<div class="cc-row">'+
                '<div class="cc-title">'+
                    '<h3>Events<a href ng-click="formVisible=!formVisible"> <span class="glyphicon glyphicon glyphicon-plus"></span></a></h3>'+
                '</div>'+
                '<div class="cc-content cc-content-article">'+
                    '<div class="cc-form left" ng-show="formVisible">' +
                        '<div class="form-group">' +
                            '<input ng-model="newEvent.when" type="text" value="" placeholder="When" class="form-control" />' +
                        '</div>' +
                        '<div class="form-group">' +
                            '<input ng-model="newEvent.title" type="text" value="" placeholder="Title" class="form-control" />' +
                        '</div>' +
                        '<div class="form-group">' +
                            '<textarea ng-model="newEvent.body" rows="10" class="form-control" placeholder="Body"></textarea>' +
                        '</div>' +
                        '<div class="form-group">' +
                            '<input ng-model="newEvent.link" type="text" value="" placeholder="Link" class="form-control" />' +
                        '</div>' +
                        '<div class="form-group">' +
                            '<a ng-click="onCreate();formVisible=false;" href="" class="btn btn-block btn-sm btn-info">Create</a>' +
                        '</div>' +
                    '</div>'+
                    '<div ng-repeat="event in data">' +
                        '<div class="event-container">' +
                            '<div class="event-top-row">' +
                                '<div class="pull-left">' +
                                    '<div class="event-when">{{event.when}}</div>' +
                                '</div>' +
                                '<div class="pull-right event-actions">' +
                                    '<a href ng-click="event.formVisible=!event.formVisible"> <span class="glyphicon glyphicon-cog"></span></a>' +
                                    '<a href ng-click="onRemove(event)"> <span class="glyphicon glyphicon-remove"></span></a>' +
                                '</div>' +
                            '</div>' +
                            '<h3 class="event-title">{{event.title}}</h3>' +
                            '<div class="event-body">' +
                                '{{event.body}}' +
                            '</div>' +
                            '<div class="event-link"><a href="{{event.link}}">Visit site ></a></div>' +
                        '</div>'+
                        '<div class="cc-form top" ng-show="event.formVisible">' +
                            '<div class="form-group">' +
                                '<input ng-model="event.when" type="text" value="" placeholder="When" class="form-control" />' +
                            '</div>' +
                            '<div class="form-group">' +
                                '<input ng-model="event.title" type="text" value="" placeholder="Title" class="form-control" />' +
                            '</div>' +
                            '<div class="form-group">' +
                                '<textarea ng-model="event.body" rows="10" class="form-control" placeholder="Body"></textarea>' +
                            '</div>' +
                            '<div class="form-group">' +
                                '<input ng-model="event.link" type="text" value="" placeholder="Link" class="form-control" />' +
                            '</div>' +
                            '<div class="form-group">' +
                                '<a ng-click="onUpdate();event.formVisible=false;" href="" class="btn btn-block btn-sm btn-info">Update</a>' +
                            '</div>' +
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>',
        scope: {
            data: '='
        },
        link: function(scope) {
            scope.onCreate = function () {
                scope.data = EventsFactory.create(scope.newEvent);
                scope.newEvent = {};
            };
            scope.onRemove = function(event) {
                scope.data = EventsFactory.remove(event);
            };
            scope.onUpdate = function () {
                scope.newEvent = {};
            };
        }
    };
});
