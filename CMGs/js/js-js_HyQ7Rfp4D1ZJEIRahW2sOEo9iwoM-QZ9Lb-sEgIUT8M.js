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
//pre fetch json
latestQuizzesData = '';
showMoreData = '';
showMoreStart = 0;
showMoreLimit = 15;
iPhoneShowMore = false;
if (jQuery(window).width() < 640) {
  showMoreLimit = 10;
  iPhoneShowMore = true;
}
showMoreRunning = false;
triviaSource = 'https://www.quizlife.com/sites/acquia_prod/files/quiz/';
$(document).ready(function () {
  //Show navigation block for all users on trivia landing and category pages
  jQuery('.block-projectcuriously-custom-cmc-category-sidebar').show();
  if(typeof getCookie === 'function' && getCookie("cmg_sx") !== null) {
    jQuery('.pane-cmatgame-advertisement-cm-g-otherpages-300x250-top').hide()
    jQuery('.pane-cmatgame-advertisement-cm-g-otherpages-300x250-center').hide();
  }
  $.getJSON(triviaSource+"latest-quiz3.json", function(data, status, response) {
    //console.log("Loaded Trivia latest-quiz.json");
    if(typeof data !== 'undefined' && typeof data.latestQuizzes !== 'undefined' && data.latestQuizzes.length >= 1) {
      latestQuizzesData = data.latestQuizzes;
      latestQuizzesHtml = getLatestQuizzesHtml();
      jQuery("#trivia-home-container").html('<div id="trivia-home-latest-quizzes">'+latestQuizzesHtml+'</div>');
      jQuery('body').addClass('trivia-home section-trivia');
    }
  }).fail(function(jqxhr, status, error) {
    var err = status + ", " + error;
    //console.log("Failed to load trivia latest-quiz.json");
  });
  //if(showMoreData === '' && showMoreRunning === false) {
    showMoreRunning = true;
    //console.log("Loading homepage-more-favorites.json.")
    $.getJSON(triviaSource+"homepage-more-favorites.json", function(data, status, response) {
      //console.log("Loaded Trivia homepage-more-favorites.json");
      if(typeof data !== 'undefined' && typeof data.showMoreQuizzes !== 'undefined' && data.showMoreQuizzes.length >= 1) {
        showMoreData = data.showMoreQuizzes;
        showMoreFavoritesHtml = getShowMoreHtml();
      }
    }).fail(function(jqxhr, status, error) {
      var err = status + ", " + error;
      //console.log("Failed to load trivia homepage-more-favorites.json");
    }).done(function() {
      //console.log("Done loading json file");
      showMoreRunning = false;
    });
  //}

  //Top Five - Most Popular / Right At Home / On the web...
  //console.log("Loading top-five-top-5-most-popular.json.")
  $.getJSON(triviaSource+"top-five-top-5-most-popular.json", function(data, status, response) {
    //console.log("Loaded Trivia top-five-top-5-most-popular.json");
    mostPopularHtml = getTopFiveHtml(data);
    jQuery('#cmatgame-top-5-most-popular').html(mostPopularHtml);
  }).fail(function(jqxhr, status, error) {
    var err = status + ", " + error;
    //console.log("Failed to load trivia top-five-top-5-most-popular.json");
  }).done(function() {
    //console.log("Done loading top-five-top-5-most-popular.json file");
  });
});

