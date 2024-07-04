import Slider from "react-slick";
import React, { useRef, useEffect, useState } from "react";

const TopDestinationsSection = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: false, // Ensure horizontal movement
    rtl: false, // Ensure left to right movement
  };
  const handleClick = () => {
    sliderRef.current.slickNext(); // Move carousel to the previous slide
  };

  return (
    <section className="space" id="trip-sec">
      <div className="container" onClick={handleClick}>
        <div className="title-area text-center">
          <span className="sub-title justify-content-center">
            <span className="shape left">
              <span className="dots"></span>
            </span>
            Top Destinations
            <span className="shape right">
              <span className="dots"></span>
            </span>
          </span>
          <h2 className="sec-title">Top trending Destinations</h2>
        </div>

        <div
          className="row slider-shadow ot-carousel"
          data-slide-show="4"
          data-lg-slide-show="3"
          data-md-slide-show="2"
          data-xs-slide-show="1"
          data-arrows="true"
        >
          <Slider ref={sliderRef} {...settings}>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="trip-box">
                <div className="trip-box__img">
                  <img src="assets/img/trip/dest_1_1_1.jpeg" alt="Trip image" />
                </div>
                <div className="trip-box__content">
                  <h2 className="trip-box__title box-title">
                    <i className="fas fa-location-dot"></i>{" "}
                    <a href="#">Vietnam</a>
                  </h2>
                  <span className="trip-box__count">6+ Trips</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ">
              <div className="trip-box">
                <div className="trip-box__img">
                  <img src="assets/img/trip/dest_1_2_1.jpeg" alt="Trip image" />
                </div>
                <div className="trip-box__content">
                  <h2 className="trip-box__title box-title">
                    <i className="fas fa-location-dot"></i>{" "}
                    <a href="#">Andaman</a>
                  </h2>
                  <span className="trip-box__count">8+ Trips</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ">
              <div className="trip-box">
                <div className="trip-box__img">
                  <img src="assets/img/trip/dest_2_3_1.jpeg" alt="Trip image" />
                </div>
                <div className="trip-box__content">
                  <h2 className="trip-box__title box-title">
                    <i className="fas fa-location-dot"></i>{" "}
                    <a href="#">Dubai</a>
                  </h2>
                  <span className="trip-box__count">6+ Trips</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ">
              <div className="trip-box">
                <div className="trip-box__img">
                  <img src="assets/img/trip/dest_2_4_1.jpeg" alt="Trip image" />
                </div>
                <div className="trip-box__content">
                  <h2 className="trip-box__title box-title">
                    <i className="fas fa-location-dot"></i>{" "}
                    <a href="#">Italy</a>
                  </h2>
                  <span className="trip-box__count">5+ Trips</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ">
              <div className="trip-box">
                <div className="trip-box__img">
                  <img src="assets/img/trip/dest_2_5_1.jpeg" alt="Trip image" />
                </div>
                <div className="trip-box__content">
                  <h2 className="trip-box__title box-title">
                    <i className="fas fa-location-dot"></i>{" "}
                    <a href="#">Australia</a>
                  </h2>
                  <span className="trip-box__count">7+ Trips</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopDestinationsSection;
