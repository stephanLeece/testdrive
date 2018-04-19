if ($(window).width() > 600) {
    $(".mob-container").hide();
} else {
    $(".mob-container").show();
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

$('.eventsInfoBox').find('div').addClass('hidden');
$(".eventDetails").click(function() {
  let eventIndex = $(this).index();
  $('.eventsInfoBox').find('div').addClass('hidden');
  $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('hidden');
});



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
