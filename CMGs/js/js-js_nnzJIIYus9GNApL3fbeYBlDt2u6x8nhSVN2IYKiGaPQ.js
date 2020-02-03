var cmg_gdpr_check = getCookie("GDPR");
var cmg_gdpr_reject_check = getCookie("GDPR_Reject");
var cmg_gdpr_all_check = getCookie("GDPR_All");  //GDPR_All cookie is set when user selects accept all cookies in the GDPR overlay
var cmg_gdpr_first_check = getCookie("GDPR_First");

if(cmg_gdpr_check == null ||  (cmg_gdpr_check != null && cmg_gdpr_reject_check == null && cmg_gdpr_all_check == null && cmg_gdpr_first_check == null) || (cmg_gdpr_check != null && (cmg_gdpr_all_check != null || cmg_gdpr_first_check != null))) {  //If GDPR_Reject cookie is set or only GDPR cookie is set then don't add google analytics 
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','__gaTracker');

  if(window.location.host == "m-stage.coolmath-games.com" || window.location.host == "m-d8-dev.coolmathgames.com" || window.location.host == "m-stage.coolmathgames.com" || window.location.host == "m-dev.coolmath-games.com" || window.location.host == "m-dev.coolmathgames.com" || window.location.host == "m-dev2.coolmath-games.com" || window.location.host == "m-dev2.coolmathgames.com" || window.location.host == "m-dev3.coolmath-games.com" || window.location.host == "m-dev3.coolmathgames.com" || window.location.host == "m.cmatgame.local") {
    __gaTracker('create', 'UA-1192998-21', 'auto');//TODO
  } else {
    __gaTracker('create', 'UA-1192998-17', 'auto');
  }

  if(cmg_gdpr_all_check !== null && cmg_gdpr_all_check === "true") {
    __gaTracker("set","contentGroup5","Accepted All Cookies");
  } else if(cmg_gdpr_first_check !== null && cmg_gdpr_first_check === "true"){
    __gaTracker("set","contentGroup5","Accepted First Party Cookies");     
  } else if(cmg_gdpr_check !== null) {
    __gaTracker("set","contentGroup5","GDPR Cookie set by Fastly"); 
  }

  //Premium subscription group
  if(typeof myDebugAction === 'function' && (window.location.host == 'm.cmatgame.local' || window.location.host == 'dev.coolmath-games.com' || window.location.host == 'dev.coolmathgames.com' || window.location.host == 'dev2.coolmath-games.com' || window.location.host == 'dev2.coolmathgames.com' )) {
    myDebugAction();
  }
  if(typeof subscriberLeg !== 'undefined' && subscriberLeg !== null && subscriberLeg !== '' && typeof freeTrialUser !== 'undefined' && freeTrialUser) {
    //console.log('Setting the subscriber leg to GA content group');
    __gaTracker("set","contentGroup4",subscriberLeg);
  }

  //Subscriber - non Subscriber
  if(typeof getCookie === 'function' ) {
    //console.log("getCookie is defined. Setting AnonymousVsSubscribers custom dimension");
    if(getCookie('cmg_l') !== null && getCookie('cmg_sx') !== null ) {
      __gaTracker("set","contentGroup5","Subscriber");
    } else if (getCookie('cmg_l') !== null && getCookie('cmg_sx') === null ) {
      __gaTracker("set","contentGroup5","Inactive Subscriber");
    } else {
      __gaTracker("set","contentGroup5","Anonymous user");
    }
  }
  //Mobile game type group
  if(typeof mobile_ga_game_type != "undefined" && mobile_ga_game_type !== '') {
    __gaTracker("set","contentGroup1", mobile_ga_game_type);
  }
  //User timezone hour
  __gaTracker('set', 'dimension11', ''+new Date().getHours()+'');

  __gaTracker('send', 'pageview');
} else if(cmg_gdpr_reject_check != null && cmg_gdpr_reject_check == "true"){
  //delete all other cookies like mbox, 
  document.cookie = "has_js" +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + document.domain;
  if(document.domain == "www.coolmath-games.com") {
    document.cookie = "mbox" +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.coolmath-games.com;";
    document.cookie = "_gat" +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.coolmath-games.com;";
  } else {
    document.cookie = "mbox" +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + document.domain;
    document.cookie = "_gat" +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + document.domain;
  }  
  
}

function downloadJSAtOnload() {
        var element = document.createElement('script');
        element.src = '/modules/custom/cmatgame_ads_analytics/js/externalMin_07102014.js';
        document.body.appendChild(element);
        }

function trackEvent(category, action, label, value) {
  if(typeof value === 'undefined' || value === null) {
    value = 0;
  }
  if(typeof __gaTracker !== "undefined") {
    __gaTracker('send', {
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value
    });
  }
  
}