function getLatestQuizzesHtml() {
  var latestQuizzesHTML = '';
  var heroQuizHtml = '';
  var latestQuizzesPrefix = '<div class="contextual-links-region panel-pane pane-block pane-views-recent-quizzes-feed-list-block">'+
    '<div class="pane-content">'+
    '<div class="quiz-listing">'+
    '<div class="view-content">';

  var latestQuizzesSuffix = '</div></div></div></div>';

  if(typeof latestQuizzesData !== 'undefined') {
    //Desktop 3 column rows. recommended in first column
    latestQuizzesLength = latestQuizzesData.length;
    for(i=0; i<latestQuizzesLength; i++) {
      latestQuiz = latestQuizzesData[i];

      if(typeof latestQuiz !== 'undefined' && typeof latestQuiz.url !== 'undefined' && typeof latestQuiz.icon !== 'undefined') {
        qDek = typeof latestQuiz.dek !== 'undefined' ? latestQuiz.dek : '';
        qIcon = latestQuiz.icon;
        qTitle = latestQuiz.title;
        qNid = typeof latestQuiz.nid !== 'undefined' ? latestQuiz.nid : '';
        qUrl = "/trivia/" + qTitle.replace(" & ","-").replace(" - ","-").replace(/\s/g,"-").replace(/['"!@#$%()?:,.]/g,'').toLowerCase().trim();

        qCategoryName = typeof latestQuiz.categoryName !== 'undefined' ? latestQuiz.categoryName : '';
        qCategoryUrl = "/quiz-category/" + qCategoryName.replace(" & ","-").replace(" - ","-").replace(/\s/g,"-").replace(/['"!@#$%()?:,.]/g,'').toLowerCase().trim();
        qTaxColorDark = typeof latestQuiz.taxColorDark !== 'undefined' ? latestQuiz.taxColorDark : '';
        qTaxColorMedium = typeof latestQuiz.taxColorMedium !== 'undefined' ? latestQuiz.taxColorMedium : '';

        var row_type = 'even';
        if((i+1)%2 == 0) {
          row_type = 'odd';
        }
        if(i == 1) {
          row_type += ' views-row-first';
        } else if(i == latestQuizzesLength-1) {
          row_type += ' views-row-last';
        }

        if(typeof latestQuiz.heroQuiz !== 'undefined' && latestQuiz.heroQuiz) {
          if(typeof latestQuiz.heroIcon !== 'undefined' && latestQuiz.heroIcon !== '') {
            qIcon = latestQuiz.heroIcon;
          }
          quizColumn = '<div class="trivia-hero-quiz">'+
            '<div id="hpHero">'+
              '<div class="image-wrap">'+
                '<a href="'+qUrl+'"><img src="'+qIcon+'"></a>'+
              '</div>'+
              '<div class="link-wrap">'+
                '<div class="featured-quiz">QUIZ THIS</div>'+
                '<h2><a href="'+qUrl+'">'+qTitle+'</a></h2>'+
                '<p><a href="'+qUrl+'">'+qDek+'</a></p>'+
              '</div>'+
            '</div>' +
          '</div>';
          heroQuizHtml = quizColumn + '<div class="panel-separator"></div>';

        } else {
          quizColumn = '<div id="node-'+ qNid +'" class="quiz-row">'+
          '<div class="hp-quiz-icon">'+
          '<div class="field-content"><a href="'+qUrl+'">'+
          '<img class="listing_thumbnail quiz-icon" typeof="foaf:Image" src="'+qIcon+'" alt="'+qTitle+' image">'+
          '</a><noscript>&lt;img class="listing_thumbnail" typeof="foaf:Image" src="'+ qIcon +'" width="188" height="130" alt="" /&gt;</noscript>'+
          '</div></div><div class="quizzes-feed-content">'+
          '<span class="parent-tax-link" style="color:'+qTaxColorDark+'" onmouseover="this.style.color=\''+qTaxColorMedium+'\'" onmouseout="this.style.color=\''+qTaxColorDark+'\'">'+
          '<a href="'+qCategoryUrl+'">'+qCategoryName+'</a>'+
          '</span>'+
          '<div class="quiz-title">'+
          '<span>'+
          '<a href="'+qUrl+'">'+qTitle+'</a>'+
          '</span></div><div class="views-field views-field-body">'+
          '<div class="field-content"><p class="home-quiz-description">'+qDek+'</p>'+
          '</div></div></div></div>';

          latestQuizzesHTML = latestQuizzesHTML + quizColumn;
        }
      }
    }
    //End of for
    //Prepare full html
    if(latestQuizzesHTML.length) {
      latestQuizzesHTML = heroQuizHtml + latestQuizzesPrefix + latestQuizzesHTML + latestQuizzesSuffix;
    }
  } //End of latestQuizzesData processing
  return latestQuizzesHTML;
}

function getShowMoreHtml() {
  var showMoreHTML = '';
  var heroQuizHtml = '';
  jQuery('#trivia-show-more-container').show();
  jQuery('#trivia-home-show-more-container').css('display', 'block');//TODO
  var latestQuizzesPrefix = '<div class="contextual-links-region panel-pane pane-block pane-views-recent-quizzes-feed-list-block">'+
    '<div class="pane-content">'+
    '<div class="quiz-listing">'+
    '<div class="view-content">';

  var latestQuizzesSuffix = '</div></div></div></div>';

  if(typeof showMoreData !== 'undefined') {
    //Desktop 3 column rows. recommended in first column
    ShowMoreLength = showMoreData.length;
    start = showMoreStart;
    end = showMoreStart + showMoreLimit;
    if(end >= ShowMoreLength) {
      jQuery('#show-more-button').hide();
      //console.log('Reached the end of queue. Hide show more');
    } else {
      jQuery('#show-more-button').show();
    }
    ulrow = '';
    ///detect iPhone vs iPad
    if(iPhoneShowMore === true){
      for(i=start; i<end; i++) {
        if(i%2 === 0) {
          ulrow = '';
        }
        latestQuiz = showMoreData[i];

        if(typeof latestQuiz !== 'undefined' && typeof latestQuiz.url !== 'undefined' && typeof latestQuiz.icon !== 'undefined') {
          qDek = typeof latestQuiz.dek !== 'undefined' ? latestQuiz.dek : '';
          qIcon = latestQuiz.icon;
          qTitle = latestQuiz.title;
          qNid = typeof latestQuiz.nid !== 'undefined' ? latestQuiz.nid : '';
          qUrl = "/trivia/" + qTitle.replace(" & ","-").replace(" - ","-").replace(/\s/g,"-").replace(/['"!@#$%()?:,.]/g,'').toLowerCase().trim();

          qCategoryName = typeof latestQuiz.categoryName !== 'undefined' ? latestQuiz.categoryName : '';
          qCategoryUrl = typeof latestQuiz.categoryUrl !== 'undefined' ? latestQuiz.categoryUrl : '';
          qTaxColorDark = typeof latestQuiz.taxColorDark !== 'undefined' ? latestQuiz.taxColorDark : '';
          qTaxColorMedium = typeof latestQuiz.taxColorMedium !== 'undefined' ? latestQuiz.taxColorMedium : '';

          var row_type = 'even';
          if((i+1)%2 == 0) {
            row_type = 'odd';
          }
          if(i == 0) {
            row_type += ' views-row-first';
          } else if(i == ShowMoreLength-1) {
            row_type += ' views-row-last';
          }

          if(typeof latestQuiz.heroQuiz !== 'undefined' && latestQuiz.heroQuiz) {
            if(typeof latestQuiz.heroIcon !== 'undefined' && latestQuiz.heroIcon !== '') {
              qIcon = latestQuiz.heroIcon;
            }
            quizColumn = '<div class="contextual-links-region panel-pane pane-block pane-projectcuriously-custom-cmc-hero">'+
            '<div class="pane-content">'+
              '<div id="hpHero">'+
                '<div class="image-wrap">'+
                  '<a href="'+qUrl+'"><img src="'+qIcon+'"></a>'+
                '</div>'+
                '<div class="link-wrap">'+
                  '<div class="featured-quiz">QUIZ OF THE DAY</div>'+
                  '<h2><a href="'+qUrl+'">'+qTitle+'</a></h2>'+
                  '<p><a href="'+qUrl+'">'+qDek+'</a></p>'+
                '</div>'+
              '</div>'+
            '</div></div>';
            heroQuizHtml = quizColumn + '<div class="panel-separator"></div>';

          } else {/////botttom half
            quizColumn = '<div id="node-'+ qNid +'" class="quiz-row">'+
            '<div class="field-content"><a href="'+qUrl+'">'+
            '<img class="listing_thumbnail quiz-icon-bottom" typeof="foaf:Image" src="'+qIcon+'" alt="" style="display: inline-block;" >'+
            '</a><noscript>&lt;img class="listing_thumbnail" typeof="foaf:Image" src="'+ qIcon +'" alt="" /&gt;</noscript>'+
            '</div></div><div class="quizzes-feed-content">'+
            '<span class="parent-tax-link" style="color:'+qTaxColorDark+'" onmouseover="this.style.color=\''+qTaxColorMedium+'\'" onmouseout="this.style.color=\''+qTaxColorDark+'\'">'+
            '<a href="'+qCategoryUrl+'">'+qCategoryName+'</a>'+
            '</span>'+
            '<div class="quiz-title">'+
            '<span class="field-content">'+
            '<a href="'+qUrl+'">'+qTitle+'</a>'+
            '</span></div><div class="views-field-body">'+
            '<div class="field-content"><p>'+qDek+'</p>'+
            '</div></div></div>';

            ulrow = ulrow + '<div class="homepage-more-favorite-quiz">'+ quizColumn + '</div>';
            if((i+1)%2 == 0) {
              showMoreHTML = showMoreHTML + '<ul style="list-style: none;">'+ ulrow + '</ul>';
              ulrow = '';
            }
          }
        }
      }
    } else if(iPhoneShowMore === false){
        for(i=start; i<end; i++) {
        if(i%3 === 0) {
          ulrow = '';
      }
      latestQuiz = showMoreData[i];

      if(typeof latestQuiz !== 'undefined' && typeof latestQuiz.url !== 'undefined' && typeof latestQuiz.icon !== 'undefined') {
        qDek = typeof latestQuiz.dek !== 'undefined' ? latestQuiz.dek : '';
        qIcon = latestQuiz.icon;
        qTitle = latestQuiz.title;
        qNid = typeof latestQuiz.nid !== 'undefined' ? latestQuiz.nid : '';
        qUrl = "/trivia/" + qTitle.replace(" & ","-").replace(" - ","-").replace(/\s/g,"-").replace(/['"!@#$%()?:,.]/g,'').toLowerCase().trim();

        qCategoryName = typeof latestQuiz.categoryName !== 'undefined' ? latestQuiz.categoryName : '';
        qCategoryUrl = typeof latestQuiz.categoryUrl !== 'undefined' ? latestQuiz.categoryUrl : '';
        qTaxColorDark = typeof latestQuiz.taxColorDark !== 'undefined' ? latestQuiz.taxColorDark : '';
        qTaxColorMedium = typeof latestQuiz.taxColorMedium !== 'undefined' ? latestQuiz.taxColorMedium : '';

        var row_type = 'even';
        if((i+1)%3 == 0) {
          row_type = 'odd';
        }
        if(i == 1) {
          row_type += ' views-row-first';
        } else if(i == ShowMoreLength-1) {
          row_type += ' views-row-last';
        }

        if(typeof latestQuiz.heroQuiz !== 'undefined' && latestQuiz.heroQuiz) {
          if(typeof latestQuiz.heroIcon !== 'undefined' && latestQuiz.heroIcon !== '') {
            qIcon = latestQuiz.heroIcon;
          }
          quizColumn = '<div class="contextual-links-region panel-pane pane-block pane-projectcuriously-custom-cmc-hero">'+
          '<div class="pane-content">'+
            '<div id="hpHero">'+
              '<div class="image-wrap">'+
                '<a href="'+qUrl+'"><img src="'+qIcon+'"></a>'+
              '</div>'+
              '<div class="link-wrap">'+
                '<div class="featured-quiz">QUIZ OF THE DAY</div>'+
                '<h2><a href="'+qUrl+'">'+qTitle+'</a></h2>'+
                '<p><a href="'+qUrl+'">'+qDek+'</a></p>'+
              '</div>'+
            '</div>'+
          '</div></div>';
          heroQuizHtml = quizColumn + '<div class="panel-separator"></div>';

        } else {/////botttom half
          quizColumn = '<div id="node-'+ qNid +'" class="quiz-row">'+
          '<div class="field-content"><a href="'+qUrl+'">'+
          '<img class="listing_thumbnail quiz-icon-bottom" typeof="foaf:Image" src="'+qIcon+'" alt="" style="display: inline-block;" >'+
          '</a><noscript>&lt;img class="listing_thumbnail" typeof="foaf:Image" src="'+ qIcon +'" alt="" /&gt;</noscript>'+
          '</div></div><div class="quizzes-feed-content">'+
          '<span class="parent-tax-link" style="color:'+qTaxColorDark+'" onmouseover="this.style.color=\''+qTaxColorMedium+'\'" onmouseout="this.style.color=\''+qTaxColorDark+'\'">'+
          '<a href="'+qCategoryUrl+'">'+qCategoryName+'</a>'+
          '</span>'+
          '<div class="quiz-title">'+
          '<span class="field-content">'+
          '<a href="'+qUrl+'">'+qTitle+'</a>'+
          '</span></div><div class="views-field-body">'+
          '<div class="field-content"><p>'+qDek+'</p>'+
          '</div></div></div>';

          ulrow = ulrow + '<div class="homepage-more-favorite-quiz">'+ quizColumn + '</div>';
          if(i%3 == 2) {
            showMoreHTML = showMoreHTML + '<ul style="list-style: none;">'+ ulrow + '</ul>';
            ulrow = '';
          }
        }
      }
    }
    }

    //End of for
    showMoreHTML = showMoreHTML + ulrow ;

    //Prepare full html
    //console.log("showMoreStart "+showMoreStart+". Total show more "+ShowMoreLength);
    showMoreStart = showMoreStart + showMoreLimit;
    if(showMoreHTML.length) {
      showMoreHTML = heroQuizHtml + latestQuizzesPrefix + showMoreHTML + latestQuizzesSuffix;
    }
  } //End of showMoreData processing
  jQuery("#trivia-show-more-container #trivia-home-more-quizzes").append('<div class="home-more-quizzes">'+showMoreHTML+'</div>').show();
  //jQuery('#trivia-home-more-quizzes').show();
}


function getTopFiveHtml(data) {
  topFiveHtml = '';
  if(data !== '' ) {
    liHtml = '';
    for(i=0; i<5; i++) {
      qUrl = "/trivia/" + data.quizzes[i].title.replace(" & ","-").replace(" - ","-").replace(/\s/g,"-").replace(/['"!@#$%()?:,.]/g,'').toLowerCase().trim();
      liHtml += '<li><!-- <em>'+(i+1)+'</em> --><a href="'+ qUrl +'">'+data.quizzes[i].title+'</a></li>';
    }
    //TODO - Remove hardcoded styles
    topFiveHtml = '<section class="block-bean-top-5-most-popular">'+
    '<style type="text/css">'+
    '.block-bean-top-5-most-popular .block-title {font-family: "Amasis MT","Helvetica Neue",Helvetica,Arial,sans-serif; border-bottom: 4px solid #000000; font-size: 20px; font-weight: bold; line-height: 25px; padding-bottom: 0px; }'+
    '.block-bean-top-5-most-popular .block-title span { color: '+data.color+' !important; }'+
    '.block-bean-top-5-most-popular ol.content li:before { background: '+data.color+' !important; content: counter(step-counter); position: absolute; left: -42px; top: 0; line-height: 1; text-align: center; font-style: normal; font-family: "Amasis MT"; font-weight: bold; border-radius: 1.5em; width: 16px; height: 16px; font-size: 17px; padding: 9px; margin-right: 10px; margin-bottom: 5px; color: #fff;}'+
    '.block-bean-top-5-most-popular ol.content { list-style-type: none; list-style-position: inside;}'+
    '.block-bean-top-5-most-popular ol.content li {margin-bottom: 0; position: relative; padding: 0; counter-increment: step-counter; margin: 0 0 15px 42px; padding-top: 3px;}'+
    '</style>'+
    '<h2 class="block-title">Top 5 <span>'+ data.title+'</span></h2>'+
    '<div class="entity entity-bean bean-curiously-top-five clearfix" about="/block/top-5-most-popular" typeof="">'+
    '<ol class="content">'+
    liHtml +
    '</ol></div></section>';
  }
  return topFiveHtml;
}


jQuery(window).on("load", function () {
  //console.log("Detect if experience or a subscriber before adding ads");
  if(jQuery(window).width() > 640 && ( (typeof freeTrialUser !== 'undefined' && freeTrialUser) || 
      (typeof cmg_school_whitelisted !== 'undefined' && cmg_school_whitelisted) || 
      (typeof cmg_no_ads !== 'undefined' && cmg_no_ads !== null) || 
      (typeof getCookie === 'function' && getCookie("cmg_sx") !== null) ) 
    ) {
    //display jQuery('.pane-cmatgame-trivia-trivia-navigation')
    //console.log("User is in experience or a subscriber. do not add ad container");
    var boxContainer =  '<div class="right-rail-box-container"><div class="box-container1" id="box-slot-1"></div></div>';
    jQuery('.trivia-container').after(boxContainer);
    jQuery('.pane-cmatgame-trivia-trivia-navigation').insertBefore('#box-slot-1');
  } else {
    var boxContainer =  '<div class="right-rail-box-container">' +
                        '<div class="box-container" id="box-slot-1">' +
                          '<div class="mobile-container"><div id="div-gpt-ad-868275232471008982-2" class="detailBlock">'+
                                '<div data-pw-desk="med_rect_atf"></div>' +                              
                              '<div data-pw-mobi="med_rect_atf"></div>'+
                      '</div></div></div>'+
                        '<div class="box-container-2">'+
                          '<div class="box-placeholder"><div class="mobile-container"><div id="div-gpt-ad-868275232471008982-3" class="detailBlock">'+
                              '<div data-pw-desk="med_rect_btf"></div>' +                              
                              '<div data-pw-mobi="med_rect_btf"></div>'+
                        '</div></div></div>'+
                      '</div>'+
                    '</div>';
   // jQuery('.trivia-container').after(boxContainer);
    jQuery('.pane-cmatgame-trivia-trivia-navigation').insertAfter('#box-slot-1');
    if (jQuery(window).width() < 640) {
      var mobileFooterAdMove = jQuery('#box-slot-1').html();
      jQuery('#box-slot-1').remove();
      jQuery('#fixed-footer-content').replaceWith(mobileFooterAdMove);
      jQuery('.mobile-container').css({
        'padding-top':'0px',
        'margin':'0 auto',
        'width':'100%',
        'text-align':'center'
      });
      jQuery('.box-container-2').remove();
      jQuery('.pane-cmatgame-trivia-trivia-navigation').remove();
    }
  }
 });
;
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
