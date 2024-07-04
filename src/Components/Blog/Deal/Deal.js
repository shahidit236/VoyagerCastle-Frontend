import Slider from "react-slick";
import React, { useRef, useEffect, useState } from "react";

const Deal = () => {
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
    speed: 1000,
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

  const handlePreviousClick = () => {
    sliderRef.current.slickPrev(); // Move carousel to the previous slide
  };

  return (
    <section
      className="bg-dark2 bg-repeat overflow-hidden"
      style={{ backgroundImage: "url(assets/img/bg/pattern_bg_2.png)" }}
    >
      <div className="custom-row">
        <div
          className="offer-box space"
          style={{ backgroundImage: "url(assets/img/bg/pattern_bg_3.png)" }}
        >
          <img
            className="offer-img"
            src="assets/img/normal/offer_1.svg"
            alt="offer"
          />
          <ul
            className="countdown-list countdown-1"
            data-offer-date="12/08/2023"
          >
            <li>
              <div className="day count-number">00</div>
              <span className="count-name">Days</span>
            </li>
            <li>
              <div className="hour count-number">00</div>
              <span className="count-name">Hours</span>
            </li>
            <li>
              <div className="minute count-number">00</div>
              <span className="count-name">Minutes</span>
            </li>
            <li>
              <div className="seconds count-number">00</div>
              <span className="count-name">Seconds</span>
            </li>
          </ul>
        </div>
        <div className="deal-box">
          <div className="custom-container space-top">
            <div className="row text-center text-lg-start justify-content-lg-between justify-content-center align-items-end">
              <div className="col-lg-9 mb-n2 mb-lg-0">
                <div className="title-area">
                  <span className="sub-title text-white justify-content-center justify-content-lg-start">
                    <span className="shape bg-white left d-inline-block d-lg-none">
                      <span className="dots"></span>
                    </span>
                    Deals & Offers
                    <span className="shape bg-white right">
                      <span className="dots"></span>
                    </span>
                  </span>
                  <h2 className="sec-title text-white">
                    Last Minute Amazing Deals
                  </h2>
                </div>
              </div>
              <div className="col-auto">
                <div className="sec-btn">
                  <div className="icon-box style2">
                    <button
                      data-slick-prev="#dealSlide2"
                      className="slick-arrow default"
                      onClick={handlePreviousClick}
                    >
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button
                      data-slick-next="#dealSlide2"
                      className="slick-arrow default"
                      onClick={handleClick}
                    >
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area space-bottom">
            <div className="row" id="dealSlide2">
              <Slider ref={sliderRef} {...settings}>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tour-deal">
                    <div className="tour-deal__img">
                      <img
                        src="assets/img/trip/tour_3_1.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-deal__tag">40% Off</span>
                    </div>
                    <div className="tour-deal__content">
                      <h3 className="tour-deal__title box-title">
                        <a href="#">Nepal City</a>
                      </h3>
                      <span className="tour-deal__price">
                        <span className="price">₹250</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tour-deal">
                    <div className="tour-deal__img">
                      <img
                        src="assets/img/trip/tour_3_5.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-deal__tag">25% Off</span>
                    </div>
                    <div className="tour-deal__content">
                      <h3 className="tour-deal__title box-title">
                        <a href="#">China City</a>
                      </h3>
                      <span className="tour-deal__price">
                        <span className="price">₹250</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tour-deal">
                    <div className="tour-deal__img">
                      <img
                        src="assets/img/trip/tour_3_4.jpg"
                        alt="Tour Image"
                      />
                      <span className="tour-deal__tag">30% Off</span>
                    </div>
                    <div className="tour-deal__content">
                      <h3 className="tour-deal__title box-title">
                        <a href="#">Night City</a>
                      </h3>
                      <span className="tour-deal__price">
                        <span className="price">₹350</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
