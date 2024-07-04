import Slider from "react-slick";
import React, { useRef, useEffect, useState } from "react";

const CategorySection = () => {
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
    <>
      <section className="category-sec">
        <div onClick={handleClick} className="container">
          <div className="title-area text-center">
            <span className="sub-title justify-content-center">
              <span className="shape left">
                <span className="dots"></span>
              </span>
              Categories
              <span className="shape right">
                <span className="dots"></span>
              </span>
            </span>
            <h2 className="sec-title">Make your Holidays Exceptional</h2>
          </div>
          <div
            className="row slider-shadow ot-carousel"
            data-slide-show="6"
            data-ml-slide-show="5"
            data-lg-slide-show="4"
            data-md-slide-show="3"
            data-sm-slide-show="2"
            data-xs-slide-show="1"
            data-arrows="true"
          >
            <Slider
              ref={sliderRef}
              slidesToShow={isMobile ? 1 : 5}
              {...settings}
            >
              <div className="col-sm-6 col-xl-4">
                <div className="category-card">
                  <div className="category-card__img">
                    <img src="assets/img/outsource/cat_1.jpg" alt="Category" />
                  </div>
                  <div className="category-card__content">
                    <h3 className="category-card__title">
                      <a href="#">Religion</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="category-card">
                  <div className="category-card__img">
                    <img src="assets/img/outsource/cat_2.jpg" alt="Category" />
                  </div>
                  <div className="category-card__content">
                    <h3 className="category-card__title">
                      <a href="tour.html">Beach</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="category-card">
                  <div className="category-card__img">
                    <img src="assets/img/trip/cat_1_2_1.jpeg" alt="Category" />
                  </div>
                  <div className="category-card__content">
                    <h3 className="category-card__title">
                      <a href="#">Hill Station</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="category-card">
                  <div className="category-card__img">
                    <img src="assets/img/trip/cat_1_6_1.jpeg" alt="Category" />
                  </div>
                  <div className="category-card__content">
                    <h3 className="category-card__title">
                      <a href="#">Heritage</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4">
                <div className="category-card">
                  <div className="category-card__img">
                    <img src="assets/img/outsource/cat_4.jpg" alt="Category" />
                  </div>
                  <div className="category-card__content">
                    <h3 className="category-card__title">
                      <a href="#">Honeymoon</a>
                    </h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
