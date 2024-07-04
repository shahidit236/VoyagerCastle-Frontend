import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Blog from "../Blog/Blog";
import Aboutus from "../Blog/About/Aboutus";
import CorporateTravel from "../Blog/pages/CorporateTravel";
import Contactus from "../Blog/pages/Contactus";
import Tourdetails from "../Blog/Tour/Tourdetails";
import Tourpackages from "../Blog/Tour/Tourpackages";
import Home from "../Dashboard/Home/Home";
import Login from "../Login/Login";
import { AuthProvider } from "../Context/AuthContext";
import ProtectedRoute from "../Context/Privateroute";
import Viewsliders from "../Dashboard/Slider/Viewsliders";
import AddSlider from "../Dashboard/Slider/Addslider";
import Updateslider from "../Dashboard/Slider/Updateslider";
import Viewcontacts from "../Dashboard/Contact/Viewcontacts";
import Adddestinations from "../Dashboard/Destinations/Adddestinations";
import Addtourdetails from "../Dashboard/Tour Details/Addtourdetails";
import Viewtourdetails from "../Dashboard/Tour Details/Viewtourdetails";
import Viewdestinations from "../Dashboard/Destinations/Viewdestinations";
import Updatedestinations from "../Dashboard/Destinations/Updatedestinations";
config.autoAddCss = false;

function Rootstack() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 seconds

    // Clear the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleCancelPreloader = () => {
    setIsLoading(false); // Close the preloader
  };

  return (
    <AuthProvider>
      <Router>
        {isLoading ? (
          <div className="preloader">
            <button
              className="ot-btn style3 preloaderCls"
              onClick={handleCancelPreloader}
            >
              Cancel Preloader{" "}
            </button>
            <div className="preloader-inner">
              <span className="loader"></span>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/tourpackages" element={<Tourpackages />} />
            <Route path="/corporate" element={<CorporateTravel />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/tourdetails" element={<Tourdetails />} />
            <Route path="/home" element={<ProtectedRoute element={<Home />} />}>
              <Route path="addslider" element={<AddSlider />} />
              <Route path="viewslider" element={<Viewsliders />} />
              <Route path="updateslider/:id" element={<Updateslider />} />
              <Route path="viewcontact" element={<Viewcontacts />} />
              <Route path="adddestinations" element={<Adddestinations />} />
              <Route path="viewdestinations" element={<Viewdestinations />} />
              <Route path="updatedestinations/:id" element={<Updatedestinations />} />
              <Route path="viewtourdetails" element={<Viewtourdetails />} />
              <Route path="addtourdetails" element={<Addtourdetails/>} />
            </Route>
          </Routes>
        )}
      </Router>
    </AuthProvider>
  );
}

export default Rootstack;
