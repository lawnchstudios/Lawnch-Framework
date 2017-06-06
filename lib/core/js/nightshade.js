var lat,
    lng,
    ssjson,
    url,
    date = new Date(),
    
    user = {
        time: "",
        offset: "",
        meridiem: "",
        hours: "",
        hoursInMinutes: "",
        minutes: "",
        totalMinutes: "",
        withOffset: "",
        midnightAdjust: ""
        
        
    },
    
    ss = {
        sunrise:{
            full:"",
            time: "",
            meridiem: "",
            hours: "",
            hoursInMinutes: "",
            minutes: "",
            totalMinutes: ""
            
        },
        sunset:{
            full:"",
            time: "",
            meridiem: "",
            hours: "",
            hoursInMinutes: "",
            minutes: "",
            totalMinutes: ""
        }
    };



function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
        
    }else {
        console.log("Geolocation is not supported by this browser");
        
    }
}

function nightShade(user_totalMinutes, ss){
    
    console.log("nighShade() running");
    
    console.log("ss.sunset.totalMinutes: " + ss.sunset.totalMinutes);
    console.log("user.timeWithOffset: " + user.timeWithOffset);
    //if the users current time is greater than sunrise, no shade
    
    //else if the users current time is less than the sunset, no shade
    
    
    //else if the users current time is greater than the, shade

    
    if(user.timeWithOffset > ss.sunset.totalMinutes){
        console.log("The users time is greater than the sunset");
        
        if(user.timeWithOffset < ss.sunrise.totalMinutes){
            console.log("The users time is less than the sunrise");
            $("#night-shade").addClass("shade-active");
            
        }else if(user.timeWithOffset >= ss.sunrise.totalMinutes){
            console.log("The users time is greater than the sunrise");
            $("#night-shade").addClass("shade-inactive");
            
        }
        
        
    }else if(user.timeWithOffset <= ss.sunset.totalMinutes){
        
        
        if(user.timeWithOffset >= ss.sunrise.totalMinutes){
            console.log("The users time is greater than the sunrise");
            $("#night-shade").addClass("shade-inactive");
            
        }else if(user.timeWithOffset < ss.sunrise.totalMinutes){
            console.log("The users time is greater than the sunrise");
            $("#night-shade").addClass("shade-active");
            
        }
    }

}

function showPosition(position){
    
        lat = position.coords.latitude,
        lng = position.coords.longitude;
        
        url = "https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng;
        
        console.log("LAT:" + lat, "LNG:" + lng);
        
        
        user.offset = date.getTimezoneOffset();
        
        user.hours = parseInt(date.getHours());
        console.log("user.hours: " + user.hours);
        
        user.hoursInMinutes = parseInt(user.hours * 60);
        console.log("user.hoursInMinutes: " + user.hoursInMinutes);
        
        user.minutes = parseInt(date.getMinutes());
        console.log("user.minutes: " + user.minutes);
        
        user.totalMinutes = user.hoursInMinutes + user.minutes;
        console.log("user.totalMinutes: " + user.totalMinutes);
        
        user.time = user.hours + ":" + user.minutes;
        console.log("user.time: " + user.time);
        
        console.log(user.offset);
        
        user.timeWithOffset = parseInt(user.totalMinutes + user.offset);
        console.log("user.timeWithOffset: " + user.timeWithOffset);
        
        
        if(user.timeWithOffset >= 1440){
            user.midnightAdjust = (user.timeWithOffset - 1440);
            console.log("user.midnightAdjust: " + user.midnightAdjust);
            
            user.timeWithOffset = (0 + user.midnightAdjust);
            console.log("user.totalMinutes: " + user.timeWithOffset);
            
        }
        
        
        $.getJSON(url, function(response){
                ss.sunrise.full = response.results.sunrise;
                console.log("ss.sunrise.full: " + ss.sunrise.full);
                
                ss.sunrise.time = ss.sunrise.full.split(":");
                console.log("ss.sunrise.time: " + ss.sunrise.time);
                
                ss.sunrise.meridiem = (ss.sunrise.time[2].split(" "))[1];
                console.log("ss.sunrise.meridiem: " + ss.sunrise.meridiem);
                
                ss.sunrise.hours = parseInt(ss.sunrise.time[0]);
                console.log("ss.sunrise.hours: " + ss.sunrise.hours);
                
                ss.sunrise.hoursInMinutes = ss.sunrise.hours * 60;
                console.log("ss.sunrise.hoursInMinutes: " + ss.sunrise.hoursInMinutes);
                
                ss.sunrise.minutes = parseInt(ss.sunrise.time[1]);
                console.log("ss.sunrise.minutes: " + ss.sunrise.minutes);
                
                ss.sunrise.totalMinutes = ss.sunrise.hoursInMinutes + ss.sunrise.minutes;
                console.log("ss.sunrise.totalMinutes: " + ss.sunrise.totalMinutes);
                
                ss.sunset.full = response.results.sunset;
                console.log("ss.sunset.full: " + ss.sunset.full);
                
                ss.sunset.time = ss.sunset.full.split(":");
                console.log("ss.sunset.time: " + ss.sunset.time);
                
                ss.sunset.meridiem = (ss.sunset.time[2].split(" "))[1];
                console.log("ss.sunset.meridiem: " + ss.sunset.meridiem);
                
                ss.sunset.hours = parseInt(ss.sunset.time[0]);
                console.log("ss.sunset.hours: " + ss.sunset.hours);
                
                ss.sunset.hoursInMinutes = ss.sunset.hours * 60;
                console.log("ss.sunset.hoursInMinutes: " + ss.sunset.hoursInMinutes);
                
                ss.sunset.minutes = parseInt(ss.sunset.time[1]);
                console.log("ss.sunset.minutes: " + ss.sunset.minutes);
                
                ss.sunset.totalMinutes = ss.sunset.hoursInMinutes + ss.sunset.minutes;
                console.log("ss.sunset.totalMinutes: " + ss.sunset.totalMinutes);
                
                if(ss.sunset.meridiem === "PM" & ss.sunset.hours <  12){
                    console.log(ss.sunset.hours);
                    console.log("ss.sunset.hours: " + ss.sunset.hours);
                    console.log("ss.sunset.hoursInMinutes: " + ss.sunset.hoursInMinutes);
                    ss.sunset.totalMinutes = ss.sunset.hoursInMinutes + ss.sunset.minutes;
                    
                }else if(ss.sunset.meridiem === "AM" & ss.sunset.hours === 12){
                    ss.sunset.hours = 0;
                    console.log("ss.sunset.hours: " + ss.sunset.hours);
                    
                    ss.sunset.hoursInMinutes = (ss.sunset.hours * 60);
                    console.log("ss.sunset.hoursInMinutes: " + ss.sunset.hoursInMinutes);
                
                    ss.sunset.totalMinutes = ss.sunset.hoursInMinutes + ss.sunset.minutes;
                    console.log("ss.sunset.totalMinutes: " + ss.sunset.totalMinutes);
                    
                    
                }

        }).then(function(reponse){
                
            
                
            nightShade(user.timeWithOffset, ss);
        });
            
            

}



$(document).ready(function(){
    getLocation();

});
    




