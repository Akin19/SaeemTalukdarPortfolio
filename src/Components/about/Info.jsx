import { whyChoseMe, trustedBy } from "../../details";
const Info = () => {
  return (
    <div>
      <div className="about__info grid">
        {whyChoseMe.map((item, index) => {
          return (
            <div key={index} className="about__box">
              <i className={item.iconClass + " about__icon"}></i>
              <h3 className="about__title">{item.title}</h3>
              <span className="about__subtitle">{item.numbers}</span>
            </div>
          );
        })}

        {/*  */}
      </div>
      {/* <span className="subtitle">Trusted By</span>
      <div className="trusted__by">
        {trustedBy.map((item, index) => {
          return <h4 key={index}>{item}</h4>;
        })}
      </div> */}
      <div className="trusted__by__container">
        <span className="subtitle">Trusted By</span>
        <div className="trusted__by">
          <div className="marquee">
            {trustedBy.map((item, index) => (
              <h4 key={index}>{item}</h4>
            ))}
            {/* Duplicate items for continuous marquee effect */}
            {trustedBy.map((item, index) => (
              <h4 key={`duplicate-${index}`}>{item}</h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
