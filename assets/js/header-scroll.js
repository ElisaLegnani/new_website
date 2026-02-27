document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const title = document.querySelector(".site-title");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      title.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      title.classList.remove("scrolled");
    }
  });
});