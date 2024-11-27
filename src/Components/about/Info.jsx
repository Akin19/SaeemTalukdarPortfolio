const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bxs-badge-check about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>
      {/*  */}

      <div className="about__box">
        <i className="bx bxs-briefcase about__icon"></i>
        <h3 className="about__title">Complete</h3>
        <span className="about__subtitle">48+ Projects</span>
      </div>

      {/*  */}

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
