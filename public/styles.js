if (window.location.pathname == '/info') {
  $('body').css({
      'background': 'url(./assets/Elements/Info/Info-bgA.png) no-repeat center center fixed',
      'background-size' : '100vw 100vh',
    });

}
//
// if (window.location.pathname == '/catalogue') {
//   $('.cat').css({
//       color:orange;
//     });
//
// }
//
// $(function(){
//     // this will get the full URL at the address bar
//     var url = window.location.href;
//
//     // passes on every "a" tag
//     $("#sub-header a").each(function() {
//             // checks if its the same on the address bar
//         if(url == (this.href)) {
//             $(this).closest("li").addClass("active");
//         }
//     });
// });


// $(function() {
//   $('ul a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
// });

// 
// function getPageName(url) {
//     var index = url.lastIndexOf("/") + 1;
//     var filenameWithExtension = url.substr(index);
//     var filename = filenameWithExtension.split(".")[0]; // <-- added this line
//     return filename;                                    // <-- added this line
// }
//
// $(function(){
//    var currentPageName = getPageName(window.location.pathname);
//    $('#' + currentPageName).addClass('active');
// });
