var date = new Date(),
    url;

var location = {
    
        lat: "",
        lng: "",
        
        get: function(position){
            location.lat = position.coords.latitude,
            location.lng = position.coords.longitude;
            
            url = "https://api.sunrise-sunset.org/json?lat=" + location.lat + "&lng=" + location.lng;
            
            console.log("LAT:" + location.lat, "LNG:" + location.lng);
        }
    
        
    },

    time = {
        user: {
            full: "",
            hour: "",
            minutes: "",
            hourInMinutes: "",
            totalMinutes: "",
            UTCoffset: "",
            timeWithOffset: "",
            meridiem: "",
            midnightAdjust: ""
            
        },
        
        sunset: {
            hour: "",
            minutes: "",
            hourInMinutes: "",
            totalMinutes: "",
            meridiem: ""
        
        },
            
        sunrise: {
            hour: "",
            minutes: "",
            hourInMinutes: "",
            totalMinutes: "",
            meridiem: ""
            
        },
        
        isDay: "",
        
        isNight: "",
        
        get: function (){
            
            
            
            time.user.offset = date.getTimezoneOffset();
            
            time.user.hour = parseInt(date.gethour());
            console.log("time.user.hour: " + time.user.hour);
            
            time.user.hourInMinutes = parseInt(time.user.hour * 60);
            console.log("time.user.hourInMinutes: " + time.user.hourInMinutes);
            
            time.user.minutes = parseInt(date.getMinutes());
            console.log("time.user.minutes: " + time.user.minutes);
            
            time.user.totalMinutes = time.user.hourInMinutes + time.user.minutes;
            console.log("time.user.totalMinutes: " + time.user.totalMinutes);
            
            time.user.full = time.user.hour + ":" + time.user.minutes;
            console.log("time.user.full: " + time.user.full);
            
            console.log(time.user.UTCoffset);
            
            time.user.timeWithOffset = parseInt(time.user.totalMinutes + time.user.UTCoffset);
            console.log("time.user.timeWithOffset: " + time.user.timeWithOffset);
            
            
            if(time.user.timeWithOffset >= 1440){
                user.midnightAdjust = (user.timeWithOffset - 1440);
                console.log("time.user.midnightAdjust: " + time.user.midnightAdjust);
                
                time.user.timeWithOffset = (0 + time.user.midnightAdjust);
                console.log("time.user.totalMinutes: " + time.user.timeWithOffset);
                
            }
            
            
            $.getJSON(url, function(response){
                    time.sunrise.full = response.results.sunrise;
                    console.log("time.sunrise.full: " + time.sunrise.full);
                    
                    time.sunrise.time = time.sunrise.full.split(":");
                    console.log("time.sunrise.time: " + time.sunrise.time);
                    
                    time.sunrise.meridiem = (time.sunrise.time[2].split(" "))[1];
                    console.log("time.sunrise.meridiem: " + time.sunrise.meridiem);
                    
                    time.sunrise.hour = parseInt(time.sunrise.time[0]);
                    console.log("time.sunrise.hour: " + time.sunrise.hour);
                    
                    time.sunrise.hourInMinutes = time.sunrise.hour * 60;
                    console.log("time.sunrise.hourInMinutes: " + time.sunrise.hourInMinutes);
                    
                    time.sunrise.minutes = parseInt(time.sunrise.time[1]);
                    console.log("time.sunrise.minutes: " + time.sunrise.minutes);
                    
                    time.sunrise.totalMinutes = time.sunrise.hourInMinutes + time.sunrise.minutes;
                    console.log("time.sunrise.totalMinutes: " + time.sunrise.totalMinutes);
                    
                    time.sunset.full = response.results.sunset;
                    console.log("time.sunset.full: " + time.sunset.full);
                    
                    time.sunset.time = time.sunset.full.split(":");
                    console.log("time.sunset.time: " + time.sunset.time);
                    
                    time.sunset.meridiem = (time.sunset.time[2].split(" "))[1];
                    console.log("time.sunset.meridiem: " + time.sunset.meridiem);
                    
                    time.sunset.hour = parseInt(time.sunset.time[0]);
                    console.log("time.sunset.hour: " + time.sunset.hour);
                    
                    time.sunset.hourInMinutes = time.sunset.hour * 60;
                    console.log("time.sunset.hourInMinutes: " + time.sunset.hourInMinutes);
                    
                    time.sunset.minutes = parseInt(time.sunset.time[1]);
                    console.log("time.sunset.minutes: " + time.sunset.minutes);
                    
                    time.sunset.totalMinutes = time.sunset.hourInMinutes + time.sunset.minutes;
                    console.log("time.sunset.totalMinutes: " + time.sunset.totalMinutes);
                    
                    if(time.sunset.meridiem === "PM" & time.sunset.hour <  12){
                        console.log(time.sunset.hour);
                        console.log("time.sunset.hour: " + time.sunset.hour);
                        console.log("time.sunset.hourInMinutes: " + time.sunset.hourInMinutes);
                        time.sunset.totalMinutes = time.sunset.hourInMinutes + time.sunset.minutes;
                        
                    }else if(time.sunset.meridiem === "AM" & time.sunset.hour === 12){
                        time.sunset.hour = 0;
                        console.log("time.sunset.hour: " + time.sunset.hour);
                        
                        time.sunset.hourInMinutes = (time.sunset.hour * 60);
                        console.log("time.sunset.hourInMinutes: " + time.sunset.hourInMinutes);
                        
                        time.sunset.totalMinutes = time.sunset.hourInMinutes + time.sunset.minutes;
                        console.log("time.sunset.totalMinutes: " + time.sunset.totalMinutes);
                        
                        
                    }
    
                }).then(function(reponse){
                        
                    
                        
                nightShade(time.user.timeWithOffset, time);
            });
            
        }//end json of get
}
    




