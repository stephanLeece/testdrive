function showModal() {
    console.log("running modal");

    $("h1").on('click', function(){
        console.log("hi h1");
        $('#modal').css({
            "visibility":"visible"
        })
    })
}
showModal();
