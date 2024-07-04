import React from "react";
import Destinations from "./Destinations/Destinations";
import Deal from "./Deal/Deal";
import Tour from "./Tour/Tour";
import Footer from "./Footer/Footer";
import "./Styles/style.css";
import CategorySection from "./Categories/Categories";
import FeaturesSection from "./Feature/Feature";
import Slider from "./Slider/Slider";
import Header from "./Header/Header";
import About from "./About/About";
const Blog = () => {
  return (
    <>
      <Header />
      <Slider />
      {/* <About /> */}
      <CategorySection />
      <Destinations />
      <Deal />
      <Tour />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default Blog;
