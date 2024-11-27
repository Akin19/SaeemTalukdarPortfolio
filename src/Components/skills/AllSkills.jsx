import { skills } from "../../details.js";

const AllSkills = () => {
  return (
    <>
      {skills.map((skill, index) => (
        <div className="skills__content" key={index}>
          <div className="skills__box">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>

              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <p className="skills__level">{skill.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllSkills;
