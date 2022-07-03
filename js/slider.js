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
  setInterval(SliderTextRotator, 5300);
});
