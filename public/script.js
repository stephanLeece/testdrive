// ---------------------------------- homepage functions -----------------

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

// swap out for ajax request to contentful or server route to populate with event deets
events = ['main1, main2, main3, main4']

$('li').on('click', e => {
  $('#eventFull')
    .empty()
    .append(`<p> ${$(e.target).attr('class')} </p>`)


});
