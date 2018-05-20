// ---------------------------------- homepage functions -----------------

let backButton = $("#backButton");
let swiped = false;
backButton.on('click', () => {
    window.history.back();
});

// activate function sets for either desktop or mobile
if((window.innerHeight > window.innerWidth) && $(window).width() < 700) {
      mobileHomepageFunctions();
} else {
    desktopHomepageFunctions();
}

window.addEventListener("resize", function() {
  // fadeIntoImg();
  if((window.innerHeight > window.innerWidth) && $(window).width() < 700) {
        mobileHomepageFunctions();
  } else {
    $('#halk').hide();
    $('#halk-mobile').hide();
      hideMobileMenu()
      desktopHomepageFunctions();
  }
}, false);

function desktopHomepageFunctions() {
  $('#modal').css({'display': 'flex'});
  $('#modal').css({'opacity': '0'});
  $("#modal").hover(
    function() {$('#modal').css({'opacity': '1'})},
    function() {$('#modal').css({'opacity': '0'})}
  );

  $('#modal').on("click", function() {
    $('#modal').css({'opacity': '0'})
  });

  $('#gallery-space-img').on("click", function() {
    $('#modal').css({'opacity': '1'})
  });

  $('#bike').on("click", function() {
    $('#modal').css({'opacity': '1'})
  });

  $('#modal').on("click", function() {
    $('#modal').css({'opacity': '1'})
  });

};


function mobileHomepageFunctions() {
  $(function() {
    $('#gallery-space-img').swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == "left") {
          $('#modal').css({'display': 'flex'});
          $('#modal').css({'opacity': '1'});
        }
      },
      threshold: 20
    });

    $('#modal').swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == "right") {
          $('#modal').css({'display': 'none'});
        }
      },
      threshold:20
    });
  });
}

// Handles post from form
$('#c-form').submit(((e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (!email) {
        $('#error').css({ 'display': 'block' })
    }
    return fetch(`/new-contact`, {
        method: 'POST',
        headers,
        body: JSON.stringify({email}),
    }).then((res) => {
        if (res.status === 201) {
            alert('Thanks for subscribing!! ;)');
            $('#error').css({ 'display': 'none' });
            return;
        }
        $('#error').css({ 'display': 'block' })
    }).catch((err) => {
        $('#error').css({ 'display': 'block' })
    })
}))


// FADE OUT HULK IMAGE & FADE IN HOME PAGE
// ~~~~~~~~ FULL-SCREEN & MOBILE ~~~~~~~~
function fadeIntoImg() {
    $('#halk').fadeOut(4000);
    $('#halk-mobile').fadeOut(4000);
}
fadeIntoImg();



// HAMBURGER MENU FUNCTIONALITY
// ~~~~~~~~ MOBILE ~~~~~~~~
$(".burger").on("click", function() {
  $('body').addClass('fixedPagePosition');
    $(".mob-container").css({
        'display': 'flex',
    });

    $('#gallery-space-img').css({
        'display': 'none'
    })

    if (location.pathname == "/info") {
        $('body').css({
            'background': 'none'
        });
        $("#hide-for-mobile").css({
            "display": "none"
        });
        $(".mob-container").animate({ opacity: 1 }).css({
            "z-index": "0"
        });
    }
    $(".mob-container").animate({ opacity: 1 }).css({
        "left": "0px"
    });
    $(".tdLogo").css({
        "visibility": "hidden"
    });
    $("body").css({
        "background-color": "white"
    });
});

$(".x").on('click', function() {
  hideMobileMenu()
});


function hideMobileMenu() {
  $('body').removeClass('fixedPagePosition');
  if (location.pathname == "/info") {
    $('body').css(
      {'background': 'url(./assets/Elements/Info/Info-bgA.png) no-repeat center center fixed',
      'background-size': '100vw 100vh'
    });

    $("#hide-for-mobile").css({
      "display": "block"
    });

    $(".mob-container").animate({ opacity: 1 }).css({
      "z-index": "5000"
    });
  }

  $(".mob-container").css({
    'display': 'none'
  });

  $('#gallery-space-img').css({
    'display': 'block'
  })

  $(".tdLogo").css({
    "visibility": "visible"
  });
}



// ------------------------------- video functions ----------

let video = $('video');

function play() {
    video.play();
}

function pause() {
    video.pause();
}
