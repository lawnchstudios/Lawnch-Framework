

var isNavigationGridOpen = 'closed';

var viewport = {
    width: $(window).width()
    
};

var mediaQuery = {
    largeScreen: 1280,
    midScreen: 960,
    smallScreen: 560
    
};

var lawnch = {
    log: function (message){console.log(message)},
    
    
    //lawnch.ui.activateNightShade();
    //if(lawnch.time.isNight){addCSS();}
    //lawnch.time.current
    
    location: {
        lat: "",
        latitude: this.lat,
        lng: "",
        longitude: this.lng,
        supportsLocation: false
        
        
    },
    
    time: {
        current: "",
        sunrise: "",
        sunset: "",
        isNight: "",
        isDay: "",
        night: [],
        UTCoffset: "",
        meridiem: "",
        hours: "",
        hoursInMinutes: "",
        minutes: "",
        totalMinutesMinutes: "",
        day: [],
        dayOfWeek: "",
        day: "",
        month: "",
        year: ""
        
    },
    
    
    
    ui: {
        
        toggleNavigationGrid: function (){
            if(lawnch.ui.isNavigationGridOpen === 'closed'){
            lawnch.ui.openNavigationGrid();
            }else if(lawnch.ui.isNavigationGridOpen === 'open'){
                lawnch.ui.closeNavigationGrid();
            }
        },
        
        closeNavigationGrid: function (){
            jQuery("#navigation-grid").css('display', 'none');
            jQuery("#navigation-grid").css('height', '0');
            jQuery("#navigation-grid").css('width', '0');
            jQuery("#navigation-grid li.navigation-item").css('display', 'none');
            
            lawnch.ui.isNavigationGridOpen = 'closed';
        },
    
        openNavigationGrid: function (){
            console.log("navigation button clicked");
            
            jQuery("#navigation-grid").css('display', 'block');
            jQuery("#navigation-grid").css('height', '100vh');
            jQuery("#navigation-grid").css('width', '100%');
            jQuery("#navigation-grid").css('background-color', '#323232');
            jQuery("#navigation-grid li.navigation-item").css('display', 'block');
            
            lawnch.ui.isNavigationGridOpen = 'open';
            
        },
    
        isNavigationGridOpen: 'closed',
        
        brandLogo: 'invisible'
    },
};


jQuery("#navigation-button-trigger").click(function(){
    lawnch.ui.toggleNavigationGrid();
});


function showcaseLoad(){
    function checkQueuedShowcase(){
        
    }
}

function logoOrText(){
    
    if(parseInt($('.brand-logo').css('width')) > 0 ){
        lawnch.ui.brandLogo = 'visible';
    }

    if(lawnch.ui.brandLogo === 'visible' ){
        
        $('.brand-text').css('display', 'none');
        
    }
    
}

logoOrText();

function jsMediaQuery(){
    console.log(viewport.width);
    
    if (viewport.width >= mediaQuery.largeScreen){
        console.log('largescreen');
        
        // largeVieportFunctions();
        
    }else if (viewport.width >= mediaQuery.midScreen){
        console.log('midscreen');
        
        // midVieportFunctions();
    }else{
        console.log('smallscreen');
        
        // largeVieportFunctions();
        
    }
}

jsMediaQuery();

lawnch.log("hello world");