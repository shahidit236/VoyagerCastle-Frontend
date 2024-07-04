import React, { useRef, useEffect, useState } from "react";
import "../Styles/style.css";
import { useAuth } from "../../Context/AuthContext";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import vclogo from "../images/vc-logo.png";
import user from "../images/user.jpg"
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const outlet = useOutlet();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
  // Create a ref for the XP menubar element
  const xpMenubarRef = useRef(null);

  const handleSidebarClose = () => {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("content").classList.remove("active");
    document.getElementById("sidebar").classList.remove("show-nav");
    document
      .getElementsByClassName("body-overlay")[0]
      .classList.remove("show-nav");
    setIsSidebarOpen(false); // Update state to close the sidebar
  };

  useEffect(() => {
    // Function to toggle classes when the XP menubar is clicked
    const handleClick = () => {
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("content").classList.toggle("active");
      document.getElementById("sidebar").classList.toggle("show-nav");
      document
        .getElementsByClassName("body-overlay")[0]
        .classList.toggle("show-nav");
      setIsSidebarOpen(!isSidebarOpen);
    };

    // Attach click event listener to XP menubar when the component mounts
    if (xpMenubarRef.current) {
      xpMenubarRef.current.addEventListener("click", handleClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (xpMenubarRef.current) {
        xpMenubarRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [isSidebarOpen]);

  const handleLogout = async () => {
    await logout(); // Call the logout function
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="wrapper">
      <div className="body-overlay"></div>

      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            <img src={vclogo} className="img-fluid" />
            <span>Voyager Castle</span>
            <span
              className={`material-icons cross-icon d-lg-none ${
                isSidebarOpen ? "visible" : "hidden"
              }`}
              onClick={handleSidebarClose}
            >
              close
            </span>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="/home" className="dashboard">
              <i className="material-icons">dashboard</i> <span>Dashboard</span>
            </a>
          </li>

          <li>
            <a href="/home/viewdestinations" className="dashboard">
              <i className="material-icons">location_on</i>{" "}
              <span>Destinations</span>
            </a>
          </li>
          <li>
            <a href="#" className="dashboard">
              <i className="material-icons">category</i>
              <span>Categories</span>
            </a>
          </li>
          <li>
            <a href="#" className="dashboard">
              <i className="material-icons">rate_review</i>
              <span>Bookings</span>
            </a>
          </li>

          <li>
            <a href="#" className="dashboard">
              <i className="material-icons">beach_access</i>
              <span>Packages</span>
            </a>
          </li>
          <li>
            <a href="/home/viewtourdetails" className="dashboard">
              <i className="material-icons">description</i>
              <span>Tour Details</span>
            </a>
          </li>
          <li>
            <a href="/home/viewslider" className="dashboard">
              <i className="material-icons">tune</i>
              <span>Slider</span>
            </a>
          </li>
          <li>
            <a href="/home/viewcontact" className="dashboard">
              <i className="material-icons">mail</i>
              <span>Contacts</span>
            </a>
          </li>
          <li>
            <a href="#" className="dashboard">
              <i className="material-icons">loyalty</i>
              <span>Hot Deals</span>
            </a>
          </li>
        </ul>
      </nav>

      <div id="content">
        <div className="top-navbar">
          <div className="xp-topbar">
            <div className="row">
              <div className="col-2 col-md-1 col-lg-1 order-2 order-md-1 align-self-center">
                <div className="xp-menubar" ref={xpMenubarRef}>
                  <span className="material-icons text-white">
                    signal_cellular_alt
                  </span>
                </div>
              </div>

              <div className="col-md-5 col-lg-3 order-3 order-md-2">
                <div className="xp-searchbar">
                  <form>
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button className="btn" type="submit" id="button-addon2">
                        GO
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-10 col-md-6 col-lg-8 order-1 order-md-3">
                <div className="xp-profilebar text-end">
                  <nav className="navbar p-0">
                    <ul className="nav navbar-nav flex-row ms-auto">
                      <li className="dropdown nav-item active">
                        <a href="#" className="nav-link" data-bs-toggle="dropdown">
                          <span className="material-icons">notifications</span>
                          <span className="notification">4</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a href="#">You have 5 new messages</a>
                          </li>
                          <li>
                            <a href="#">You're now friend with Mike</a>
                          </li>
                          <li>
                            <a href="#">Wish Mary on her birthday!</a>
                          </li>
                          <li>
                            <a href="#">5 warnings in Server Console</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="material-icons">question_answer</span>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="#" data-bs-toggle="dropdown">
                          <img
                            src={user}
                            alt="user"
                            style={{ width: "40px", borderRadius: "50%" }}
                          />
                          <span className="xp-user-live"></span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end small-menu">
                          <li>
                            <a href="#">
                              <span className="material-icons">
                                person_outline{" "}
                              </span>
                              Profile
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="material-icons"> settings </span>
                              Settings
                            </a>
                          </li>
                          <li>
                            <a href="" onClick={handleLogout}>
                              <span className="material-icons"> logout</span>Logout
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="xp-breadcrumbbar text-center">
            <h4 className="page-title">Voyager Castle</h4>
          </div>
        </div>

        <div className="main-content">
          <div className="row">
            <div className="col-md-12">
            {outlet === null && (
          <div className="text-center my-1">
          <img src="https://e0.pxfuel.com/wallpapers/66/158/desktop-wallpaper-tips-for-planning-a-tour-afrah-travel-agency-in-kuwait.jpg" alt="Tour Image" className="img-fluid" />
        </div>
        )}
              <Outlet />
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <div className="footer-in">
              <p class="mb-0">
                Copyright <i className="fal fa-copyright"></i> 2024 Voyager
                Castle - All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
