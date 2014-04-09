'use strict';


ccApp

.factory( 'WelcomeFactory', function WelcomeFactory () {

    // private
    var data = '';

    data = 'We are transforming a 1918 car garage into a community space where people can meet, design, create &amp; sell art and enjoy indoor/outdoor special events &amp; festivals';

    // public
    return {
        clear: function(){
            data = '';
            return data;
        },
        read: function(){
            return data;
        },
        update: function(freshData){
            data = freshData;
            return data;
        }
    }

})

.factory( 'EventsFactory', function EventsFactory () {

    // private
    var data = [];
    var init = {id:'',when:'',title:'',body:'',link:''};

    data.push({
                id:data.length+1,
                when:'Mon Apr 8, 6:00pm',
                title:'My first event',
                body:'We welcome all companies, organizations, and individuals with a vested interest in supporting entrepreneurs to showcase the resources they are providing.',
                link:'http://www.abc.com/event'
            });
    data.push({
                id:data.length+1,
                when:'Tue Apr 9, 6:00pm',
                title:'My second event',
                body:'We welcome all  with a vested interest in supporting entrepreneurs to showcase the resources they are providing.',
                link:'http://www.abc.com/event'
            });
    data.push({
                id:data.length+1,
                when:'Wed Apr 10, 6:00pm',
                title:'My third event',
                body:'We welcome all companies, organizations, a vested interest in supporting entrepreneurs to showcase the resources they are providing.',
                link:'http://www.abc.com/event'
            });
    data.push({
                id:data.length+1,
                when:'Thu Apr 11, 6:00pm',
                title:'My forth event',
                body:'We welcome, organizations, and individuals with a vested interest in supporting entrepreneurs to showcase the resources they are providing.',
                link:'http://www.abc.com/event'
            });
    data.push({
                id:data.length+1,
                when:'Fri Apr 12, 6:00pm',
                title:'My fifth event',
                body:'We welcome all companies, organizations, and individuals with a vested interest in to showcase the resources they are providing.',
                link:'http://www.abc.com/event'
            });
        
    // public
    return {
        clear: function(){
            data = init;
            return data;
        },
        getEmpty: function(){
            return init;
        },
        read: function(){
            return data;
        },
        create: function(eventData){
            data.push(eventData);
            return data;
        },
        remove: function(eventData){
            for (var i=0; i<data.length; i++ ){
                if (data[i].id === eventData.id){
                    data.splice(i,1);
                }
            }
            return data;
        }
    }

})

;
