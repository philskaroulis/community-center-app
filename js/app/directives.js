'use strict';

ccApp

.directive('event', function(EventsFactory) {
    return {
        restrict: 'E',
        replace: true,
        template:
            '<div class="event-container">' +
                '<div class="event-top-row">' +
                    '<div class="pull-left">' +
                        '<div class="event-when">{{data.when}}</div>' +
                    '</div>' +
                    '<div class="pull-right event-actions">' +
                        '<a href ng-click="onEdit(data)"> <span class="glyphicon glyphicon-cog"></span></a>' +
                        '<a href ng-click="onRemove(data)"> <span class="glyphicon glyphicon-remove"></span></a>' +
                    '</div>' +
                '</div>' +
                '<h3 class="event-title">{{data.title}}</h3>' +
                '<div class="event-body">' +
                    '{{data.body}}' +
                '</div>' +
                '<div class="event-link"><a href="{{data.link}}">Visit site ></a></div>' +
            '</div>',
        scope: {
            data: '='
        },
        link: function(scope) {

            // events
            scope.onEdit = function(event) {
                console.log('edit');
                console.log(event);
            };
            scope.onRemove = function(event) {
                console.log('remove');
                console.log(event);
            };

        }
    };
});
