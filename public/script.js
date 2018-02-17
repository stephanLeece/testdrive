console.log(window.location.pathname);


// if pathname matches testdrive/event or drivedrive/event, set modal to show on page load.

// same with /catalogue
var events = $('#events')
//
// events.on("click", showModal);

function showModal() {
    console.log("running showModal");

    var html = `
        <div id="intro">
            <div id="introoverlay">`

    $('#try').append(html);

    $(function openIntro() {
        $('#intro').slideDown('slow');
        $('#introoverlay').slideDown("fast");
    });
}
showModal();
