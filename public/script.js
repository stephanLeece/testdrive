
// ---------------------------------- homepage functions -----------------

let backButton = $("#backButton");
let swiped = false;
backButton.on('click', () => {
    window.history.back();
});

// SHOW MODAL ON HOVER -- DESKTOP ONLY
$("#modal").hover(function() {
    $('#modal').css({"opacity": "1"});
})

// HIDE MODAL ON HOVER -- DESKTOP ONLY
$("#modal").on('mouseleave', function() {
    hideMobileModal();
});




// SHOW MODAL -- WORKS FOR BOTH MOBILE AND DESKTOP
$(".shadowfilter").on('click', function() {

    if ($(window).width() < 700) {
        showMobileModal();
    } else {
        showModal();
    }

});


// FUNCTION TO SHOW MODAL ON HOME PAGE
// ~~~~~~~~ FULL-SCREEN - DESKTOP ~~~~~~~~
function showModal() {

    $("#gallery-space-img").on('click', function() {
        $('#modal').css({"visibility": "visible"});

    });
}


$(function() {
    $('#gallery-space-img').swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == "left") {
          showMobileModal();
        }
      },
       threshold: 20
    });

    $('#modal').swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == "right") {
          hideMobileModal();
        }
      },
       threshold:20
    });
  });


// SHOW / HIDE MODAL - MOBILE ONLY
function showMobileModal() {
    $('#modal').css({ "visibility": "visible" });
    $(".shadowfilter").removeAttr('id').addClass("clicked-gallery-img");
}

function hideMobileModal() {
    $('#modal').css({ "opacity": "0" });
    $(".shadowfilter").attr('id', "gallery-space-img").removeClass("clicked-gallery-img");
}




// FADE OUT HULK IMAGE & FADE IN HOME PAGE
// ~~~~~~~~ FULL-SCREEN & MOBILE ~~~~~~~~
function fadeIntoImg() {
    $('#halk').fadeOut(2000);
    $("#home-container").delay(1000).animate({ opacity: 1 }, 700);
}
fadeIntoImg();




// HAMBURGER MENU FUNCTIONALITY
// ~~~~~~~~ MOBILE ~~~~~~~~
$(".burger").on("click", function() {

    $(".mob-container").css({
        'display': 'flex',
    });

    $('#gallery-space-img').css({
        'display': 'none'
    })

    if (location.pathname == "/info") {

        $('body').css({
            'background': 'none'
        });

        $("#hide-for-mobile").css({
            "display": "none"
        });

        $(".mob-container").animate({ opacity: 1 }).css({
            "z-index": "0"
        });

    }

    $(".mob-container").animate({ opacity: 1 }).css({
        "left": "0px"
    });

    $(".tdLogo").css({
        "visibility": "hidden"
    });

    $('.burger').hide();

    $("body").css({
        "background-color": "white"
    });


});


// CLOSE THE MENU - MOBILE ONLY
$(".x").on('click', function() {

    if (location.pathname == "/info") {
        $('body').css({'background': 'url(./assets/Elements/Info/Info-bgA.png) no-repeat center center fixed', 'background-size': '100vw 100vh'});


        $("#hide-for-mobile").css({
            "display": "block"
        });

        $(".mob-container").animate({ opacity: 1 }).css({
            "z-index": "5000"
        });


    }

    $(".mob-container").css({
        'display': 'none'
    });

    $('#gallery-space-img').css({
        'display': 'block'
    })

    $(".tdLogo").css({
        "visibility": "visible"
    });


    $('.burger').show();

});




// ------------------------------- video functions ----------

let video = $('video');

function play() {
    video.play();
}

function pause() {
    video.pause();
}
