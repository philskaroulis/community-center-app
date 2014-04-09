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
                    '<div class="cc-form" ng-show="formVisible">' +
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

.directive('eventList', function() {
    return {
        restrict: 'E',
        replace: true,
        template:
            '<div class="cc-row">'+
                '<div class="cc-title">'+
                    '<h3>Events</h3>'+
                '</div>'+
                '<div class="cc-content cc-content-article">'+
                    '<event ng-repeat="event in data" data="event"></event>'+
                '</div>'+
            '</div>',
        scope: {
            data: '='
        },
        link: function(scope) {


        }
    };
})

.directive('event', function() {
    return {
        restrict: 'E',
        replace: true,
        template:
            '<div>' +
                '<div class="event-container">' +
                    '<div class="event-top-row">' +
                        '<div class="pull-left">' +
                            '<div class="event-when">{{data.when}}</div>' +
                        '</div>' +
                        '<div class="pull-right event-actions">' +
                            '<a href ng-click="formVisible=!formVisible"> <span class="glyphicon glyphicon-cog"></span></a>' +
                            '<a href ng-click="onRemove(data)"> <span class="glyphicon glyphicon-remove"></span></a>' +
                        '</div>' +
                    '</div>' +
                    '<h3 class="event-title">{{data.title}}</h3>' +
                    '<div class="event-body">' +
                        '{{data.body}}' +
                    '</div>' +
                    '<div class="event-link"><a href="{{data.link}}">Visit site ></a></div>' +
                '</div>'+
                '<div class="cc-form" ng-show="formVisible">' +
                    '<div class="form-group">' +
                        '<input ng-model="data.when" type="text" value="" placeholder="When" class="form-control" />' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<input ng-model="data.title" type="text" value="" placeholder="Title" class="form-control" />' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<textarea ng-model="data.body" rows="10" class="form-control" placeholder="Body"></textarea>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<input ng-model="data.link" type="text" value="" placeholder="Link" class="form-control" />' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<a ng-click="save();formVisible=false;" href="" class="btn btn-block btn-sm btn-info">Save</a>' +
                    '</div>' +
                '</div>'+
            '</div>',
        scope: {
            data: '='
        },
        link: function(scope) {

            scope.onRemove = function(event) {
            };

        }
    };
});
