function ImageRotator(start_from) {
  var images = [
    "../../img/slider_thanks.png",
    "../../img/slider_thanks1.png",
    "../../img/slider_thanks2.png",
  ];
  var total = images.length;
  var interval = 5000;
  if (void 0 === start_from) {
    start_from = 0;
  }

  $(".imagerotator")
    .attr("src", images[start_from])
    .animate({ opacity: "1" }, 1000, function () {
      if (start_from >= total - 1) {
        setTimeout(function () {
          $(".imagerotator").animate({ opacity: "0.5" }, 1000, function () {
            ImageRotator();
          });
        }, interval);
      } else {
        start_from++;
        setTimeout(function () {
          $(".imagerotator").animate({ opacity: "0.5" }, 1000, function () {
            ImageRotator(start_from);
          });
        }, interval);
      }
    });
}
$(document).ready(function () {
  ImageRotator();
});
