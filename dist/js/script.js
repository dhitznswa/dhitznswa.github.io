// navbar scroll
window.onscroll = function () {
  const header = document.querySelector(".navbar");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-active");
  } else {
    header.classList.remove("nav-active");
  }
};
