import React from "react";

const Footer = () => {

  const footerStyle = {
    backgroundImage: `url("assets/img/bg/footer_bg_1.png")`,
  };
  
  return (
    <footer className="footer-wrapper footer-layout1" style={footerStyle}>
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="ot-widget-about">
                  <div className="about-logo">
                    <a href="index.html">
                      <img src="assets/img/vc-logo.png" alt="Voyager Castle" />
                    </a>
                  </div>
                  <p className="about-text">
                    <h3>Let us make Your holiday trip memorable one.</h3>
                    You can plan with us any kind of trip you are searching for,
                    including family vacations, romantic getaways, unique
                    adventures, and special occasions.
                  </p>
                  <div className="ot-social">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="aboutus">About Us</a>
                    </li>
                    <li>
                      <a href="contactus">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Terms of use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Contact us</h3>
                <div className="menu-all-pages-container">
                  <div className="info-box">
                    <div className="info-box_icon">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <p className="info-box_text">Voyager Castle LLP,</p>
                    <p className="info-box_text"> 1<sup>st</sup> Floor, No. 396, NRI Layout, 11th Main, Kalkere,</p>
                    <p className="info-box_text"> Banglore - 566043, Karnataka | India</p>
                  </div>
                  <div className="info-box">
                    <div className="info-box_icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <p className="info-box_text">+(91) 9886502427</p>
                    <p className="info-box_text">+(91) 9073616126</p>
                  </div>
                  <div className="info-box">
                    <div className="info-box_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <p className="info-box_text">voyagercastle123@gmail.com</p>
                    <p className="info-box_text">sales@voyagercastle.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright"></i> 2024{" "}
                <a href="#">VoyagerCastle</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-end d-none d-lg-block">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Environmental Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
