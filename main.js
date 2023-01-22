//===================== Start Up Scroll===================================
let span = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 100) {
    span.classList.add("show");
  } else span.classList.remove("show");
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// --------------Start Responsive-navbar-active-animation------------------

// function test() {
//   var tabsNewAnim = $("#navbarSupportedContent");
//   var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
//   var activeItemNewAnim = tabsNewAnim.find(".active");
//   var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//   var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//   var itemPosNewAnimTop = activeItemNewAnim.position();
//   var itemPosNewAnimLeft = activeItemNewAnim.position();
//   $(".hori-selector").css({
//     top: itemPosNewAnimTop.top + "px",
//     left: itemPosNewAnimLeft.left + "px",
//     height: activeWidthNewAnimHeight + "px",
//     width: activeWidthNewAnimWidth + "px",
//   });
//   $("#navbarSupportedContent").on("click", "li", function (e) {
//     $("#navbarSupportedContent ul li").removeClass("active");
//     $(this).addClass("active");
//     var activeWidthNewAnimHeight = $(this).innerHeight();
//     var activeWidthNewAnimWidth = $(this).innerWidth();
//     var itemPosNewAnimTop = $(this).position();
//     var itemPosNewAnimLeft = $(this).position();
//     $(".hori-selector").css({
//       top: itemPosNewAnimTop.top + "px",
//       left: itemPosNewAnimLeft.left + "px",
//       height: activeWidthNewAnimHeight + "px",
//       width: activeWidthNewAnimWidth + "px",
//     });
//   });
// }
// $(document).ready(function () {
//   setTimeout(function () {
//     test();
//   });
// });
// $(window).on("resize", function () {
//   setTimeout(function () {
//     test();
//   }, 500);
// });
// $(".navbar-toggler").click(function () {
//   $(".navbar-collapse").slideToggle(300);
//   setTimeout(function () {
//     test();
//   });
// });

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});
// --------------End Responsive-navbar-active-animation------------------

// --------------ٍStart Random Background-animation------------------

let randomBackgrounImg = true;
let backgroundInterval;

let landingImg = document.querySelector(".home-page"),
  imgAll = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg"];
function randomizeImg() {
  if (randomBackgrounImg === true) {
    backgroundInterval = setInterval(() => {
      let randImg = Math.floor(Math.random() * imgAll.length);
      landingImg.style.backgroundImage = `url(./images/${imgAll[randImg]})`;
    }, 1500);
  }
}

randomizeImg();
// --------------ٍEnd Random Background-animation------------------

// --------------------ٍStart animation text-----------------------

var typed = new Typed(".typed2", {
  strings: [
    "خدمات التشطيبات المعماريه المتخصصه",
    "تصميم للشقق والفيلات والمحلات التجارية",
    "اتصل بنا المعاينات والمقايسات مجانا",
  ],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});
// --------------------ٍEnd animation text-----------------------

// --------------------ٍStart toggle side bar-----------------------
document.querySelector(".ahmed").onclick = function () {
  this.classList.toggle("nav-item");
};
//================================================================================
$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("animation");
    setTimeout(function () {
      $("." + selectedClass)
        .fadeIn()
        .addClass("animation");
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});
