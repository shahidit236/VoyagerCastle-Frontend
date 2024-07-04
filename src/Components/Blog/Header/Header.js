import React, { useState, useRef } from "react";
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [paperexperienceBoxVisible, setexperiencePaperBoxVisible] =
    useState(false);
  const [paperdestinationBoxVisible, setdestinationPaperBoxVisible] =
    useState(false);
  const [isExperiencesSubMenuVisible, setExperiencesSubMenuVisibility] =
    useState(false);
  const [isDestinationsSubMenuVisible, setDestinationsSubMenuVisibility] =
    useState(false);
  const [isAsiaSubMenuVisible, setAsiaSubMenuVisibility] = useState(false);
  const [isEuropeSubMenuVisible, setEuropeSubMenuVisibility] = useState(false);
  const [isIndiaSubMenuVisible, setIndiaSubMenuVisibility] = useState(false);
  const [isOceniaSubMenuVisible, setOceniaSubMenuVisibility] = useState(false);
  const [isBeachSubMenuVisible, setBeachSubMenuVisibility] = useState(false);
  const [isCultureSubMenuVisible, setCultureSubMenuVisibility] =
    useState(false);
  const [isHoneymoonSubMenuVisible, setHoneymoonSubMenuVisibility] =
    useState(false);
  const paperBoxRef = useRef(null);
  const destinationpaperBoxRef = useRef(null);

  const toggleExperiencesSubMenuVisibility = () => {
    setExperiencesSubMenuVisibility(!isExperiencesSubMenuVisible);
  };

  const toggleDestinationsSubMenuVisibility = () => {
    setDestinationsSubMenuVisibility(!isDestinationsSubMenuVisible);
  };

  const toggleAsiaSubMenuVisibility = () => {
    setAsiaSubMenuVisibility(!isAsiaSubMenuVisible);
  };

  const toggleEuropeSubMenuVisibility = () => {
    setEuropeSubMenuVisibility(!isEuropeSubMenuVisible);
  };

  const toggleIndiaSubMenuVisibility = () => {
    setIndiaSubMenuVisibility(!isIndiaSubMenuVisible);
  };

  const toggleOceniaSubMenuVisibility = () => {
    setOceniaSubMenuVisibility(!isOceniaSubMenuVisible);
  };

  const toggleBeachSubMenuVisibility = () => {
    setBeachSubMenuVisibility(!isBeachSubMenuVisible);
  };

  const toggleCultureSubMenuVisibility = () => {
    setCultureSubMenuVisibility(!isCultureSubMenuVisible);
  };

  const toggleHoneymoonSubMenuVisibility = () => {
    setHoneymoonSubMenuVisibility(!isHoneymoonSubMenuVisible);
  };

  const toggledestinationPaperBoxVisibility = () => {
    setdestinationPaperBoxVisible(!paperdestinationBoxVisible);
    setexperiencePaperBoxVisible(false);
  };

  // Update the handledestinationPaperBoxLeave function
  const handledestinationPaperBoxLeave = (event) => {
    const isLeavingSidemenu =
      event.relatedTarget && event.relatedTarget.closest(".sidemenu-wrapper");
    const isLeavingOtherMenuItem =
      event.relatedTarget && event.relatedTarget.closest(".main-menu");

    if (!isLeavingSidemenu && !isLeavingOtherMenuItem) {
      setdestinationPaperBoxVisible(false);
    }
  };

  const toggleexperiencePaperBoxVisibility = () => {
    setexperiencePaperBoxVisible(!paperexperienceBoxVisible);
    setdestinationPaperBoxVisible(false);
  };

  // Update the handlePaperBoxLeave function
  const handlePaperBoxLeave = (event) => {
    const isLeavingMainContainer =
      !event.relatedTarget ||
      (!event.relatedTarget.closest(".main-container") &&
        !event.relatedTarget.closest(".paper-boxexperience"));

    if (isLeavingMainContainer) {
      setexperiencePaperBoxVisible(false);
    }
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearchBoxClick = (e) => {
    if (!e.target.tagName.toLowerCase().match(/input|textarea/)) {
      e.stopPropagation();
      closeSearch();
    }
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  const handleSideMenuToggle = (e) => {
    e.preventDefault();
    toggleSideMenu();
  };

  const isMobileView = window.innerWidth <= 1000;

  return (
    <>
      {/* Search menu code start */}
      <div
        className={`popup-search-box d-none d-lg-block ${
          isSearchOpen ? "show" : ""
        }`}
        onClick={handleSearchBoxClick}
      >
        <button className="searchClose" onClick={closeSearch}>
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
      {/* Search menu code end */}

      {/* Side menu desktop view start*/}
      <div
        className={`sidemenu-wrapper d-none d-lg-block ${
          isSideMenuOpen && !isMobileView ? "show" : ""
        }`}
      >
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls" onClick={closeSideMenu}>
            <i className="far fa-times"></i>
          </button>
          <div className="widget footer-widget">
            <div className="ot-widget-about">
              <div className="about-logo">
                <a href="/">
                  <img src="assets/img/vc-logo.png" alt="Voyage Castle" />
                </a>
              </div>
              <p className="about-text">
                <h3 style={{ color: "#fff" }}>
                  Let us make Your holiday trip memorable one.
                </h3>
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

          <div className="widget footer-widget">
            <h3 className="widget_title">Contact Us</h3>
            <div className="ot-widget-contact">
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <p className="info-box_text">Address:</p>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <p className="info-box_text">
                  <a href="tel:+11234567890" className="info-box_link">
                    +(91) xxx xxx xxxx
                  </a>
                  <a href="tel:+10987654321" className="info-box_link">
                    +(91) xxx xxx xxxx
                  </a>
                </p>
              </div>
              <div className="info-box">
                <div className="info-box_icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <p className="info-box_text">
                  <a
                    href="mailto:info@Voyager Castle.com"
                    className="info-box_link"
                  >
                    info@voyagercastle.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Side menu desktop view end */}

      {/* Side menu mobile view start */}
      <div
        className={`ot-menu-wrapper ${
          isSideMenuOpen && isMobileView ? "ot-body-visible" : ""
        }`}
      >
        <div className="ot-menu-area text-center">
          <button className="ot-menu-toggle" onClick={handleSideMenuToggle}>
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="/">
              <img src="assets/img/vc-logo.png" alt="Voyager Castle" />
            </a>
            <a
                    href="login"
                    class="ot-btn mobile-login"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Login
                  </a>
          </div>
          <div className="ot-mobile-menu">
            <ul>
              <li
                className={`menu-item-has-children ${
                  isDestinationsSubMenuVisible ? "ot-active" : ""
                }`}
              >
                <a href="#">
                  Destinations{" "}
                  <span
                    onClick={toggleDestinationsSubMenuVisibility}
                    className="ot-mean-expand"
                  >
                    {isDestinationsSubMenuVisible ? "-" : "+"}
                  </span>
                </a>
                <ul
                  className={`sub-menu ${
                    isDestinationsSubMenuVisible ? "ot-open" : ""
                  }`}
                  style={{
                    display: isDestinationsSubMenuVisible ? "block" : "none",
                  }}
                >
                  <li
                    className={`menu-item-has-children ${
                      isAsiaSubMenuVisible ? "ot-active" : ""
                    }`}
                  >
                    <a href="#">
                      Asia
                      <span
                        onClick={toggleAsiaSubMenuVisibility}
                        className="ot-mean-expand"
                      >
                        {isAsiaSubMenuVisible ? "-" : "+"}
                      </span>
                    </a>
                    <ul
                      className={`sub-menu ${
                        isAsiaSubMenuVisible ? "ot-open" : ""
                      }`}
                      style={{
                        display: isAsiaSubMenuVisible ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="#">Baku</a>
                      </li>
                      <li>
                        <a href="#">Bali</a>
                      </li>
                      <li>
                        <a href="#">Bhutan</a>
                      </li>
                      <li>
                        <a href="#">Dubai</a>
                      </li>
                      <li>
                        <a href="#">Singapore</a>
                      </li>
                      <li>
                        <a href="#">Sri Lanka</a>
                      </li>
                      <li>
                        <a href="vietnam">Thailand</a>
                      </li>
                      <li>
                        <a href="/tourpackages?search=DAT">Turkey</a>
                      </li>
                      <li>
                        <a href="/tourpackages?search=DAV">Vietnam</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`menu-item-has-children ${
                      isEuropeSubMenuVisible ? "ot-active" : ""
                    }`}
                  >
                    <a href="#">
                      Europe
                      <span
                        onClick={toggleEuropeSubMenuVisibility}
                        className="ot-mean-expand"
                      >
                        {isEuropeSubMenuVisible ? "-" : "+"}
                      </span>
                    </a>
                    <ul
                      className={`sub-menu ${
                        isEuropeSubMenuVisible ? "ot-open" : ""
                      }`}
                      style={{
                        display: isEuropeSubMenuVisible ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="#">Europe</a>
                      </li>
                      <li>
                        <a href="#">France</a>
                      </li>
                      <li>
                        <a href="#">Greece</a>
                      </li>
                      <li>
                        <a href="#">Italy</a>
                      </li>
                      <li>
                        <a href="#">Spain</a>
                      </li>
                      <li>
                        <a href="#">Switzerland</a>
                      </li>
                      <li>
                        <a href="#">United Kingdom</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`menu-item-has-children ${
                      isIndiaSubMenuVisible ? "ot-active" : ""
                    }`}
                  >
                    <a href="#">
                      India
                      <span
                        onClick={toggleIndiaSubMenuVisibility}
                        className="ot-mean-expand"
                      >
                        {isIndiaSubMenuVisible ? "-" : "+"}
                      </span>
                    </a>
                    <ul
                      className={`sub-menu ${
                        isIndiaSubMenuVisible ? "ot-open" : ""
                      }`}
                      style={{
                        display: isIndiaSubMenuVisible ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="andaman">Andaman</a>
                      </li>
                      <li>
                        <a href="#">Jammu & Kashmir</a>
                      </li>
                      <li>
                        <a href="#">Darjeeling</a>
                      </li>
                      <li>
                        <a href="#">Sikkim</a>
                      </li>
                      <li>
                        <a href="#">Karnataka</a>
                      </li>
                      <li>
                        <a href="#">Kerala</a>
                      </li>
                      <li>
                        <a href="#">Ladakh</a>
                      </li>
                      <li>
                        <a href="#">Uttar Pradesh</a>
                      </li>
                      <li>
                        <a href="#">Uttarakhand</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`menu-item-has-children ${
                      isOceniaSubMenuVisible ? "ot-active" : ""
                    }`}
                  >
                    <a href="#">
                      Oceania
                      <span
                        onClick={toggleOceniaSubMenuVisibility}
                        className="ot-mean-expand"
                      >
                        {isOceniaSubMenuVisible ? "-" : "+"}
                      </span>
                    </a>
                    <ul
                      className={`sub-menu ${
                        isOceniaSubMenuVisible ? "ot-open" : ""
                      }`}
                      style={{
                        display: isOceniaSubMenuVisible ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="#">Australia</a>
                      </li>
                      <li>
                        <a href="#">Newzealand</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item-has-children ${
                  isExperiencesSubMenuVisible ? "ot-active" : ""
                }`}
              >
                {" "}
                <a href="#">
                  Experiences
                  <span
                    onClick={toggleExperiencesSubMenuVisibility}
                    className="ot-mean-expand"
                  >
                    {isExperiencesSubMenuVisible ? "-" : "+"}
                  </span>
                </a>
                <ul
                  className={`sub-menu ${
                    isExperiencesSubMenuVisible ? "ot-open" : ""
                  }`}
                  style={{
                    display: isExperiencesSubMenuVisible ? "block" : "none",
                  }}
                >
                  <li
                    className={`menu-item-has-children ${
                      isBeachSubMenuVisible ? "ot-active" : ""
                    }`}
                  >
                    <a href="#">
                      Beach{" "}
                      <span
                        onClick={toggleBeachSubMenuVisibility}
                        className="ot-mean-expand"
                      >
                        {isBeachSubMenuVisible ? "-" : "+"}
                      </span>
                    </a>
                    <ul
                      className={`sub-menu ${
                        isBeachSubMenuVisible ? "ot-open" : ""
                      }`}
                      style={{
                        display: isBeachSubMenuVisible ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="#">Sri Lanka</a>
                      </li>
                      <li>
                        <a href="#">Thailand</a>
                      </li>
                      <li>
                        <a href="#">Bali</a>
                      </li>
                      <li>
                        <a href="vietnam">Vietnam</a>
                      </li>
                      <li>
                        <a href="#">Andaman</a>
                      </li>
                      <li>
                        <a href="#">Udupi</a>
                      </li>
                      <li>
                        <a href="#">Kovalam</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`menu-item-has-children ${
                      isCultureSubMenuVisible ? "ot-active" : ""
                    }`}
                  >
                    <a href="#">
                      Culture & Heritage{" "}
                      <span
                        onClick={toggleCultureSubMenuVisibility}
                        className="ot-mean-expand"
                      >
                        {isCultureSubMenuVisible ? "-" : "+"}
                      </span>
                    </a>
                    <ul
                      className={`sub-menu ${
                        isCultureSubMenuVisible ? "ot-open" : ""
                      }`}
                      style={{
                        display: isCultureSubMenuVisible ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="#">Vietnam & Cambodia</a>
                      </li>
                      <li>
                        <a href="#">Classic Vietnam</a>
                      </li>
                      <li>
                        <a href="#">Heritage Cities of Vietnam</a>
                      </li>
                      <li>
                        <a href="#">The Heritage Culture of Indonesia</a>
                      </li>
                      <li>
                        <a href="#">Indian Heritage Tour</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`menu-item-has-children ${
                      isHoneymoonSubMenuVisible ? "ot-active" : ""
                    }`}
                  >
                    <a href="#">
                      Honeymoon{" "}
                      <span
                        onClick={toggleHoneymoonSubMenuVisibility}
                        className="ot-mean-expand"
                      >
                        {isHoneymoonSubMenuVisible ? "-" : "+"}
                      </span>
                    </a>
                    <ul
                      className={`sub-menu ${
                        isHoneymoonSubMenuVisible ? "ot-open" : ""
                      }`}
                      style={{
                        display: isHoneymoonSubMenuVisible ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="#">Romantic Singapore & Bali</a>
                      </li>
                      <li>
                        <a href="#">Best of Krabi & Phuket</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Testimonials</a>
              </li>
              <li className="menu-item-has-children">
                <a href="corporate">Corporate Travel</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Hot Deals</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Side menu mobile view end */}

      <header className="ot-header header-layout2">
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img src="assets/img/vc-logo.png" alt="Voyager Castle" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <a
                          href="#"
                          onMouseEnter={toggledestinationPaperBoxVisibility}
                        >
                          Destinations
                        </a>
                        <div className="home-container">
                          <div
                            className="paper-boxdestination"
                            style={{
                              display: paperdestinationBoxVisible
                                ? "block"
                                : "none",
                            }}
                            ref={destinationpaperBoxRef}
                            onMouseLeave={handledestinationPaperBoxLeave}
                          >
                            <div className="destionations">
                              <div className="destination">
                                <h6>Asia</h6>
                                <ul className="destinationsubmenu">
                                  <li>
                                    <a href="#">Baku</a>
                                  </li>
                                  <li>
                                    <a href="#">Bali</a>
                                  </li>
                                  <li>
                                    <a href="#">Bhutan</a>
                                  </li>
                                  <li>
                                    <a href="#">Dubai</a>
                                  </li>
                                  <li>
                                    <a href="#">Singapore</a>
                                  </li>
                                  <li>
                                    <a href="#">Sri Lanka</a>
                                  </li>
                                  <li>
                                    <a href="tourpackages">Thailand</a>
                                  </li>
                                  <li>
                                    <a href="/tourpackages?search=DAT">
                                      Turkey
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/tourpackages?search=DAV">
                                      Vietnam
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="destination">
                                <h6>Europe</h6>
                                <ul className="destinationsubmenu">
                                  <li>
                                    <a href="#">Europe</a>
                                  </li>
                                  <li>
                                    <a href="#">France</a>
                                  </li>
                                  <li>
                                    <a href="#">Greece</a>
                                  </li>
                                  <li>
                                    <a href="#">Italy</a>
                                  </li>
                                  <li>
                                    <a href="#">Spain</a>
                                  </li>
                                  <li>
                                    <a href="#">Switzerland</a>
                                  </li>
                                  <li>
                                    <a href="#">United Kingdom</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="destination">
                                <h6>India</h6>
                                <ul className="destinationsubmenu">
                                  <li>
                                    <a href="andaman">Andaman</a>
                                  </li>
                                  <li>
                                    <a href="#">Jammu & Kashmir</a>
                                  </li>
                                  <li>
                                    <a href="#">Darjeeling</a>
                                  </li>
                                  <li>
                                    <a href="#">Sikkim</a>
                                  </li>
                                  <li>
                                    <a href="#">Karnataka</a>
                                  </li>
                                  <li>
                                    <a href="#">Kerala</a>
                                  </li>
                                  <li>
                                    <a href="#">Ladakh</a>
                                  </li>
                                  <li>
                                    <a href="#">Uttar Pradesh</a>
                                  </li>
                                  <li>
                                    <a href="#">Uttarakhand</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="destination">
                                <h6>Oceania</h6>
                                <ul className="destinationsubmenu">
                                  <li>
                                    <a href="#">Australia</a>
                                  </li>
                                  <li>
                                    <a href="#">New Zealand</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="menu-item-has-children">
                        <a
                          href="#"
                          onMouseEnter={toggleexperiencePaperBoxVisibility}
                        >
                          Experiences
                        </a>
                        <div className="main-container">
                          <div
                            className="paper-boxexperience"
                            style={{
                              display: paperexperienceBoxVisible
                                ? "block"
                                : "none",
                            }}
                            ref={paperBoxRef}
                            onMouseLeave={handlePaperBoxLeave}
                          >
                            <div className="experiences">
                              <div className="experience">
                                <h6>Beach</h6>
                                <ul className="experiencesubmenu">
                                  <li>
                                    <a href="#">Sri Lanka</a>
                                  </li>
                                  <li>
                                    <a href="#">Thailand</a>
                                  </li>
                                  <li>
                                    <a href="#">Bali</a>
                                  </li>
                                  <li>
                                    <a href="vietnam">Vietnam</a>
                                  </li>
                                  <li>
                                    <a href="#">Andaman</a>
                                  </li>
                                  <li>
                                    <a href="#">Udupi</a>
                                  </li>
                                  <li>
                                    <a href="#">Kovalam</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="experience">
                                <h6>Culture & heritage</h6>
                                <ul className="experiencesubmenu">
                                  <li>
                                    <a href="#">Vietnam & Cambodia</a>
                                  </li>
                                  <li>
                                    <a href="#">Classic Vietnam</a>
                                  </li>
                                  <li>
                                    <a href="#">Heritage Cities of Vietnam</a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      The Heritage Culture of Indonesia
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">Indian Heritage Tour</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="experience">
                                <h6>Honeymoon</h6>
                                <ul className="experiencesubmenu">
                                  <li>
                                    <a href="#">Romantic Singapore & Bali</a>
                                  </li>
                                  <li>
                                    <a href="#">Best of Krabi & Phuket</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Testimonials</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="corporate">Corporate Travel</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Hot Deals</a>
                      </li>
                      <li>
                        <a href="contactus">Talk to an expert</a>
                      </li>
                      <li></li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="ot-menu-toggle d-inline-block d-lg-none"
                    onClick={handleSideMenuToggle}
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <a href="login" className="icon-btn sideMenuToggler">
                      <i className="fas fa-user-tie"></i>
                    </a>
                    <a
                      href="#"
                      className="icon-btn sideMenuToggler"
                      onClick={handleSideMenuToggle}
                    >
                      <i className="fa-regular fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
