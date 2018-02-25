let backButton = $("#back-button")

backButton.on('click', () => {
  console.log('herstory: ', window.history)
  window.history.back();
})

function showModal() {
    console.log("running modal");

    $("img").on('click', function(){
        console.log("hi h1");
        $('#modal').css({
            "visibility":"visible"
        })
    })
}
showModal();