function getUserTime(){
    
    
}

function getUserSunsetSunrise(){
    
    
}

function convertTimeToMinutes(timeToConvert){
    
    
}

function timeBasedTriggers(userCurrentTime){
    
 if(time.user.totalMinutes >= time.sunset.totalMinutes){
     
 }
    
}

function locationInit(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(location.get);
        
    }else {
        console.log("Geolocation is not supported by this browser");
        
    }
}

function nightShade(user_totalMinutes, time){
    
    console.log("nighShade() running");
    
    console.log("time.sunset.totalMinutes: " + time.sunset.totalMinutes);
    console.log("user.timeWithOffset: " + time.user.timeWithOffset);
    //if the users current time is greater than sunrise, no shade
    
    //else if the users current time is letime than the sunset, no shade
    
    
    //else if the users current time is greater than the, shade

    
    if(time.user.timeWithOffset > time.sunset.totalMinutes){
        console.log("The users time is greater than the sunset");
        
        if(time.user.timeWithOffset < time.sunrise.totalMinutes){
            console.log("The users time is letime than the sunrise");
            $("#night-shade").addClass("shade-active");
            
        }else if(time.user.timeWithOffset >= time.sunrise.totalMinutes){
            console.log("The users time is greater than the sunrise");
            $("#night-shade").addClass("shade-inactive");
            
        }
        
        
    }else if(time.user.timeWithOffset <= time.sunset.totalMinutes){
        
        
        if(time.user.timeWithOffset >= time.sunrise.totalMinutes){
            console.log("The users time is greater than the sunrise");
            $("#night-shade").addClass("shade-inactive");
            
        }else if(time.user.timeWithOffset < time.sunrise.totalMinutes){
            console.log("The users time is greater than the sunrise");
            $("#night-shade").addClass("shade-active");
            
        }
    }

}



$(document).ready(function(){
    locationInit().then(time.get());

});
    




---------------------------------------------------



var date = new Date();

