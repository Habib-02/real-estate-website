var header = document.querySelector("header");
var headerMobile = document.querySelector(".header-mobile");
var hamburgerIcon = document.querySelector(".btn-hamburger");
var closeIcon = document.querySelector(".nav-close");

hamburgerIcon.addEventListener("click", handleOpen);

function handleOpen() {
  header.classList.add("close");
  headerMobile.classList.add("show");
}

closeIcon.addEventListener("click", handleClose);

function handleClose() {
  header.classList.remove("close");
  headerMobile.classList.remove("show");
}
