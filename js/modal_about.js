let open1_modal = document.getElementById("modal_about");
let close1_modal = document.getElementById("modalnoye_okno1");
let modal1 = document.getElementById("shopwindow1");
let body1 = document.getElementsByTagName("body1")[0];
open1_modal.onclick = function () {
  modal1.classList.add("baekrana_kosmo1");
  modal1.classList.remove("bounceOutDown");
  body1.classList.add("mashtab-kuyetsya1");
};
close1_modal.onclick = function () {
  modal1.classList.add("bounceOutDown");
  window.setTimeout(function () {
    modal1.classList.remove("baekrana_kosmo1");
    body1.classList.remove("mashtab-kuyetsya1");
  }, 500);
};
