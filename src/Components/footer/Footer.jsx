import "./footer.css";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Smith</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#testimonial" className="footer__link">
              Testimonial
            </a>
          </li>

          <li>
            <a href="" className="footer__link">
              About
            </a>
          </li>
        </ul>

        {/* Footer socials */}

        <div className="footer__social">
          <a
            href="https://github.com/Akin19/AnimatedPortfolio"
            className="footer__social-link"
            target="blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/Akin19/AnimatedPortfolio"
            className="footer__social-link"
            target="blank"
          >
            <CiFacebook />
          </a>
          <a
            href="https://github.com/Akin19/AnimatedPortfolio"
            className="footer__social-link"
            target="blank"
          >
            <i className="uil uil-twitter"></i>
          </a>
        </div>

        {/* All Rights Reserved */}

        <span className="footer__copy">&#169; Akin, All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
