if ($(window).width() > 600) {
    $(".mob-container").hide();
} else {
    $(".mob-container").show();
}

$(".eventDetails").click(function() {
  let eventIndex = $(this).index();
  console.log(eventIndex);
  $('.eventsInfoBox').find('div').addClass('hidden');
  $(`.eventInfo:nth-child(${eventIndex + 1})`).removeClass('hidden');
});

// -------- view dependent styling --------------
if (window.location.pathname == '/info') {
//     if ($(window).width() > 375 && $(window).width() < 600) {
//
//         // $('body').css({
//         //     'background': 'url(./assets/mobile/Info-mobile.png) no-repeat center center fixed',
//         //     'background-size': '100vw 100vh'
//         // });
//
//     } else {
//
    $('body').css({
        'background': 'url(./assets/Elements/Info/Info-bgA.png) no-repeat center center fixed',
        'background-size': '100vw 100vh'
    });
//     }
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
  eventHover('ddEventActive');
}

if (window.location.pathname == '/testdrive') {
  $('.eventDetails:first-child').addClass('tdEventActive');
  $('.eventsInfoBox div:first-child').removeClass('hidden');
  eventHover('tdEventActive');
}

// ----------------------------------------------------------------------------------

// trying the rainbow scroll

// var $head = $('head');
// var $body = $('body');
//
// $head.append("<style class='rainbow-scroll'>body::-webkit-scrollbar-thumb{background-color: #edb91d;}</style>");
// var $rainbowScroll = $('.rainbow-scroll');
//
// $(window).scroll(function(){
//   $rainbowScroll.html(".rainbow-scroll::-webkit-scrollbar-thumb{background-color:"+ getRandomColor() +"}")
//   $body.addClass('rainbow-scroll');
//   $body.css({overflow: 'auto'});
//   setTimeout( function(){ $body.css({overflow: 'scroll'}) }, 0);
// });
//
// function getRandomColor(){
//   return '#'+Math.floor(Math.random()*16777215).toString(16);
// }
