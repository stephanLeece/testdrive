// ---------------------------------- homepage functions -----------------

let backButton = $("#back-button")

backButton.on('click', () => {
  console.log('herstory: ', window.history)
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
// function fadeIntoImg(body) {
//   console.log("lag?");
//   $('body').fadeOut(3000);
// }
//
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
