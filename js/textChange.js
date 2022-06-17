function openbox(id) {
  var all = document.querySelectorAll(
    "#box1, #box2, #box3, #box4, #box5, #box6"
  );
  for (var i = 0; i < all.length; i++) {
    if (all[i].id == id) {
      all[i].style.display = all[i].style.display == "none" ? "block" : "none";
    } else {
      all[i].style.display = "none";
    }
  }
}
