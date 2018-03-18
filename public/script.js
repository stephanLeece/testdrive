// ---------------------------------- homepage functions -----------------


var clicked;
$('.eventDetails p:nth-child(2)').on('click', function(e) {

let eventToShow = '.' + $(e.target).attr('class');
console.log('clicked', eventToShow );
    $('.eventsInfoBox').find('div').addClass('hidden');
    $('.eventsInfoBox').find(`${eventToShow}`).removeClass('hidden');
});



let backButton = $("#backButton");

backButton.on('click', () => {
    window.history.back();
});












// FUNCTION TO SHOW MODAL ON HOME PAGE
// ~~~~~~~~ FULL-SCREEN ~~~~~~~~
function showModal() {

    $("#gallery-space-img").on('click', function() {
        $('#modal').css({"visibility": "visible"});

    });
}

showModal();












// FADE OUT HULK IMAGE & FADE IN HOME PAGE
// ~~~~~~~~ FULL-SCREEN & MOBILE ~~~~~~~~
function fadeIntoImg() {
    $('#halk').fadeOut(5000);

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

























// ------------------------------- testdrive/events functions ------------------

// $(parentSelector).find(childSelector)
//
$('.eventsInfoBox').find('div').addClass('hidden');
$('p').on('click', e => {
    let eventToShow = '.' + $(e.target).attr('class');
    $('.eventsInfoBox').find('div').addClass('hidden');
    $('.eventsInfoBox').find(`${eventToShow}`).removeClass('hidden');

});

//trying to work this out
// $(document).ready(function(){
//     $("ddEventsList").trigger("click");
// });

// $( "p span" ).first().addClass( "highlight" );



// ------------------------------- video functions ----------

let video = $('video');

function play() {
    video.play();
}

function pause() {
    video.pause();
}
