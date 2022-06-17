function TitleRotator(start_from) {
  var phrases = [
    "“Мы рады оставить отзыв к такой отличной компании”",
    "“Мы рады оставить отзыв к такой отличной компании”",
    "“Мы рады оставить отзыв к такой отличной компании”",
  ];
  var total = phrases.length;
  var interval = 5000;
  if (void 0 === start_from) {
    start_from = 0;
  }

  $("#title")
    .text(phrases[start_from])
    .animate({ opacity: "1" }, 1000, function () {
      if (start_from >= total - 1) {
        setTimeout(function () {
          $("#title").animate({ opacity: "0" }, 1000, function () {
            TitleRotator();
          });
        }, interval);
      } else {
        start_from++;
        setTimeout(function () {
          $("#title").animate({ opacity: "0" }, 1000, function () {
            TitleRotator(start_from);
          });
        }, interval);
      }
    });
}
$(document).ready(function () {
  TitleRotator();
});
