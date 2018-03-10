// ---------------------------------- homepage functions -----------------

let backButton = $("#back-button");

backButton.on('click', () => {
    window.history.back();
});

function showModal() {
    console.log("running modal");

    $("#container").on('click', function() {
        console.log("hi h1");
        $('#modal').css({"visibility": "visible"});
    });
}

showModal();

function fadeIntoImg() {
    console.log("lag?");
    $('#halk').fadeOut(3000);
}
<<<<<<< HEAD
// function fadeIntoImg(body) {
//   console.log("lag?");
//   $('body').fadeOut(3000);
// }
//
// fadeIntoImg();
=======

fadeIntoImg();
>>>>>>> c34c6f85c739bf1e7f9db488d3dc5dd7d5a18da4

// ------------------------------- testdrive/events functions ------------------

// $(parentSelector).find(childSelector)
$('.eventsInfoBox').find('div').addClass('hidden');
$('li').on('click', e => {
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
