new Swiper(".swiper", {
  parallax: true,
  mousewheel: true,
  spaceBetween: 30,
  speed: 2000,
});

document.addEventListener("DOMContentLoaded", function (e) {
  document.querySelector(".play").addEventListener("click", (e) => {
    document.querySelector(".play").remove();
    document.querySelectorAll(".preloader__img").forEach((element) => {
      element.classList.add("preloader__img-active");
      element.addEventListener("transitionend", function (e) {
        document.querySelector(".preloader").classList.add("preloader-out");
      });
    });
    setTimeout(() => {
      document.querySelector(".preloader").remove();
    }, 7000);
  });
});
