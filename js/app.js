// Init Scrollspy
$("body").scrollspy({ target: "#main-nav", offset: 200 });

// Smooth Scrolling

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});

//lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
