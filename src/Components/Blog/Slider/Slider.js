import React, { useState, useEffect } from "react";
import SliderComponent from "react-slick";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Context/firebase.config";

const Slider = () => {
  const [startDate, setStartDate] = useState(null);
  const [sliders, setslider] = useState([]);



  useEffect(() => {
    handleGetslider();
  }, []);

  const handleGetslider = async () => {
    try {
      const usersCollection = await getDocs(collection(db, "slider"));
      const usersData = usersCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setslider(usersData);
    } catch (error) {
      console.error("Error fetching data: ", error);
      console.error("Error details:", error.message);
    }
  
  };

  const settings = {
    dots: false, // Disable navigation dots
    infinite: true, // Enable infinite loop
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll per action
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Autoplay interval in milliseconds
    fade: true, // Use fade effect for transitions
    arrows: false,
  };
  return (
    <>
      {/* <!--==============================
Hero Area //slider
==============================--> */}
      <div className="ot-hero-wrapper hero-1">
        <div className="hero-slider ot-carousel" data-fade="true">
          <SliderComponent {...settings}>
          {sliders.map((item) => (
            <div className="ot-hero-slide"  key={item.id}>
              <div
                className="ot-hero-bg"
                style={{
                  backgroundImage:
                    `url(${item.imageUrl})`,
                }}
              ></div>
              <div className="container z-index-common">
                <div className="hero-style1">
                  <span
                    className="sub-title hero-subtitle"
                    data-ani="slideinup"
                    data-ani-delay="0.1s"
                  >
                    {item.title}{" "}
                    <span className="shape right">
                      <span className="dots"></span>
                    </span>
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    {item.mainTitle}
                  </h1>
                  <p
                    className="hero-text"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    {item.description}
                  </p>
                  <a
                    href="about"
                    className="ot-btn"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
))}

          </SliderComponent>
        </div>
      </div>
      {/* <!--======== / Hero Section ========--> */}
      <div className="search-sec">
        <div className="container">
          <div className="search-box">
            <form action="mail.php" method="POST" className="tour-search">
              <div className="form-group">
                <input
                  type="text"
                  className="form-select"
                  placeholder="Leaving"
                ></input>
                <i className="fas fa-plane-departure"></i>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-select"
                  placeholder="Destination"
                ></input>

                <i className="fas fa-location-dot"></i>
              </div>
              <div className="form-group">
                <DatePicker
                  className="form-select"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select Date"
                  dateFormat="MM/dd/yyyy"
                />
                <i className="fas fa-calendar-days"></i>
              </div>
              <div className="form-group">
                <select
                  name="destination"
                  id="durationselect"
                  className="form-select"
                >
                  <option value="" disabled="disabled" selected="selected">
                    Duration
                  </option>
                  <option value="3 Days - 4 Nights">3 Days - 4 Nights</option>
                  <option value="4 Days - 5 Nights">4 Days - 5 Nights</option>
                  <option value="5 Days - 6 Nights">5 Days - 6 Nights</option>
                  <option value="6 Days - 7 Nights">6 Days - 7 Nights</option>
                </select>
                <i className="fas fa-clock"></i>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-select"
                  placeholder="Persons"
                ></input>
                <i className="fa-solid fa-user" aria-hidden="true"></i>
              </div>
              <div className="form-btn">
                <button className="ot-btn">Search</button>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Slider;


