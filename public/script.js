// ---------------------------------- homepage functions -----------------

let backButton = $("#back-button");

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

// function fadeIntoImg(body) {
//   console.log("lag?");
//   $('body').fadeOut(3000);
// }
//
// fadeIntoImg();


fadeIntoImg();


// ------------------------------- testdrive/events functions ------------------

// $(parentSelector).find(childSelector)
$('.eventsInfoBox').find('div').addClass('hidden');
$('p').on('click', e => {
    let eventToShow = '.' + $(e.target).attr('class');
    $('.eventsInfoBox').find('div').addClass('hidden');
    $('.eventsInfoBox').find(`${eventToShow}`).removeClass('hidden');

});

// ------------------------------- video functions ----------

let video = $('.video');

function play() {
    video.play();
}

function pause() {
    video.pause();
}
