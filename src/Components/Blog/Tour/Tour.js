import React from "react";

const Tour = () => {
  return (
    <section className="space tour-sec2" id="tour-sec">
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-lg-8 mb-n2 mb-lg-0">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title justify-content-center justify-content-lg-start">
                <span className="shape left d-inline-block d-lg-none">
                  <span className="dots"></span>
                </span>
                Featured tours
                <span className="shape right">
                  <span className="dots"></span>
                </span>
              </span>
              <h2 className="sec-title">Most Popular Tours</h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <a href="#" className="ot-btn">
                View All Tours
              </a>
            </div>
          </div>
        </div>
        <div
          className="row slide-shadow ot-carousel"
          data-slide-show="4"
          data-lg-slide-show="3"
          data-md-slide-show="2"
          data-sm-slide-show="1"
        >
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tour-card">
              <div className="tour-card__img">
                <img src="assets/img/trip/tour_11.jpg" alt="Tour Image" />
                <span className="tour-card__tag">
                  <i className="far fa-heart"></i>
                </span>
              </div>
              <div className="tour-card__content">
                <h3 className="tour-card__title">
                  <a href="#">Highlight of Central Vietnam 5 days </a>
                </h3>
                <div className="tour-meta">
                  <span>
                    <i className="fa-light fa-clock"></i> 10 Days
                  </span>
                  <span>
                    <i className="fa-light fa-user-group"></i> 50+
                  </span>
                </div>
                <div className="tour-card__content2">
                  <a
                    href="https://www.google.com/maps"
                    className="tour-card__location"
                  >
                    <i className="fa-light fa-location-dot"></i> Hue Imperial
                    City, Hoi An Town, Da Nang City, Ba Na Hills
                  </a>
                </div>
                <h3 className="tour-card__title">
                  <a href="#">
                    In 5 days, You can discover the Central of Vietnam include
                    Hue,Hoi An and Da Nang.{" "}
                  </a>
                </h3>
                <div className="tour-button-box">
                  <div className="tour-economy-box">
                    <a href="Luxury" className="tour-economy-link">
                      Economy
                    </a>
                  </div>
                  <div className="tour-couple-box">
                    <a href="Luxury" className="tour-couple-link">
                      Single
                    </a>
                  </div>
                </div>
                <div className="tour-card__bottom">
                  <span className="tour-card__price">
                    Starting From <span className="price">₹44509.00</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tour-card">
              <div className="tour-card__img">
                <img src="assets/img/trip/tour_12.jpg" alt="Tour Image" />
                <span className="tour-card__tag">
                  <i className="far fa-heart"></i>
                </span>
              </div>
              <div className="tour-card__content">
                <h3 className="tour-card__title">
                  <a href="#">Highlight of North Vietnam 5 days</a>
                </h3>
                <div className="tour-meta">
                  <span>
                    <i className="fa-light fa-clock"></i> 12 Days
                  </span>
                  <span>
                    <i className="fa-light fa-user-group"></i> 70+
                  </span>
                </div>
                <div className="tour-card__content2">
                  <a
                    href="https://www.google.com/maps"
                    className="tour-card__location"
                  >
                    <i className="fa-light fa-location-dot"></i> Hanoi, Ninh
                    Binh (Hoa Lu, Tam Coc, Mua Cave), Ha Long Bay
                  </a>
                </div>
                <h3 className="tour-card__title">
                  <a href="#">
                    In 5 days, you can discover all the most beautiful places in
                    the North of Vietnam.
                  </a>
                </h3>
                <div className="tour-button-box">
                  <div className="tour-economy-box">
                    <a href="Luxury" className="tour-economy-link">
                      Economy
                    </a>
                  </div>
                  <div className="tour-couple-box">
                    <a href="Luxury" className="tour-couple-link">
                      Family
                    </a>
                  </div>
                </div>
                <div className="tour-card__bottom">
                  <span className="tour-card__price">
                    Starting From <span className="price">₹51619.00</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tour-card">
              <div className="tour-card__img">
                <img src="assets/img/trip/tour_13.jpg" alt="Tour Image" />
                <span className="tour-card__tag">
                  <i className="far fa-heart"></i>
                </span>
              </div>
              <div className="tour-card__content">
                <h3 className="tour-card__title">
                  <a href="#">Highlight of North and South Vietnam 7 days</a>
                </h3>
                <div className="tour-meta">
                  <span>
                    <i className="fa-light fa-clock"></i> 07 Days
                  </span>
                  <span>
                    <i className="fa-light fa-user-group"></i> 52+
                  </span>
                </div>
                <div className="tour-card__content2">
                  <a
                    href="https://www.google.com/maps"
                    className="tour-card__location"
                  >
                    <i className="fa-light fa-location-dot"></i> Ninh Binh, Ha
                    Long Bay, HCMC, Cu Chi Tunnel, Mekong Delta
                  </a>
                </div>
                <h3 className="tour-card__title">
                  <a href="#">
                    In 7 days, you can discover the distinctive features and
                    differences in culture heritages.
                  </a>
                </h3>
                <div className="tour-button-box">
                  <div className="tour-economy-box">
                    <a href="Luxury" className="tour-economy-link">
                      Economy
                    </a>
                  </div>
                  <div className="tour-couple-box">
                    <a href="Luxury" className="tour-couple-link">
                      Couple
                    </a>
                  </div>
                </div>
                <div className="tour-card__bottom">
                  <span className="tour-card__price">
                    Starting From <span className="price">₹52289.00</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tour-card">
              <div className="tour-card__img">
                <img src="assets/img/trip/tour_14.jpg" alt="Tour Image" />
                <span className="tour-card__tag">
                  <i className="far fa-heart"></i>
                </span>
              </div>
              <div className="tour-card__content">
                <h3 className="tour-card__title">
                  <a href="#">Best of North Vietnam 7 days</a>
                </h3>
                <div className="tour-meta">
                  <span>
                    <i className="fa-light fa-clock"></i> 13 Days
                  </span>
                  <span>
                    <i className="fa-light fa-user-group"></i> 100+
                  </span>
                </div>
                <div className="tour-card__content2">
                  <a
                    href="https://www.google.com/maps"
                    className="tour-card__location"
                  >
                    <i className="fa-light fa-location-dot"></i> Hanoi, Ninh
                    Binh (Hoa Lu, Tam Coc, Mua cave), Ha Long Bay, Sapa
                  </a>
                </div>
                <h3 className="tour-card__title">
                  <a href="#">
                    In 7 days, you can discover all the most beautiful places in
                    the North of Vietnam landscapes.
                  </a>
                </h3>
                <div className="tour-button-box">
                  <div className="tour-economy-box">
                    <a href="Luxury" className="tour-economy-link">
                      Economy
                    </a>
                  </div>
                  <div className="tour-couple-box">
                    <a href="Luxury" className="tour-couple-link">
                      Honeymoon
                    </a>
                  </div>
                </div>
                <div className="tour-card__bottom">
                  <span className="tour-card__price">
                    Starting From <span className="price">₹54779.00</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
