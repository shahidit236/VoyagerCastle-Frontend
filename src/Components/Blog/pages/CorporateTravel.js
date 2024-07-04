import Header from "../Header/Header";
import Slider from "react-slick";
import React, { useRef, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
const CorporateTravel = () => {
  const indiaSliderRef = useRef(null);
  const abroadSliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

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
    slidesToShow: isMobile ? 1 : 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: false, // Ensure horizontal movement
    rtl: false, // Ensure left to right movement
  };
  const handleIndiaClick = () => {
    // Only perform the action if it's not a mobile view
    if (!isMobile) {
      indiaSliderRef.current.slickNext();
    }
  };

  const handleAbroadClick = () => {
    // Only perform the action if it's not a mobile view
    if (!isMobile) {
      abroadSliderRef.current.slickNext();
    }
  };

  return (
    <>
      <Header />
      <div className="overflow-hidden bg-smoke space">
        <span
          className="sub-title hero-subtitle"
          data-ani="slideinup"
          data-ani-delay="0.1s"
          style={{ marginLeft: "40px" }}
        >
          Celebrate Success with your team today!{" "}
          <span className="shape right">
            <span className="dots"></span>
          </span>
        </span>
        {/* Content on left, image on right */}
        <div className="container pt-2 ">
          <div className="row">
            <div className="col-xl-6 pe-xxl-5 text-center text-xl-start">
              <div className="title-area mb-35">
                <h4 className="sec-title">
                  Celebrate Success with your team today!
                </h4>
              </div>
              <p className="mt-n2 mb-40">
                Drop your contact by clicking the Enquire Now button below and
                the Voyager Castle team will come back with the best travel
                options for you. Whether it's meetings, incentives, conferences,
                exhibitions, off-sites, we are here to ensure that you Celebrate
                Success with your team, while we handle everything else within
                India and around the World!
              </p>
              <div className="Corparatebuttons">
                <div className="Corparatebutton1">
                  <a
                    href="about"
                    className="ot-btn corporate-ot-btn"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Team Building Activities
                  </a>
                </div>
                <div>
                  <a
                    href="about"
                    class="ot-btn corporate-ot-btn"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Popular Destinations
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-40 mt-xl-0">
              <div className="img-box2">
                <div className="img1">
                  <img
                    src="assets/img/outsource/corporate-bookingpic.png"
                    alt="Carporate"
                  />
                </div>
              </div>
            </div>
            <div className="corparateheader2">
              <h4 className="sec-title">
                Incentive Corporate Tours for you and your team!
              </h4>
            </div>
            {/* ////////////////////////////////////////////////// */}
            <h5>Amazing India</h5>
            <section className="space corparatemain" id="trip-sec">
              <div className="container" onClick={handleIndiaClick}>
                <div
                  className="row slider-shadow ot-carousel"
                  data-slide-show="4"
                  data-lg-slide-show="3"
                  data-md-slide-show="2"
                  data-xs-slide-show="1"
                  data-arrows="true"
                >
                  <Slider ref={indiaSliderRef} {...settings}>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img src="assets/img/trip/Mysore.jpg" alt="Mysore" />
                          <div className="image-text">
                            <p>Mysore</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Sandalwood and rosewood artifacts, stone
                              sculptures, and exquisite silk sarees.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img
                            src="assets/img/trip/Bangalore.jpg"
                            alt="Bangalore"
                          />
                          <div className="image-text">
                            <p>Bangalore</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              The town is reputed as the Garden City of India.
                              pleasant climate over the year.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img
                            src="assets/img/trip/Mangalore.jpg"
                            alt="Trip image"
                          />
                          <div className="image-text">
                            <p>Mangalore</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Mangaluru, city, southwestern India. It is a port
                              on the Arabian Sea.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img src="assets/img/trip/Goa.jpg" alt="Trip image" />
                          <div className="image-text">
                            <p>Goa</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Goa is an amalgamation of Indian and Portuguese
                              culture.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img
                            src="assets/img/trip/Hyderabad.jpg"
                            alt="Trip image"
                          />
                          <div className="image-text">
                            <p>Hyderabad</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Hyderabad has a unique blend of modernity and
                              tradition.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img src="assets/img/trip/Munnar.jpg" alt="Munnar" />
                          <div className="image-text">
                            <p>Munnar</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              We at, Voyager Castle, handcraft our travel
                              packages with most remarkable locations.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img src="assets/img/trip/Ooty.jpg" alt="Ooty" />
                          <div className="image-text">
                            <p>Ooty</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Ooty is most famous for its tea plantations, the
                              Ooty Flower Festival,
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img src="assets/img/trip/Jaipur.jpg" alt="jaipur" />
                          <div className="image-text">
                            <p>Jaipur</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Renowned globally for its coloured gems.Lehariya
                              suits and sarees festivals.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img
                            src="assets/img/trip/Udaipur.jpg"
                            alt="Udaipur"
                          />
                          <div className="image-text">
                            <p>Udaipur</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              A city of grace, with beauty so rare, Udaipur, is
                              beyond compare.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img src="assets/img/trip/Agra.jpg" alt="Agra" />
                          <div className="image-text">
                            <p>Agra</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Agra is a city banks of the river Yamuna in the
                              northern state of Uttar Pradesh, India.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>
            {/* ////////////////////////////////////////////////////////// */}
            <div className="Abroadmain">
              <h5>Popular Worldwide Vacation Packages</h5>
            </div>
            <section className="space corparateabroad" id="trip-sec">
              <div className="container" onClick={handleAbroadClick}>
                <div
                  className="row slider-shadow ot-carousel"
                  data-slide-show="4"
                  data-lg-slide-show="3"
                  data-md-slide-show="2"
                  data-xs-slide-show="1"
                  data-arrows="true"
                >
                  <Slider ref={abroadSliderRef} {...settings}>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img
                            src="assets/img/trip/Vietnam.jpg"
                            alt="Vietnam"
                          />
                          <div className="image-text">
                            <p>Vietnam</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              We at, Voyager Castle, handcraft our travel
                              packages with most remarkable locations
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img
                            src="assets/img/trip/Thailand.jpg"
                            alt="Thailand"
                          />
                          <div className="image-text">
                            <p>Thailand</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              We at, Voyager Castle, handcraft our travel
                              packages with most remarkable locations
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img
                            src="assets/img/trip/Srilanka.jpg"
                            alt="Srilanka"
                          />
                          <div className="image-text">
                            <p>Srilanka</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Sri Lanka is blessed with breathtaking natural
                              beauty,
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img src="assets/img/trip/Dubai.jpg" alt="Dubai" />
                          <div className="image-text">
                            <p>Dubai</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Dubai is the chief port and commercial centre of
                              the United Arab Emirates.
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="trip-box corporate-trip-box">
                        <div
                          className="trip-box__img corporate_img"
                          onMouseEnter={() => handleHover(true)}
                          onMouseLeave={() => handleHover(false)}
                        >
                          <img
                            src="assets/img/trip/Cambodia.jpg"
                            alt="Cambodia"
                          />
                          <div className="image-text">
                            <p>Cambodia</p>
                          </div>
                          <div className="corporate-paper-box">
                            <p>
                              {" "}
                              Beautiful and sunny beaches, lush natural
                              attractions, delicious food .
                            </p>
                            <a href="#" className="link-btn">
                              View Tour{" "}
                              <i className="fas fa-arrow-up-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CorporateTravel;
