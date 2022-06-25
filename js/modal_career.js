let open2_modal = document.getElementById("modal_career");
let close2_modal = document.getElementById("modalnoye_okno2");
let modal2 = document.getElementById("shopwindow2");
let body2 = document.getElementsByTagName("body2")[0];
open2_modal.onclick = function () {
  modal2.classList.add("baekrana_kosmo2");
  modal2.classList.remove("bounceOutDown");
  body2.classList.add("mashtab-kuyetsya2");
};
close2_modal.onclick = function () {
  modal2.classList.add("bounceOutDown");
  window.setTimeout(function () {
    modal2.classList.remove("baekrana_kosmo2");
    body2.classList.remove("mashtab-kuyetsya2");
  }, 500);
};
