import Info from "../about/Info";
import AllSkills from "./AllSkills";
// import DigitalMarketing from "./DigitalMarketing";
// import SEO from "./SEO";
import "./Skill.css";

const Skills = () => {
  return (
    <section className="skills section" id="skill">
      <h2 className="section__title">Skills</h2>

      <span className="section__subtitle">My Thechnical Level</span>

      <div className="skills__container container grid">
        {/* <DigitalMarketing />

        <SEO /> */}
        <AllSkills />
      </div>

      <div className="container whyChoseMe">
        <span className="section__subtitle">Why Chose ME?</span>

        <Info />
      </div>
    </section>
  );
};

export default Skills;
