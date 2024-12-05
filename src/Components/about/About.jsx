import "./About.css";
// import AboutImg from "../../assets/about.jpg";
// import cv from "../../assets/John-Cv.pdf";
import Info from "./Info";
import Intro from "./Intro";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>

      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid ">
        {/* <img src={AboutImg} alt="About Img" className="about__img" /> */}
        <div className="home__img1"></div>

        <div className="about__data ">
          <h2 className="section__title">My Journey</h2>
          <Intro />
        </div>
      </div>

      {/* <div className="container whyChoseMe">
        <span className="section__subtitle">Why Chose ME?</span>
        {/* experience starts here 
        <Info />
      </div> */}
    </section>
  );
};

export default About;
