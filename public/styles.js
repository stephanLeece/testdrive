
// -------- view dependent styling --------------
if(window.innerHeight > window.innerWidth){
      showMobileEvents();
} else {
  showDesktopEvents();
}

window.addEventListener("resize", function() {
  if(window.innerHeight > window.innerWidth){
        showMobileEvents();
  } else {
    showDesktopEvents();
  }

}, false);

if ($(window).width() < 700 && window.location.pathname == '/testdrive') {
  $("#makeitblack").hide();
  $("#backButton").hide();
}

// if (window.location.pathname == '/info') {
//   $('body').css({
//     'background': 'url(./assets/Elements/Info/Info-bgA.png) no-repeat center center fixed',
//     'background-size': '100vw 100vh'
//   });
// }

if (window.location.pathname == '/catalogue') {
  $('#cat').css({'color': 'rgb(255, 194, 120)'});
}

if (window.location.pathname == '/events') {
  $('#eve').css({'color': 'rgb(255, 194, 120)'});
  $('.eventDetails:first-child').addClass('ddEventActive');
}


if (window.location.pathname == '/testdrive') {
  $(".drivedrive-menu").hide();
  $("#makeitblack").hide();
  $('.eventDetails:first-child').addClass('tdEventActive');
}



// desktop only functions

function showDesktopEvents() {
  console.log('showing desktop');
  $(".eventsInfoBox").css({
    '-webkit-transform': 'scale(1 , 1)',
    '-moz-transform': 'scale(1 , 1)',
    '-o-transform': 'scale(1 , 1)',
    '-ms-transform': 'scale(1 , 1)',
    'transform': 'scale(1 , 1)',
    '-webkit-transform-origin': '50% 100%',
    '-moz-transform-origin': '50% 100%',
    '-o-transform-origin': '50% 100%',
    '-ms-transform-origin': '50% 100%',
    'transform-origin': '50% 100%',
  });
  $('.eventsInfoBox').find('div').addClass('eventsInfoHidden');
    $('.eventsInfoBox div:first-child').removeClass('eventsInfoHidden');
  // events to trigger on user interaction
  $(".eventDetails").click(function() {
    let eventIndex = $(this).index();
    $('.eventsInfoBox').find('div').addClass('eventsInfoHidden');
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('eventsInfoHidden');
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
// testdrive and events - set eventsinfo height to 0 on page loaded  if (window.location.pathname == '/events') {
console.log('showing mobile');
    $(".eventsInfoBox").css({
      '-webkit-transform': 'scale(1 , 0)',
      '-moz-transform': 'scale(1 , 0)',
      '-o-transform': 'scale(1 , 0)',
      '-ms-transform': 'scale(1 , 0)',
      'transform': 'scale(1 , 0)',
      '-webkit-transform-origin': '50% 100%',
      '-moz-transform-origin': '50% 100%',
      '-o-transform-origin': '50% 100%',
      '-ms-transform-origin': '50% 100%',
      'transform-origin': '50% 100%',
    });
    $('.eventsInfoBox').find('div').addClass('eventsInfoHidden');
    $('.eventsInfoBox div:first-child').removeClass('eventsInfoHidden');

  // events to trigger on mobile user interaction
  $(".eventDetails").click(function() {
    $('.eventsInfoBox').find('div').addClass('eventsInfoHidden');
    let eventIndex = $(this).index();
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('eventsInfoHidden');
    $(".eventDetails").addClass('eventDetailsHidden')
    $(this).removeClass('eventDetailsHidden');
    $(".eventsInfoBox").css({
      '-webkit-transform': 'scale(1 , 1)',
      '-moz-transform': 'scale(1 , 1)',
      '-o-transform': 'scale(1 , 1)',
      '-ms-transform': 'scale(1 , 1)',
      'transform': 'scale(1 , 1)',
      '-webkit-transform-origin': '50% 100%',
      '-moz-transform-origin': '50% 100%',
      '-o-transform-origin': '50% 100%',
      '-ms-transform-origin': '50% 100%',
      'transform-origin': '50% 100%',
    });


    if (window.location.pathname == '/events') {
      $(".eventDetails").removeClass('ddEventActive');
      $(this).addClass('ddEventActive');
    }

    if (window.location.pathname == '/testdrive') {
      $(".eventDetails").removeClass('tdEventActive');
      $(this).addClass('tdEventActive');
    }
  });

  $(".eventsInfoBox").click(function() {
    $(this).css({
      '-webkit-transform': 'scale(1 , 0)',
      '-moz-transform': 'scale(1 , 0)',
      '-o-transform': 'scale(1 , 0)',
      '-ms-transform': 'scale(1 , 0)',
      'transform': 'scale(1 , 0)',
      '-webkit-transform-origin': '50% 100%',
      '-moz-transform-origin': '50% 100%',
      '-o-transform-origin': '50% 100%',
      '-ms-transform-origin': '50% 100%',
      'transform-origin': '50% 100%',
    });
    $('.eventsInfoBox').find('div').addClass('eventsInfoHidden');
    $(".eventDetails").removeClass('eventDetailsHidden');
  });

}
