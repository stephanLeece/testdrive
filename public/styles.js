// hover function for desktop. used on TD and DD event pages
function eventHover(view) {
  $('.eventDetails:first-child').addClass(view);
  $(".eventDetails").hover(function() {
    $(this).addClass(view);
  }, function() {
    $(this).removeClass(view);
  });
}


// -------- view dependent styling --------------

if ($(window).width() > 700) {
  $(".mob-container").hide();
  showDesktopEvents();
} else {
  $(".mob-container").show();
  showMobileEvents();
}

if ($(window).width() < 700 && window.location.pathname == '/') {
  $(".homepage-tdevents").hide();
}

if ($(window).width() < 700 && window.location.pathname == '/testdrive') {
  $(".mob-container").show();
  $("#makeitblack").hide();
  $("#backButton").hide();
}

if (window.location.pathname == '/info') {
  $('body').css({
    'background': 'url(./assets/Elements/Info/Info-bgA.png) no-repeat center center fixed',
    'background-size': '100vw 100vh'
  });
}

if (window.location.pathname == '/catalogue') {
  $('#cat').css({'color': 'rgb(255, 194, 120)'});
}

if (window.location.pathname == '/events') {
  $('#eve').css({'color': 'rgb(255, 194, 120)'});
  eventHover('ddEventActive');
  $('.eventsInfoBox div:first-child').removeClass('hidden');
}


if (window.location.pathname == '/testdrive') {
  $(".drivedrive-menu").hide();
  $("#makeitblack").hide();
  eventHover('tdEventActive');
  $('.eventsInfoBox div:first-child').removeClass('hidden');
}



// desktop only functions

function showDesktopEvents() {
  // initial events to trigger on load
  console.log('DESKTOP EVENTS LOADED');
  $('.eventsInfoBox').find('div').addClass('hidden');

  // events to trigger on user interaction
  $(".eventDetails").click(function() {
    let eventIndex = $(this).index();
    $('.eventsInfoBox').find('div').addClass('hidden');
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('hidden');
  });
};

///// MOBILE EVENTS PAGE ///// ///// MOBILE EVENTS ///// ///// MOBILE EVENTS ///// ///// MOBILE EVENTS ///// ///// MOBILE EVENTS /////

function showMobileEvents() {
    // initial events to trigger on load
  console.log('MOBILE EVENTS LOADED');
  $('.eventsInfoBox').find('div').addClass('hidden');

  // events to trigger on user interaction
  $(".eventDetails").click(function() {
    let eventIndex = $(this).index();
    $('.eventsInfoBox').find('div').addClass('hidden');
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('hidden');
    $('.eventsInfoBox').removeClass('eventsInfoBoxClosed');
  });

// shrink/grow infoBox
  $('.eventsInfoBox').click(function(event) {
    $('.eventsInfoBox').addClass('eventsInfoBoxClosed');
  });

}
