import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Context/firebase.config";
import { ToastContainer, toast } from "react-toastify";
const Contactus = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      // Add form data to Firestore collection
      const docRef = await addDoc(collection(db, "contact"), formData);
      toast.success("Form submitted successfully!");

      console.log("Document written with ID: ", docRef.id);

      // Clear the form fields if needed
      e.target.reset();
    } catch (error) {
      toast.error("Error submitting the form. Please try again later.");
      console.error("Error adding document: ", error);
    }
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
          backgroundImage: `url("assets/img/outsource/contact_main.jpg")`,
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Contact Us</h1>
          </div>
        </div>
      </div>
      {/* <!--==============================
Quote Area  
==============================--> */}
      <div className="space">
        <div className="container">
          <div className="row gy-40 contact-main">
            <div className="col-xl-5">
              <div className="contact-info-wrap">
                <h3 className="border-title2">Contact Info</h3>
                <div className="contact-info-box">
                  <div className="contact-info">
                    <h4 className="contact-info__title">Contact Number:</h4>
                    <div className="contact-info__icon">
                      <i className="fal fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span className="contact-info__text">
                        <a href="tel:+65485965789">+(91) 9886502427</a>
                        <a href="tel:+65485965789">+(91) 9073616126</a>
                      </span>
                    </div>
                  </div>
                  <div className="contact-info">
                    <h4 className="contact-info__title">Mail Address:</h4>
                    <div className="contact-info__icon bg-theme">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="media-body">
                      <span className="contact-info__text">
                        <a href="mailto:info@voyagercastle.com">
                        voyagercastle123@gmail.com
                        </a>
                        <a href="mailto:info.voyagercastle@gmail.com">
                        sales@voyagercastle.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="contact-info">
                    <h4 className="contact-info__title">Office Address:</h4>
                    <div className="contact-info__icon bg-title">
                      <i className="fal fa-location-dot"></i>
                    </div>
                    <div className="media-body">
                      <span className="contact-info__text">
                     Voyager Castle LLP, 1st Floor, No. 396, NRI Layout, 11th Main, Kalkere, Banglore - 566043, Karnataka | India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.3850293444387!2d77.68064392899767!3d13.029815442174819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae10e8e6402f2d%3A0x231639e6f733240b!2s11th%20A%20Main%20Rd%2C%20NRI%20Layout%2C%20Bengaluru%2C%20Karnataka%20560016!5e0!3m2!1sen!2sin!4v1709793951995!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--==============================
Contact Area  
==============================--> */}
      <div className="space-bottom">
        <div className="container">
          <form
            action="#"
            method="POST"
            className="contact-form ajax-contact"
            style={{
              backgroundImage: `url("assets/img/outsource/contact_bg.jpg")`,
            }}
            onSubmit={onSubmit}
          >
            <h3 className="form-title">Make An Appointment</h3>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control style3"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
                <i className="fal fa-user"></i>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control style3"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
                <i className="fal fa-envelope"></i>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="tel"
                  className="form-control style3"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                />
                <i className="fal fa-phone"></i>
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control style3"
                  name="subject"
                  id="subject"
                  placeholder="Queary Topic"
                />
                <i className="fal fa-file-invoice"></i>
              </div>
              <div className="form-group col-12">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="3"
                  className="form-control style3"
                  placeholder="Your Message"
                ></textarea>
                <i className="fal fa-pencil"></i>
              </div>
              <div className="form-btn col-12">
                <button className="ot-btn">Send Message Now</button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
          </form>
        </div>
      </div>
      {/* <!--==============================
	Subscribe Area
==============================--> */}
      <section
        className="newsletter_contact"
        data-pos-for=".footer-wrapper"
        data-sec-pos="bottom-half"
      >
        <div className="container">
          <div
            className="newsletter-wrap"
            data-bg-src="assets/img/bg/subscribe_bg_1.svg"
          >
            <h2 className="sec-title text-white mb-2">
              Get Special Offers And More From VoyagerCastle
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
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Contactus;
