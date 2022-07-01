let images = new Array(
  // "./img/header_img2.jpg",
  "./img/header_img1.jpg",
  "./img/header_img2.jpg",
  "./img/header_img3.jpg"
);
let nextImage = 0;
doSlideshow();
function doSlideshow() {
  if (nextImage >= images.length) {
    nextImage = 0;
  }
  $(".header")
    .css("background-image", 'url("' + images[nextImage++] + '")')
    .fadeIn(500, function () {
      setTimeout(doSlideshow, 4000);
    });
}

let sliderTextIndex = 1;
function SliderTextRotator() {
  $(".header__vert-link").hide();
  $(".header__vert-link" + sliderTextIndex).show();

  let sliderTextCount = 3;
  sliderTextIndex++;
  if (sliderTextIndex > sliderTextCount) {
    sliderTextIndex = 1;
  }
}

$(document).ready(function () {
  SliderTextRotator();
  setInterval(SliderTextRotator, 4000);
});
