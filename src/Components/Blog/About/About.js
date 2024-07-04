import React, { useState } from "react";
import Modal from "react-modal";

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="overflow-hidden bg-smoke space">
        <div className="container pt-5">
          <div className="row">
            <div className="col-xl-6 pe-xxl-5 text-center text-xl-start">
              <div className="title-area mb-35">
                <span className="sub-title justify-content-center justify-content-xl-start">
                  <span className="shape left d-inline-block d-xl-none">
                    <span className="dots"></span>
                  </span>
                  About Us
                  <span className="shape right">
                    <span className="dots"></span>
                  </span>
                </span>
                <h2 className="sec-title">A journey to cherish</h2>
              </div>
              <p className="mt-n2 mb-40">
                We believe strongly that the journey matters more than the
                destination and work towards providing a fresh experience for
                every programme we plan for our clients so as to provide them a
                rare and memorable travel experience.
              </p>
              <div className="counter-grid-wrap">
                <div className="counter-grid">
                  <h3 className="counter-grid_number">
                    <span className="counter-number">25</span>+
                  </h3>
                  <p className="counter-grid_text">Years Of Experiences</p>
                </div>
                <div className="counter-grid">
                  <h3 className="counter-grid_number">
                    <span className="counter-number">12</span>k+
                  </h3>
                  <p className="counter-grid_text">Successful Journey</p>
                </div>
                <div className="counter-grid">
                  <h3 className="counter-grid_number">
                    <span className="counter-number">56</span>+
                  </h3>
                  <p className="counter-grid_text">Awards Winning</p>
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
      </Modal>{" "}
    </>
  );
};

export default About;
