// menu
var open = false;

$("#toggle").click(function (e) {
  e.preventDefault();
  if (!open) {
    showMenu();
  } else {
    hideMenu();
  }
});

$(".cont-navRight nav a").click(function () {
  hideMenu();
});

function hideMenu() {
  $(".cont-navRight nav").removeClass("menu-left-open");
  $(".big-div-push").removeClass("menu-push-right");
  open = false;
}

function showMenu() {
  $(".cont-navRight nav").addClass("menu-left-open");
  $(".big-div-push").addClass("menu-push-right");
  open = true;
}
$(document).on("click", function (e) {
  var container = $("#toggle");
  if (!$(e.target).closest(container).length) {
    hideMenu();
  }
});
// end menu
$(".index-first-section .carousel").flickity({
  pageDots: true,
  draggable: false,
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 60,
  },
});
$(".autoplay").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 1
        }
    }]
});
$('.second-slider-clent').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
});
// scroll
if ($(window).width() > 992) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".index-main-header .bg-light").addClass("new-header-background");
      $("header .navbar-brand img").attr(
        "src",
        "images/second-logo-scroll.svg"
      ); // second scroll logo
      $("header .lang-icon img").attr("src", "images/lang-scroll.svg"); // second scroll icon
      $("header .search-icon img").attr("src", "images/search-scroll.svg"); // second scroll icon
      $("header .header-right-menu-icon img").attr(
        "src",
        "images/menu-scroll.svg"
      ); // second scroll icon
    } else {
      $(".index-main-header .bg-light").removeClass("new-header-background");
      $("header .navbar-brand img").attr("src", "images/logo.svg");
      $("header .lang-icon img").attr("src", "images/lang-icon.svg"); // second scroll icon
      $("header .search-icon img").attr("src", "images/search-icon.svg"); // second scroll icon
      $("header .header-right-menu-icon img").attr(
        "src",
        "images/menu-icon.svg"
      ); // second scroll icon
    }
  });
}

// ifram index
$(document).on("click", ".js-videoPoster", function (ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest(".js-videoWrapper");
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find(".js-videoIframe");
  var src = $iframe.data("src");
  // hide poster
  $wrapper.addClass("videoWrapperActive");
  // add iframe src in, starting the video
  $iframe.attr("src", src);
}
// search
(function ($) {
  $("#search-button").on("click", function (e) {
    if ($("#search-input-container").hasClass("hdn")) {
      e.preventDefault();
      $("#search-input-container").removeClass("hdn");
      return false;
    }
  });

  $("#hide-search-input-container").on("click", function (e) {
    e.preventDefault();
    $("#search-input-container").addClass("hdn");
    return false;
  });
})(jQuery);
