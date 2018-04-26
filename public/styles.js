if ($(window).width() > 600) {
    $(".mob-container").hide();
    showDesktopEvents();
} else {
    $(".mob-container").show();
    showMobileEvents();
}

if ($(window).width() < 600 && window.location.pathname == '/testdrive') {
  $(".mob-container").show();
  $("#makeitblack").hide();
  $("#backButton").hide();
}
else if (window.location.pathname == '/testdrive'){
  $(".drivedrive-menu").hide();
  $("#makeitblack").hide();
}

function showDesktopEvents() {
  $('.eventsInfoBox').find('div').addClass('hidden');
  $(".eventDetails").click(function() {
    let eventIndex = $(this).index();
    $('.eventsInfoBox').find('div').addClass('hidden');
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('hidden');
  });
};




function showMobileEvents() {
  $('.eventsInfoBox').find('div').addClass('hidden');
  $(".eventDetails").click(function() {
    let eventIndex = $(this).index();
    $('.eventsInfoBox').find('div').addClass('hidden');
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('hidden');
  });
  // hides the infobox and all of the divs within it
  // $('.eventsInfoBox').find('div').addClass('hidden');
  $('.eventsInfoBox').css({ 'display': 'none' });
  let highlightedEvent = $('.eventList').children('.ddEventActive');
  $(".eventDetails").click(function(e) {
    if (highlightedEvent !== e.target) {
      highlightedEvent.removeClass('.ddEventActive');
    }
    // trying to put the background image behind the selected event
    // $(e.target).addClass('ddEventActive');
    // let eventIndex = $(this).index();
    // $('.eventList').children().css({ 'display': 'none' });
    $('.eventList').children('.ddEventActive').css({ 'display': 'block' });
    $('.eventsInfoBox').css({ 'display': 'flex' });
    // $('.eventsInfoBox').find('div').addClass('hidden');
    $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('hidden');
    // w/o this the infobox will never appear
    // e.stopPropagation();
  });
  // $('#eve-disp').click(function() {
  //   // returns the infobox to hidden -- the 'exit' functionality
  //   $('.eventsInfoBox').css({ 'display': 'none' });
  //   $('.eventList').children('.ddEventActive').removeClass('.ddEventActive')
  // })

  $('.trigger, .slider').click(function() {
    $('.eventsInfoBox').toggleClass('close');
  });

}


// -------- view dependent styling --------------
if (window.location.pathname == '/info') {
    $('body').css({
        'background': 'url(./assets/Elements/Info/Info-bgA.png) no-repeat center center fixed',
        'background-size': '100vw 100vh'
    });
}


function eventHover(view) {
  $(".eventDetails").hover(function(){
      $(this).addClass(view);
      }, function(){
      $(this).removeClass(view);
  });
}

if (window.location.pathname == '/catalogue') {
  $('#cat').css({'color': 'rgb(255, 194, 120)'});
}

if (window.location.pathname == '/events') {
  $('#eve').css({'color': 'rgb(255, 194, 120)'});
  $('.eventDetails:first-child').addClass('ddEventActive');
  $('.eventsInfoBox div:first-child').removeClass('hidden');
}

if (window.location.pathname == '/testdrive') {
  $('.eventDetails:first-child').addClass('tdEventActive');
  $('.eventsInfoBox div:first-child').removeClass('hidden');
}

if ($(window).width() < 670 && window.location.pathname == '/') {
    $(".homepage-tdevents").hide();
}


// if ($(window).width() < 670 && window.location.pathname == '/info') {
//     $(".homepage-tdevents").hide();
// }
