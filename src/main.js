import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./assets/js/all.js";
import "./smooth-scroll.polyfills.min.js";

AOS.init();

SmoothScroll('a[href="*"]');

document.querySelectorAll("label[for=navListChecked]").forEach((item) => {
  item.addEventListener("click", function (e) {
    const navList = document.querySelector("#navList");
    navList.classList.add("duration-200");
  });
});

document.querySelectorAll(".link").forEach((item) => {
  item.addEventListener("click", function () {
    const checked = document.querySelector("#navListChecked");
    checked.checked = false;
  });
});