function trackEventNonInteractive(category, action, label, value, nonactive) {
  if(typeof value === 'undefined' || value === null) {
    value = 0;
  }
  if(typeof nonactive === 'undefined' || nonactive === null) {
    nonactive = 1;
  }
  if(typeof __gaTracker !== "undefined") {
    __gaTracker('send', {
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value,
      nonInteraction : nonactive
    });
  }
}

function trackGoalVirtualPV(virtual_page) {
  if(typeof __gaTracker !== "undefined") {
    debugOut("GA Goal Tracking. Virtual pv: "+virtual_page);
    __gaTracker('send', 'pageview', virtual_page);
  }
}
;
$=jQuery;
$(document).ready(function () {
   if(window.location.href.indexOf('m.coolmathgames.com') || window.location.href.indexOf('m-stage.coolmathgames.com') || window.location.href.indexOf('m.cmatgame.local')){
      console.log('mobile');
      jQuery('.pane-page-content').addClass('scrollableContentArea');
      jQuery('body').addClass('node-type-page');
      jQuery('.gdpr-page-container').addClass('global-wrapper-content');
      jQuery('.gdpr-page-content').addClass('field-body');
    }
    cmg_gdpr_check = getCookie("GDPR");
    cmg_gdpr_all_check = getCookie("GDPR_All");
    cmg_gdpr_first_check = getCookie("GDPR_First");
    cmg_gdpr_reject_check = getCookie("GDPR_Reject");
    cmg_gdpr_choice_selected = getCookie("GDPR_CHOICE");
  if(cmg_gdpr_check != null && cmg_gdpr_check=="true") 
    {
      if(cmg_gdpr_all_check == null && cmg_gdpr_first_check == null && cmg_gdpr_reject_check == null) { // user is visiting our site firsttime from one of GDPR countries
      } else if(cmg_gdpr_all_check == null || cmg_gdpr_all_check == false){
      remove_ads_from_free_game_pages();
      } 
      //use below cookie to select active button user selected.
      if(cmg_gdpr_choice_selected != null) {
         if(cmg_gdpr_choice_selected == "GDPR_All") {
         jQuery('.gdpr-page-container .accept-all-cookies').addClass('active');
         jQuery('.gdpr-page-container .accept-firstparty-cookies').addClass('not-active');
         jQuery('.gdpr-page-container .reject-all-cookies').addClass('not-active');
       } else if(cmg_gdpr_choice_selected == "GDPR_First") {
         jQuery('.gdpr-page-container .accept-firstparty-cookies').addClass('active');
         jQuery('.gdpr-page-container .accept-all-cookies').addClass('not-active');
         jQuery('.gdpr-page-container .reject-all-cookies').addClass('not-active');
       } else if(cmg_gdpr_choice_selected == "GDPR_Reject") {
         jQuery('.gdpr-page-container .reject-all-cookies').addClass('active');
         jQuery('.gdpr-page-container .accept-all-cookies').addClass('not-active');
         jQuery('.gdpr-page-container .accept-firstparty-cookies').addClass('not-active');
       } 
      }   
    }  
});

function acceptAllCookies() {
    var d = new Date();
    d.setTime(d.getTime() + (365*2*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "GDPR_All=true;" + expires + ";path=/";
    document.cookie = "GDPR_First=false;" + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "GDPR_Reject=false;" + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "GDPR_CHOICE=GDPR_All"+ ";path=/";
    window.location =  location.href;
  }
  function acceptFirstpartyCookies() {
    document.cookie = "GDPR_First=true"+ ";path=/";
    document.cookie = "GDPR_Reject=false;" + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "GDPR_All=false;" + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "GDPR_CHOICE=GDPR_First"+ ";path=/";
    window.location =  location.href;
  } 
  function rejectAllCookies() {
    document.cookie = "GDPR_Reject=true"+ ";path=/";
    document.cookie = "GDPR_First=false;" + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "GDPR_All=false;" + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "GDPR_CHOICE=GDPR_Reject"+ ";path=/";
    window.location =  location.href;
  };
(function ($) {
    $("#edit-vcl-snippets").click(function (e) {
        e.preventDefault();
        if (confirm('Are you sure you want to update Fastly VCL with latest?')) {
            $("#edit-vcl-snippets").trigger("click-custom");
        }

    });

    $("#edit-purge-all").click(function (e) {
        e.preventDefault();
        if (confirm('Are you sure you want to purge/invalidate all content?')) {
            $("#edit-purge-all").trigger("click-custom-purge-all");
        }

    });

    $("#edit-upload-error-maintenance").click(function (e) {
        console.log("Ajde vise");
        e.preventDefault();
        if (confirm('Are you sure you want to upload new maintenance page?')) {
            $("#edit-upload-error-maintenance").trigger("click-custom-upload-error-maintenance");
        }

    });
})(jQuery);
;
