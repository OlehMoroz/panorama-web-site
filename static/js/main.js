"use strict";

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
    $("header").addClass("header-bg");
  } else {
    $("header").removeClass("header-bg");
  }
});
$(document).ready(function () {
  var banner = $("html");
  var imgs = $(".parallax__layer"); // /////////////////////////////////////////////////////////////

  function showAllObjects(object) {
    object.fadeIn(900);
  } // /////////////////////////////////////////////////////////////


  function moving(object, speed) {
    banner.on('mousemove', function (event) {
      var X = Math.floor((event.pageX / speed - 150) / 18) + "px";
      var Y = Math.floor((event.pageY / speed - 150) / 18) + "px";
      object.css('transform', 'translate(' + X + ' , ' + Y + ')');
    });
  } // /////////////////////////////////////////////////////////////


  function moveAll(object) {
    moving($(object[0]), 4);
    moving($(object[1]), 3);
    moving($(object[2]), 2);
    moving($(object[3]), 2);
    moving($(object[4]), 3);
    moving($(object[5]), 4);
    moving($(object[6]), 4);
    moving($(object[7]), 3);
    moving($(object[8]), 2);
    moving($(object[9]), 2);
    moving($(object[10]), 3);
    moving($(object[11]), 4);
    moving($(object[12]), 4);
    moving($(object[13]), 3);
    moving($(object[14]), 2);
    moving($(object[15]), 3);
    moving($(object[16]), 4);
    moving($(object[17]), 4);
    moving($(object[18]), 3);
    moving($(object[19]), 2);
    moving($(object[20]), 2);
    moving($(object[21]), 3);
    moving($(object[22]), 4);
  } // /////////////////////////////////////////////////////////////


  showAllObjects(imgs);
  moveAll(imgs); // /////////////////////////////////////////////////////////////
});
$(function readMoreButton() {
  $('#read-more').click(function () {
    $('.category-description').toggleClass('category-description-active');
    return false;
  });
});
$('.slide-items').slick({
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  slidesToShow: 3,
  slidesToScroll: 1
});