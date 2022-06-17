function Rotator(start_from) {
  var phrases = [
    "Г-н Рахат Мирадов, ГД  Milli Osush",
    "Г-н Рахат Мирадов, ГД  Milli Osush",
    "Г-н Рахат Мирадов, ГД  Milli Osush",
  ];
  var total = phrases.length;
  var interval = 5000;
  if (void 0 === start_from) {
    start_from = 0;
  }

  $("#text")
    .text(phrases[start_from])
    .animate({ opacity: "1" }, 1000, function () {
      if (start_from >= total - 1) {
        setTimeout(function () {
          $("#text").animate({ opacity: "0" }, 1000, function () {
            Rotator();
          });
        }, interval);
      } else {
        start_from++;
        setTimeout(function () {
          $("#text").animate({ opacity: "0" }, 1000, function () {
            Rotator(start_from);
          });
        }, interval);
      }
    });
}
$(document).ready(function () {
  Rotator();
});
