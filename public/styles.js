if ($(window).width() > 600) {
    $(".mob-container").hide();
} else {
    $(".mob-container").show();
}

console.log('location', window.location.pathname);
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

if (window.location.pathname == '/catalogue') {
  $('#cat').css({'color': 'rgb(255, 194, 120)'});
}


if (window.location.pathname == '/events') {
  $('#eve').css({'color': 'rgb(255, 194, 120)'});
}




// ('.events-menu').on('p', 'img' function(){
//    $(this).addClass('visible').siblings().removeClass('visible');
// });











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
