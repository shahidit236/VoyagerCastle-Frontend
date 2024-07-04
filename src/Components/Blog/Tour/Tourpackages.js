import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Tourpackage from "../Data/tourpackages.json";
import { useLocation } from "react-router-dom";

const Tourpackages = () => {
  const [tours, setTours] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("Economy");
  const [queryparams, setQueryparams] = useState();
  const location = useLocation();

  useEffect(() => {
    // Extract the search parameter from the URL
    const searchParams = new URLSearchParams(location.search);
    const searchTermFromParams = searchParams.get("search");

    setQueryparams(searchTermFromParams);

    // Filter the tour data array to find the tour with the matching ID
    const selectedTour = Tourpackage.filter(
      (tour) => tour.id === searchTermFromParams
    );

    if (selectedTour.length > 0) {
      setTours(selectedTour);
    } else {
      console.log("Tour not found");
    }
  }, [location.search]);
  return (
    <>
      <Header />
      <div className="PackageButtonsContainer">
        <div className="PackageButtons">
          <button onClick={() => setSelectedPackage("Economy")}>
            Economy <br /> Packages
          </button>

          <button onClick={() => setSelectedPackage("Delight")}>
            Delight <br />
            Packages
          </button>

          <button onClick={() => setSelectedPackage("Luxury")}>
            Luxury <br />
            Packages
          </button>

          <button onClick={() => setSelectedPackage("Classic")}>
            Classic <br /> Packages
          </button>

          <button onClick={() => setSelectedPackage("Premium")}>
            Premium <br /> Packages
          </button>

          <button onClick={() => setSelectedPackage("Elite")}>
            Elite <br /> Packages
          </button>
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}
      <div
        className="row slide-shadow ot-carousel package_box"
        data-slide-show="4"
        data-lg-slide-show="3"
        data-md-slide-show="2"
        data-sm-slide-show="1"
      >
        {tours.map((tour) => (
          <div className="col-xl-3 col-lg-4 col-md-6" key={tour.id}>
            <div className="tour-card">
              <div className="tour-card__img">
                <img src={tour.image} alt="Tour Image" />
                <span className="tour-card__tag">
                  <i className="far fa-heart"></i>
                </span>
              </div>
              <div className="tour-card__content">
                <h3 className="tour-card__title">
                  <a href="#">{tour.title}</a>
                </h3>
                <div className="tour-meta">
                  <span>
                    <i className="fa-light fa-clock"></i> {tour.days} Days
                  </span>
                  <span>
                    <i className="fa-light fa-user-group"></i> {tour.groupSize}
                  </span>
                </div>
                <div className="tour-card__content2">
                  <a
                    href="https://www.google.com/maps"
                    className="tour-card__location"
                  >
                    <i className="fa-light fa-location-dot"></i>{" "}
                    {tour.locations}
                  </a>
                </div>
                <h3 className="tour-card__title">
                  <a href="#">{tour.description} </a>
                </h3>
                <div className="tour-button-box">
                  <div className="tour-economy-box">
                    <a href="Luxury" className="tour-economy-link">
                      {selectedPackage}
                    </a>
                  </div>
                  <div className="tour-couple-box package-couple-box">
                    <a href="Luxury" className="tour-couple-link">
                      {tour.targetAudience}
                    </a>
                  </div>
                </div>
                <div className="tour-card__bottom">
                  <a
                    href={`tourdetails?search=${queryparams}`}
                    className="ot-btn package-card_bottom"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    {tour.action}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tourpackages;
