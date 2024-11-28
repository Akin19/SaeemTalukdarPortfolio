import { useState } from "react";
import "./Service.css";
import { services } from "../../details.js";
const Service = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle((prevToggle) => (prevToggle === index ? 0 : index));
  };
  console.log(services);
  return (
    <section className="service section" id="service">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <div key={index} className="services__content">
            <div>
              <i className="uil uil-edit   services__icon"></i>
              <h3 className="services__title">{service.title}</h3>
            </div>

            <span
              className="services__button"
              onClick={() => toggleTab(service.id)}
            >
              View More{" "}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggle === service.id
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">{service.title}</h3>
                <p className="services__modal-description">
                  {service.details[0].Description}
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      {service.details[0].features}
                    </p>
                  </li>
                  {/*  */}

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      {service.details[0].pricing}
                    </p>
                  </li>

                  {/*  */}

                  <li className="services__modal-button">
                    {service.title !== "Video Spokesperson Services" &&
                    service.title !== "Shopify Website Design" ? (
                      <a href="/" className="custom-button">
                        Book a Meeting
                      </a>
                    ) : service.title === "Shopify Website Design" ? (
                      <a href="/" className="custom-button">
                        Get the Website
                      </a>
                    ) : (
                      <a href="/" className="custom-button">
                        Get the Video
                      </a>
                    )}
                  </li>
                  {/*  */}

                  {/*  */}
                </ul>
              </div>
            </div>
          </div>
        ))}
        {/* Service Content 2 */}
      </div>
    </section>
  );
};

export default Service;
