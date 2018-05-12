
// -------- view dependent styling --------------

if ($(window).width() > 700) {
  $(".mob-container").hide();
  showDesktopEvents();
} else {
  showMobileEvents();
}

if ($(window).width() < 700 && window.location.pathname == '/testdrive') {
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
  $('.eventDetails:first-child').addClass('ddEventActive');
  $('.eventsInfoBox div:first-child').removeClass('eventsInfoBoxHidden');
}


if (window.location.pathname == '/testdrive') {
  $(".drivedrive-menu").hide();
  $("#makeitblack").hide();
  $('.eventsInfoBox div:first-child').removeClass('eventsInfoBoxHidden');
}



// desktop only functions

function showDesktopEvents() {
  console.log("desktop events loaded");
  $('.eventsInfoBox').find('div').addClass('eventsInfoBoxHidden');
  // events to trigger on user interaction
  $(".eventDetails").click(function() {
    let eventIndex = $(this).index();
    $('.eventsInfoBox').find('div').addClass('eventsInfoBoxHidden');
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('eventsInfoBoxHidden');
    if (window.location.pathname == '/events') {
      $(".eventDetails").removeClass('ddEventActive');
      $(this).addClass('ddEventActive');
    }

    if (window.location.pathname == '/testdrive') {
      $(".eventDetails").removeClass('tdEventActive');
      $(this).addClass('tdEventActive');
    }
  });

$(".eventDetails").mouseover(function() {
  if (window.location.pathname == '/events') {
    $(".eventDetails").removeClass('ddEventActive');
    $(this).addClass('ddEventActive');
  }

  if (window.location.pathname == '/testdrive') {
    $(".eventDetails").removeClass('tdEventActive');
    $(this).addClass('tdEventActive');
  }
});
}

///// MOBILE EVENTS PAGE ///// ///// MOBILE EVENTS ///// ///// MOBILE EVENTS ///// ///// MOBILE EVENTS ///// ///// MOBILE EVENTS /////

function showMobileEvents() {
    // initial events to trigger on load
  console.log('MOBILE EVENTS LOADED');
  $('.eventsInfoBox').find('div').addClass('eventsInfoBoxHidden');

  // events to trigger on user interaction
  $(".eventDetails").click(function() {
    let eventIndex = $(this).index();
    $('.eventsInfoBox').find('div').addClass('eventsInfoBoxHidden');
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('eventsInfoBoxHidden');
    $('.eventsInfoBox').removeClass('eventsInfoBoxClosed');
  });

// shrink/grow infoBox
  $('.eventsInfoBox').click(function(event) {
    $('.eventsInfoBox').addClass('eventsInfoBoxClosed');
  });

}
