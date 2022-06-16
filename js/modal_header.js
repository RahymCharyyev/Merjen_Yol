let open_modal = document.getElementById("modal_header");
let close_modal = document.getElementById("modalnoye_okno");
let modal = document.getElementById("shopwindow");
let body = document.getElementsByTagName("body")[0];
open_modal.onclick = function () {
  modal.classList.add("baekrana_kosmo");
  modal.classList.remove("bounceOutDown");
  body.classList.add("mashtab-kuyetsya");
};
close_modal.onclick = function () {
  modal.classList.add("bounceOutDown");
  window.setTimeout(function () {
    modal.classList.remove("baekrana_kosmo");
    body.classList.remove("mashtab-kuyetsya");
  }, 500);
};
