if (window.location.pathname == '/info') {
  $('body').css({
      'background': 'url(./assets/Elements/Info/Info-bgA.png) no-repeat center center fixed',
      'background-size' : '100vw 100vh',
    });

}

// ------ active color Orange on current route  ----
//Catalogue route

//
// if (window.location.pathname == '/') {
//   $('#cat').addClass('active-color-home')
// }else if {

    $(function(){
        var current = location.pathname;
        $('#cat').each(function(){
            var $this = $(this);
            // if the current path is like this link, make it active
            if($this.attr('href').indexOf(current) !== -1){
                $this.addClass('active');
            }
        })
    })
// }

//Event route
$(function(){
    var current = location.pathname;
    $('#eve').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('act');
        }
    })
})

// ------ active color Orange on current route end ----






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
