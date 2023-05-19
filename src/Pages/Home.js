import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/Hero-Section/HeroSection";
import Company from "../Components/Company-Section/Company";
import AboutUs from "../Components/About-Us/AboutUs";
import Courses from "../Components/Courses-Section/Courses";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <AboutUs />
      <Courses />
    </Fragment>
  );
};

export default Home;
