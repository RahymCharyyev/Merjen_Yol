$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    jQuery("#header__nav-link1").addClass("fix");
    jQuery("#header__nav-link2").addClass("fix");
    jQuery("#header__nav-link3").addClass("fix");
    jQuery("#header__nav-logo").addClass("fix");
    jQuery("#header__nav").addClass("fix");
    jQuery("#en").addClass("fix");
    jQuery("#ru").addClass("fix");
    jQuery("#tm").addClass("fix");
  } else {
    jQuery("#header__nav-link1").removeClass("fix");
    jQuery("#header__nav-link2").removeClass("fix");
    jQuery("#header__nav-link3").removeClass("fix");
    jQuery("#header__nav-logo").removeClass("fix");
    jQuery("#header__nav").removeClass("fix");
    jQuery("#en").removeClass("fix");
    jQuery("#ru").removeClass("fix");
    jQuery("#tm").removeClass("fix");
  }
});
