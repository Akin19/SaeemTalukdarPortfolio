// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// swiper

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

const Intro = () => {
  return (
    <div>
      {/* <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="about__description">
            <p>
              Hello, I’m Saeem Talukdar—a passionate professional dedicated to
              empowering businesses with creative solutions and strategic
              guidance. My journey into marketing, design, and business
              management began with a simple desire: to help companies thrive in
              today’s competitive landscape.
            </p>
            <br />
            <p>
              Over the years, I’ve honed my skills in Social Media Marketing,
              crafting impactful campaigns that amplify brand presence. My
              expertise in Shopify Website design allows me to create
              high-converting e-commerce stores that drive real results. As a
              Business Management Consultant, I specialize in optimizing
              workflows, streamlining operations, and developing strategies that
              lead to sustainable growth.
            </p>
            <br />
            <p>
              Recognizing the power of storytelling, I also ventured into Video
              Spokesperson Services, creating compelling on-screen presentations
              that help brands connect with their audiences. My role as a
              Marketing Strategy Consultant enables me to combine creativity and
              data-driven insights to design campaigns that resonate and deliver
              measurable success.
            </p>
            <br />
            <p>
              This journey has been fueled by a commitment to learning,
              adapting, and delivering value to every client I work with. Today,
              I’m proud to help businesses turn their ideas into impactful
              realities, combining innovation with strategy to achieve tangible
              outcomes.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Let’s work together to create something remarkable!</h4>
        </SwiperSlide>
      </Swiper> */}
      <Swiper
        direction="vertical"
        slidesPerView="auto"
        freeMode={true}
        scrollbar={{ draggable: true }}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="about__description">
            <p>
              Hello, I’m Saeem Talukdar—a passionate professional dedicated to
              empowering businesses with creative solutions and strategic
              guidance. My journey into marketing, design, and business
              management began with a simple desire: to help companies thrive in
              today’s competitive landscape.
            </p>
            <br />
            <p>
              Over the years, I’ve honed my skills in Social Media Marketing,
              crafting impactful campaigns that amplify brand presence. My
              expertise in Shopify Website design allows me to create
              high-converting e-commerce stores that drive real results. As a
              Business Management Consultant, I specialize in optimizing
              workflows, streamlining operations, and developing strategies that
              lead to sustainable growth.
            </p>
            <br />
            <p>
              Recognizing the power of storytelling, I also ventured into Video
              Spokesperson Services, creating compelling on-screen presentations
              that help brands connect with their audiences. My role as a
              Marketing Strategy Consultant enables me to combine creativity and
              data-driven insights to design campaigns that resonate and deliver
              measurable success.
            </p>
            <br />
            <p>
              This journey has been fueled by a commitment to learning,
              adapting, and delivering value to every client I work with. Today,
              I’m proud to help businesses turn their ideas into impactful
              realities, combining innovation with strategy to achieve tangible
              outcomes.
              <br />
              <a href="">
                <span className="hookupLine">
                  Let’s work together to create something remarkable!
                </span>
              </a>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Intro;
