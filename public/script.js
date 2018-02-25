// ---------------------------------- homepage functions -----------------

let backButton = $("#back-button")

backButton.on('click', () => {
  console.log('herstory: ', window.history)
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

$(window).on('load', () => {
  $('.eventsInfoBox').empty()
}

// swap out for ajax request to contentful or server route to populate with event deets
events = ['main1, main2, main3, main4']

$('li').on('click', e => {
  $('.eventsInfoBox').empty().append(`<p> ${$(e.target).attr('class')} </p>`)
});
