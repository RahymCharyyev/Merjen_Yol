$(window).on("load", function () {
  var $preloader = $("#preloader"),
    $icon_animate = $preloader.find(".icon_animate");
  $icon_animate.fadeOut();
  $preloader.delay(300).fadeOut("slow");
});
