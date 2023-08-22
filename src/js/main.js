import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});

AOS.init();
