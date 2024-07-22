import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About_gallary({ img, animation }) {
  useEffect(() => {
    Aos.init({ durataion: 2000 });
  }, []);
  return (
    <div className="col-lg-4 col-md-6">
      <div className="about-img my-2" data-aos={animation}>
        <img src={img} alt="" className="img-fluid" style={{ width: "400px", height: "300px" }} />
      </div>
    </div>
  );
}

export default About_gallary;
