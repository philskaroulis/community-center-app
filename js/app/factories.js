'use strict';


ccApp

.factory( 'WelcomeFactory', function WelcomeFactory () {

    // private
    var data = '';

    // public
    return {
        clear: function(){
            data = '';
            return data;
        },
        read: function(){
            console.log('read');
            console.log(data);
            return data;
        },
        update: function(freshData){
            data = freshData;
            console.log('update');
            console.log(data);
            return data;
        }
    }

})

.factory( 'EventsFactory', function EventsFactory () {

    // private
    var data = {};
    var init = [
            {
                id:'',
                when:'',
                title:'',
                body:'',
                link:''
            }
        ];

    // public
    return {
        clear: function(){
            data = init;
            return data;
        },
        getClear: function(){
            return init;
        },
        getEvent: function(id){
            var event = {};
            for (var i=0; i<data.length; i++) {
                if (data[i].id = id) {
                    event = data[i];
                }
            }
            return event;
        },
        read: function(){
            return data;
        },
        create: function(eventData){
            data = eventData;
            return data;
        },
        update: function(eventData){
            data = eventData;
            return data;
        },
        delete: function(eventData){
            return true;
        }
    }

})

;
