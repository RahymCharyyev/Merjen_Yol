$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    jQuery("#header__nav-link1").addClass("fix");
    jQuery("#header__nav-link2").addClass("fix");
    jQuery("#header__nav-link3").addClass("fix");
    jQuery("#header__nav-link4").addClass("fix");
    jQuery("#header__nav-logo").addClass("fix");
    jQuery("#header__nav").addClass("fix");
    jQuery("#burger").addClass("fix");
    jQuery("#burger1").addClass("fix");
    jQuery("#burger2").addClass("fix");
  } else {
    jQuery("#header__nav-link1").removeClass("fix");
    jQuery("#header__nav-link2").removeClass("fix");
    jQuery("#header__nav-link3").removeClass("fix");
    jQuery("#header__nav-link4").removeClass("fix");
    jQuery("#header__nav-logo").removeClass("fix");
    jQuery("#header__nav").removeClass("fix");
    jQuery("#burger").removeClass("fix");
    jQuery("#burger1").removeClass("fix");
    jQuery("#burger2").removeClass("fix");
  }
});
