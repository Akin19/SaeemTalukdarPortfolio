import Info from "../about/Info";
import AllSkills from "./AllSkills";
// import DigitalMarketing from "./DigitalMarketing";
// import SEO from "./SEO";
import "./Skill.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>

      <span className="section__subtitle">
        Where clients meet to Brand their presence
      </span>

      <div className="skills__container container grid">
        {/* <DigitalMarketing />

        <SEO /> */}
        <AllSkills />
      </div>

      <div className="container whyChoseMe">
        <h2 className="section__title mb">Why Chose ME?</h2>

        <Info />
      </div>
    </section>
  );
};

export default Skills;
