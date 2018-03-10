// ---------------------------------- homepage functions -----------------

let backButton = $("#back-button")

backButton.on('click', () => {
  window.history.back();
})

function showModal() {
  console.log("running modal");

  $("#gallery-space-img").on('click', function() {
    console.log("hi h1");
    $('#modal').css({"visibility": "visible"})
  })
}

showModal();

function fadeIntoImg() {
  console.log("lag?");
  $('#halk').fadeOut(3000);
}

fadeIntoImg();

// ------------------------------- testdrive/events functions ------------------

// $(parentSelector).find(childSelector)
$('.eventsInfoBox').find('div').addClass('hidden');
$('li').on('click', e => {
  let eventToShow = '.' + $(e.target).attr('class')
$('.eventsInfoBox').find('div').addClass('hidden');
$('.eventsInfoBox').find(`${eventToShow}`).removeClass('hidden');

});

// ------------------------------- video functions ----------

let video = $('.video')

function play() {
  video.play()
}

function pause() {
  video.pause()
}
