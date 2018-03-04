// ---------------------------------- homepage functions -----------------

let backButton = $("#back-button")

backButton.on('click', () => {
  window.history.back();
})

function showModal() {
  console.log("running modal");

  $("#home-render-top").on('click', function() {
    console.log("hi h1");
    $('#modal').css({"visibility": "visible"})
  })
}
showModal();

function fadeIntoImg() {
  console.log("lag?");
  $('#intro').fadeOut(5000);

}
// fadeIntoImg();

// ------------------------------- testdrive functions ------------------

// $(parentSelector).find(childSelector)

$('li').on('click', e => {
  let eventToShow = '.' + $(e.target).attr('class')
console.log(eventToShow);
$('.eventsInfoBox').find(`p`).addClass('hidden');
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
