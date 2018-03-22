
// stops loading message apperaing.
$.mobile.loading().hide();

// ---------------------------------- homepage functions -----------------

let backButton = $("#backButton");
let swiped = false;
backButton.on('click', () => {
    window.history.back();
});

// SHOW MODAL -- WORKS FOR BOTH MOBILE AND DESKTOP
// $(".shadowfilter").on('click', function() {
//
//     if ($(window).width() < 600) {
//         showMobileModal();
//     } else {
//         showModal();
//     }
//
// });



// HIDE MODAL -- MOBILE & DESKTOP
// $("#modal").on('click', function() {
//     hideMobileModal();
// });

// ---- touch events. switch out the logs for your open and close modal code
  $("#gallery-space-img").on( 'swipe', function ( ) {
      showMobileModal();
    !swiped? console.log('open!!') : console.log('close!!');
    swiped = !swiped
  });


  // UP DOWN EXTENSION. POSSIBLY FUCKED
  // $(function () {
  //     // Bind the swipeHandler callback function to the swipe event on div.box
  //     $("div.box").on("swipe", swipeHandler);
  //
  //     // Callback function references the event target and adds the 'swipe' class to it
  //     function swipeHandler(event) {
  //         console.log("Swipe Start: " + event.swipestart.coords[0] + ", " + event.swipestart.coords[1]);
  //         console.log("Swipe Stop: " + event.swipestop.coords[0] + ", " + event.swipestop.coords[1]);
  //         var ydiff = event.swipestart.coords[1] - event.swipestop.coords[1];
  //         console.log("Y Diff: " + ydiff);
  //         if (ydiff < 0) {
  //             $(".result").html("Swipe Down.");
  //         } else {
  //             $(".result").html("Swipe Up.");
  //         }
  //     }
  // });

// FUNCTION TO SHOW MODAL ON HOME PAGE
// ~~~~~~~~ FULL-SCREEN - DESKTOP ~~~~~~~~
function showModal() {

    $("#gallery-space-img").on('click', function() {
        $('#modal').css({"visibility": "visible"});

    });
}


$(function () {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $("div.box").on("swipe", swipeHandler);

    // Callback function references the event target and adds the 'swipe' class to it
    function swipeHandler(event) {
        console.log("Swipe Start: " + event.swipestart.coords[0] + ", " + event.swipestart.coords[1]);
        console.log("Swipe Stop: " + event.swipestop.coords[0] + ", " + event.swipestop.coords[1]);
        var ydiff = event.swipestart.coords[1] - event.swipestop.coords[1];
        console.log("Y Diff: " + ydiff);
        if (ydiff < 0) {
            $(".result").html("Swipe Down.");
        } else {
            $(".result").html("Swipe Up.");
        }
    }
});


// SHOW / HIDE MODAL - MOBILE ONLY
function showMobileModal() {
    $('#modal').css({ "visibility": "visible" });
    $(".shadowfilter").removeAttr('id').addClass("clicked-gallery-img");
}

function hideMobileModal() {
    $('#modal').css({ "visibility": "hidden" });
    $(".shadowfilter").attr('id', "gallery-space-img").removeClass("clicked-gallery-img");
}




// FADE OUT HULK IMAGE & FADE IN HOME PAGE
// ~~~~~~~~ FULL-SCREEN & MOBILE ~~~~~~~~
function fadeIntoImg() {
    $('#halk').fadeOut(2000);

    // setTimeout(function() {
    $("#home-container").delay(1000).animate({ opacity: 1 }, 700);
    // }, 5000);
}
fadeIntoImg();




// HAMBURGER MENU FUNCTIONALITY
// ~~~~~~~~ MOBILE ~~~~~~~~
$(".burger").on("click", function() {

    $(".mob-container").show();

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

    // $("#home-container").css({
    //     "display": "none",
    //     "transition": "0s"
    // });

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
        "left": "100%"
    });

    $(".tdLogo").css({
        "visibility": "visible"
    });
    //
    // $("#home-container").css({
    //     "display": "block   ",
    //     "transition": "0s"
    // });

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
