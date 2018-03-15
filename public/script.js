// ---------------------------------- homepage functions -----------------

let backButton = $("#backButton");

backButton.on('click', () => {
    window.history.back();
});

function showModal() {

    $("#gallery-space-img").on('click', function() {
        $('#modal').css({"visibility": "visible"});

    });
}

showModal();

function fadeIntoImg() {
    $('#halk').fadeOut(5000);

    // setTimeout(function() {
    $("#home-container").delay(1000).animate({ opacity: 1 }, 700);
    // }, 5000);
}

fadeIntoImg();


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