var time = {
        user: {
            
            full: "",
            
            hours: "",
            
            minutes: "",
            
            hoursInMinutes: "",
            
            totalMinutes: "",
            
            UTCoffset: "",
            
            timeWithOffset: "",
            
            meridiem: "",
            
            midnightAdjust: "",
            
            isNight: false,
            
            isDay: false
            
        },
        
        sunrise:{
            full: "",
            
            hour: "",
            
            minutes: "",
            
            hoursInMinutes: "",
            
            totalMinutes: "",
            
            meridiem: ""
            
        },
        
        sunset:{
            full: "",
            
            hour: "",
            
            minutes: "",
            
            hourInMinutes: "",
            
            totalMinutes: "",
            
            meridiem: ""
        },
        
        get: function (){
            time.user.hours = date.getHours(),
            time.user.minutes = date.getMinutes(),
            time.user.hoursInMinutes = time.users.hours * 60,
            time.user.totalMinutes = time.user.hoursInMinutes + time.user.minutes;
            time.user.UTCoffset = date.getTimezoneOffset();
            time.user.timeWithOffset = time.user.totalMinutes + time.user.UTCoffset; //srss is returned in UTC time
            
            
            srss.get();
            
            
            
        }
        
    
    },
    
    location = {
      
        get: function(){
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(srss.get);
                
            }else {
                console.log("Geolocation is not supported by this browser");
                
            }
        }
      
        
    },
    
    srss = {
        
        get: function(location){
            
            console.log(location.coords.latitude);
            
            /* $.getJSON(url, function(response){
                    time.sunrise.full = response.results.sunrise;
                    console.log("time.sunrise.full: " + time.sunrise.full);
                    
                    time.sunrise.time = time.sunrise.full.split(":");
                    console.log("time.sunrise.time: " + time.sunrise.time);
                    
                    time.sunrise.meridiem = (time.sunrise.time[2].split(" "))[1];
                    console.log("time.sunrise.meridiem: " + time.sunrise.meridiem);
                    
                    time.sunrise.hour = parseInt(time.sunrise.time[0]);
                    console.log("time.sunrise.hour: " + time.sunrise.hour);
                    
                    time.sunrise.hourInMinutes = time.sunrise.hour * 60;
                    console.log("time.sunrise.hourInMinutes: " + time.sunrise.hourInMinutes);
                    
                    time.sunrise.minutes = parseInt(time.sunrise.time[1]);
                    console.log("time.sunrise.minutes: " + time.sunrise.minutes);
                    
                    time.sunrise.totalMinutes = time.sunrise.hourInMinutes + time.sunrise.minutes;
                    console.log("time.sunrise.totalMinutes: " + time.sunrise.totalMinutes);
                    
                    time.sunset.full = response.results.sunset;
                    console.log("time.sunset.full: " + time.sunset.full);
                    
                    time.sunset.time = time.sunset.full.split(":");
                    console.log("time.sunset.time: " + time.sunset.time);
                    
                    time.sunset.meridiem = (time.sunset.time[2].split(" "))[1];
                    console.log("time.sunset.meridiem: " + time.sunset.meridiem);
                    
                    time.sunset.hour = parseInt(time.sunset.time[0]);
                    console.log("time.sunset.hour: " + time.sunset.hour);
                    
                    time.sunset.hourInMinutes = time.sunset.hour * 60;
                    console.log("time.sunset.hourInMinutes: " + time.sunset.hourInMinutes);
                    
                    time.sunset.minutes = parseInt(time.sunset.time[1]);
                    console.log("time.sunset.minutes: " + time.sunset.minutes);
                    
                    time.sunset.totalMinutes = time.sunset.hourInMinutes + time.sunset.minutes;
                    console.log("time.sunset.totalMinutes: " + time.sunset.totalMinutes);
                    
                    if(time.sunset.meridiem === "PM" & time.sunset.hour <  12){
                        console.log(time.sunset.hour);
                        console.log("time.sunset.hour: " + time.sunset.hour);
                        console.log("time.sunset.hourInMinutes: " + time.sunset.hourInMinutes);
                        time.sunset.totalMinutes = time.sunset.hourInMinutes + time.sunset.minutes;
                        
                    }else if(time.sunset.meridiem === "AM" & time.sunset.hour === 12){
                        time.sunset.hour = 0;
                        console.log("time.sunset.hour: " + time.sunset.hour);
                        
                        time.sunset.hourInMinutes = (time.sunset.hour * 60);
                        console.log("time.sunset.hourInMinutes: " + time.sunset.hourInMinutes);
                        
                        time.sunset.totalMinutes = time.sunset.hourInMinutes + time.sunset.minutes;
                        console.log("time.sunset.totalMinutes: " + time.sunset.totalMinutes);
                        
                        
                    } 
        });*/
        
    }
        
};