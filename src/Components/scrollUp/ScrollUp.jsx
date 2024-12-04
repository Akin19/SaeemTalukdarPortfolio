import "./scrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollUp");
    if (this.scrollY >= 560) scrollUp.classList.add("show__scroll");
    else scrollUp.classList.remove("show__scroll");
  });
  return (
    <a href="#" className="scrollUp">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
