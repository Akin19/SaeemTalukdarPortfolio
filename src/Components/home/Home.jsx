import Data from "./Data";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import Socials from "./Socials";
// import AboutImg from "../../assets/about.jpg";
import AboutImg from "../../assets/SaeemTalukdar.jpg";
// import profileImg from "../../assets/profile.jpg";

const Home = () => {
  //   const style = {
  //     backgroundImage: `url(${profileImg})`,
  //   };
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home__content grid">
          <Socials />

          <div className="image-container">
            <img src={AboutImg} alt="About Img" className="about__img" />

            <ScrollDown />
          </div>

          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
