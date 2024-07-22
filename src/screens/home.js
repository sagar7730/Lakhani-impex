import React from "react";
import Nav from "../components/Nav";
import "../assets/css/home.css";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Expertise from "../components/Expertise";
import Vision from "../components/Vision";
import Contact from "../components/Contact";
import Import from "../components/Import";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'

function home() {
  return (
    <>
      <Nav />
      <Banner />
      <About />
      <Services />
      <Expertise />
      <Import/>
      <Vision />
      <Contact />
    </>
  );
}

export default home;
