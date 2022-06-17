$(document).ready(function () {
  $("#modal_header").hover(
    function () {
      jQuery("#header__arrow").addClass("fix");
    },
    function () {
      jQuery("#header__arrow").removeClass("fix");
    }
  );
  $("#scroll__link").hover(
    function () {
      jQuery("#scroll__arrow").addClass("fix");
    },
    function () {
      jQuery("#scroll__arrow").removeClass("fix");
    }
  );
  $("#modal_about").hover(
    function () {
      jQuery("#about__arrow").addClass("fix");
    },
    function () {
      jQuery("#about__arrow").removeClass("fix");
    }
  );
  $("#modal_import").hover(
    function () {
      jQuery("#import__arrow").addClass("fix");
    },
    function () {
      jQuery("#import__arrow").removeClass("fix");
    }
  );
});
