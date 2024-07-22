import React, { useEffect } from "react";
import Section_title from "./Section_title";
import about_left from "../static/about.png";
import img1 from "../static/about-1.jpg";
import img2 from "../static/about-2.jpg";
import img3 from "../static/about-3.jpg";
import About_gallary from "./About_gallary";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ durataion: 2000 });
  }, []);
  return (
    <section className="about" id="About" >
      <Section_title title={"about us"}  />
      <div className="container"  >
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-left" data-aos="fade-right">
              <div className="about-left-image">
                <img src={about_left} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-right" data-aos="fade-left">
              <div className="about-heading">
                <h2>transport is defined as a movement</h2>
              </div>
              <div className="about-content">
                <p>
                "At Lakhani Impex, we epitomize excellence in the import-export industry. With a dedicated focus on facilitating seamless trade across borders, we offer comprehensive solutions tailored to our clients' diverse needs. From sourcing quality products to ensuring timely deliveries, we prioritize efficiency and reliability. Our commitment to innovation and customer satisfaction drives us to continuously evolve, providing unparalleled service and fostering lasting partnerships. Discover how we can elevate your global trade endeavors today."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-gallaries">
          <div className="row justify-content-center" style={{ paddingBottom:'80px'}}>
            <About_gallary img={img1} animation={"flip-right"} />
            <About_gallary img={img2} animation={"flip-up"} />
            <About_gallary img={img3} animation={"flip-left"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
