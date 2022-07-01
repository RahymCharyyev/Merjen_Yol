let open_header_modal = document.getElementById("modal_header");
let close_header_modal = document.getElementById("modal_header-text");
let modal_header = document.getElementById("modal_header-bg");
open_header_modal.onclick = function () {
  modal_header.classList.add("modal_header-display");
  modal_header.classList.remove("fadeOutRight");
};
close_header_modal.onclick = function () {
  modal_header.classList.add("fadeOutRight");
  window.setTimeout(function () {
    modal_header.classList.remove("modal_header-display");
  }, 500);
};

let open_about_modal = document.getElementById("modal_about");
let close_about_modal = document.getElementById("modal_about-text");
let modal_about = document.getElementById("modal_about-bg");
open_about_modal.onclick = function () {
  modal_about.classList.add("modal_about-display");
  modal_about.classList.remove("fadeOutRight");
};
close_about_modal.onclick = function () {
  modal_about.classList.add("fadeOutRight");
  window.setTimeout(function () {
    modal_about.classList.remove("modal_about-display");
  }, 500);
};

let open_import_modal = document.getElementById("modal_import");
let close_import_modal = document.getElementById("modal_import-text");
let modal_import = document.getElementById("modal_import-bg");
open_import_modal.onclick = function () {
  modal_import.classList.add("modal_import-display");
  modal_import.classList.remove("fadeOutRight");
};
close_import_modal.onclick = function () {
  modal_import.classList.add("fadeOutRight");
  window.setTimeout(function () {
    modal_import.classList.remove("modal_import-display");
  }, 500);
};
