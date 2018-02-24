function showModal() {
    console.log("running modal");

    $("home-render-top").on('click', function(){
        console.log("hi h1");
        $('#modal').css({
            "visibility":"visible"
        })
    })
}
showModal();

function fadeIntoImg() {
    console.log("lag?");
$('#intro').fadeOut(5000);

}
// fadeIntoImg();
