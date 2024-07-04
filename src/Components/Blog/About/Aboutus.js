import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Aboutus = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
    slidesToShow: isMobile ? 1 : 5,
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

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Header />
      {/* <!--==============================
    Breadcumb
============================== --> */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url("assets/img/outsource/about_main.jpg")`,
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
          </div>
        </div>
      </div>
      {/* <!--==============================
About Area  
==============================--> */}
      <div className="space">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="img-box1">
                <div className="img1">
                  <img src="assets/img/outsource/aboutus_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/outsource/aboutus_2.jpg" alt="About" />
                </div>
                <div className="shape1">
                  <img src="assets/img/normal/about_shape_1.svg" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 pe-xl-4">
              <div className="title-area mb-35">
                <span className="sub-title">
                  Get About Us
                  <span className="shape right">
                    <span className="dots"></span>
                  </span>
                </span>
                <h2 className="sec-title">
                  We Create Journeys Worth Taking For The Traveler
                </h2>
              </div>
              <p className="mt-n2 mb-35">
                Progressively impact multidisciplinary leadership skills via
                e-business leadership skills. Holisticly repurpose
                multifunctional data before turnkey information. Globally
                restore client-focused potentialities before scalable core
                competencies.
              </p>
              <div className="about-media-wrap">
                <div className="about-media">
                  <div className="about-media_icon">
                    <img src="assets/img/icon/about_media_1.svg" alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-media_title box-title">
                      24 Years Experience
                    </h3>
                    <p className="about-media_text">
                      Holisticly procrastinate real-time solutions for services.
                    </p>
                  </div>
                </div>
                <div className="about-media">
                  <div className="about-media_icon">
                    <img src="assets/img/icon/about_media_2.svg" alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="about-media_title box-title">
                      Best Travel Agents
                    </h3>
                    <p className="about-media_text">
                      Holisticly procrastinate real-time solutions for services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="btn-group">
                <a href="about.html" className="ot-btn">
                  Discover more
                </a>
                <div className="customer-avater-wrap">
                  <div className="customer-avater-group">
                    <div className="customer-avater">
                      <img
                        src="assets/img/normal/avater_1_1.jpg"
                        alt="avater"
                      />
                    </div>
                    <div className="customer-avater">
                      <img
                        src="assets/img/normal/avater_1_2.jpg"
                        alt="avater"
                      />
                    </div>
                    <div className="customer-avater">
                      <img
                        src="assets/img/normal/avater_1_3.jpg"
                        alt="avater"
                      />
                    </div>
                    <div className="customer-avater">
                      <img
                        src="assets/img/normal/avater_1_4.jpg"
                        alt="avater"
                      />
                    </div>
                  </div>
                  <p className="mb-0">
                    <span className="text-theme fs-md fw-bold">500k+</span>{" "}
                    Happy Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--==============================
About Area  
==============================--> */}
      <div className="overflow-hidden bg-smoke space">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pe-xxl-5 text-center text-xl-start">
              <div className="title-area mb-35">
                <span className="sub-title justify-content-center justify-content-xl-start">
                  <span className="shape left d-inline-block d-xl-none">
                    <span className="dots"></span>
                  </span>
                  Tour Percentage
                  <span className="shape right">
                    <span className="dots"></span>
                  </span>
                </span>
                <h2 className="sec-title">
                  The Perfect Travel Place For You & Your Family
                </h2>
              </div>
              <p className="mt-n2 mb-40">
                Progressively impact multidisciplinary leadership skills via
                e-business leadership skills. Holisticly repurpose
                multifunctional data before turnkey information. Globally
                restore client-focused potentialities before scalable core
                competencies.
              </p>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Countryside</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>
                    <div className="progress-value">85%</div>
                  </div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Vineyard</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>
                    <div className="progress-value">95%</div>
                  </div>
                </div>
              </div>
              <div className="skill-feature">
                <h3 className="skill-feature_title">Wine Tasting</h3>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "60%" }}>
                    <div className="progress-value">60%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-40 mt-xl-0">
              <div className="img-box2">
                <img src="assets/img/normal/about_2_1.jpg" alt="About" />

                <div className="ot-video" data-overlay="title" data-opacity="2">
                  <img src="assets/img/normal/about_2_2.jpg" alt="Video" />
                  <a
                    onClick={() => setModalOpen(true)}
                    href="#"
                    className="play-btn popup-video"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="shape1">
                  <img src="assets/img/normal/about_shape_2.svg" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        ariaHideApp={false} // Disable aria-hidden warning
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1000,
          },
        }}
        className="modal-content"
      >
        {/* Video Player */}
        <iframe
          className="modal-video"
          src="https://www.youtube.com/embed/3SsK-cxlj_w?si=JUH8y6ATBpd9LKOa&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        {/* Close Button */}
        <button onClick={closeModal} className="modal-close-btn">
          <i className="far fa-times"></i>
        </button>
      </Modal>

      {/* <!--==============================
Team Area  
==============================--> */}
      <section className="space" id="team-sec">
        <div className="container" onClick={handleClick}>
          <div className="title-area text-center">
            <span className="sub-title justify-content-center">
              <span className="shape left">
                <span className="dots"></span>
              </span>
              Travel exparts
              <span className="shape right">
                <span className="dots"></span>
              </span>
            </span>
            <h2 className="sec-title">Meet Our Expert Guide</h2>
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
              {/* <!-- Single Item --> */}
              <div className="col-md-6 col-lg-4 col-xl-3 ">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="assets/img/outsource/guide.jfif" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus"></i>
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Mishel Marsh</a>
                    </h3>
                    <span className="team-desig">Switzerland Guide</span>
                  </div>
                </div>
              </div>
              {/* <!-- Single Item --> */}
              <div className="col-md-6 col-lg-4 col-xl-3 ">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="assets/img/outsource/guide.jfif" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus"></i>
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Michel Richard</a>
                    </h3>
                    <span className="team-desig">Maldivs Guide</span>
                  </div>
                </div>
              </div>
              {/* <!-- Single Item --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="assets/img/outsource/guide.jfif" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus"></i>
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Famhida Ruko</a>
                    </h3>
                    <span className="team-desig">Iceland Guide</span>
                  </div>
                </div>
              </div>
              {/* <!-- Single Item --> */}
              <div className="col-md-6 col-lg-4 col-xl-3 ">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="assets/img/outsource/guide.jfif" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus"></i>
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Alex Anfantino</a>
                    </h3>
                    <span className="team-desig">Indonesia Guide</span>
                  </div>
                </div>
              </div>
              {/* <!-- Single Item --> */}
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="ot-team team-box">
                  <div className="team-img">
                    <img src="assets/img/outsource/guide.jfif" alt="Team" />
                    <div className="team-social">
                      <div className="play-btn">
                        <i className="far fa-plus"></i>
                      </div>
                      <div className="ot-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="box-title">
                      <a href="team-details.html">Joseph Carter</a>
                    </h3>
                    <span className="team-desig">Morokko Guide</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* <!--==============================
Video Area  
==============================--> */}
      <section
        className="bg-top-center bg-auto"
        data-bg-src="assets/img/bg/bg_map_1.png"
      >
        <div className="">
          <div className="container">
            <div className="title-area text-center">
              <span className="sub-title justify-content-center">
                <span className="shape left">
                  <span className="dots"></span>
                </span>
                Watch Our Story
                <span className="shape right">
                  <span className="dots"></span>
                </span>
              </span>
              <h2 className="sec-title">
                Unforgettable Travel Experiences Get Your Guide
              </h2>
              <div className="btn-group pb-3 mt-30 justify-content-center">
                <a href="contact.html" className="ot-btn">
                  Contact Us
                </a>
                <a href="contact.html" className="ot-btn style3">
                  Book Now
                </a>
              </div>
            </div>
            <div
              className="ot-video"
              data-overlay="title"
              data-opacity="5"
              data-pos-for=".testi-sec"
              data-sec-pos="bottom-half"
            >
              <img
                src="assets/img/outsource/aboutus_video_img.jpg"
                alt="Video"
              />
              <a
                onClick={() => setModalOpen(true)}
                href="#"
                className="play-btn style3 popup-video"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--==============================
	Subscribe Area
==============================--> */}
      <section
        className="newsletter_aboutus"
        data-pos-for=".footer-wrapper"
        data-sec-pos="bottom-half"
      >
        <div className="container">
          <div
            className="newsletter-wrap"
            data-bg-src="assets/img/bg/subscribe_bg_1.svg"
          >
            <h2 className="sec-title text-white mb-2">
              Get Special Offers And More From Travon
            </h2>
            <p className="text-white fs-md mb-4">
              Sign up now and get the best deals straight in your inbox!
            </p>
            <form className="newsletter-form">
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <i className="fal fa-envelope"></i>
              </div>
              <button type="submit" className="ot-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Aboutus;
