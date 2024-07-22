import React, { useEffect } from "react";
import Section_title from "./Section_title";
import imp1 from "../static/exportsimage1.jpg";
import imp2 from "../static/exportsimage2.jpg";
import imp3 from "../static/exportsimage3.jpg";
import imp4 from "../static/exportsimage4.jpg";
import imp5 from "../static/exportsimage5.jpg";
import Single_expertise from "./Single_expertise";
import Aos from "aos";
import "aos/dist/aos.css";

function Expertise() {
  useEffect(() => {
    Aos.init({ durataion: 2000 });
  }, []);
  return (
    <section className="expertise" id="Expertise">
      <div className="container">
        <div className="expertise-title" data-aos="zoom-in-down">
          {/* <h2>what we provide?</h2> */}
        </div>
        <Section_title title={"what we Export"} />
        <div className="expertise-gallary">
          <div className="row justify-content-center" style={{ paddingBottom:'80px'}} >
            <Single_expertise img={imp1} title={"fruits  & vegetables "} animation={"fade-down-right"}/>
            <Single_expertise img={imp2} title={"Wheat "} animation={"fade-down"}/>
            <Single_expertise img={imp3} title={"spices  "} animation={"fade-down-left"}/>
            <Single_expertise img={imp4} title={"Sweets and snacks"} animation={"fade-up-right"}/>
            <Single_expertise img={imp5} title={"Honey"} animation={"fade-up-left"}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
