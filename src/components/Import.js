import React, { useEffect } from "react";
import Section_title from "./Section_title";
import imp1 from "../static/expertise-1.jpg";
import imp2 from "../static/expertise-2.jpg";
import imp3 from "../static/expertise-3.jpg";
import imp4 from "../static/expertise-4.jpg";
import imp5 from "../static/expertise-5.jpg";
import Single_expertise from "./Single_expertise";
import Aos from "aos";
import "aos/dist/aos.css";

const Import = () => {
    useEffect(() => {
        Aos.init({ durataion: 2000 });
      }, []);

  return (
    <>
         <section className="expertise" id="Expertise">
      <div className="container">
        <div className="expertise-title" data-aos="zoom-in-down">
          {/* <h2>what we Import?</h2> */}
        </div>
        <Section_title title={"what we Import?"} />
        <div className="expertise-gallary">
          <div className="row justify-content-center" style={{ paddingBottom:'80px'}} >
            <Single_expertise img={imp1} title={"home &kitchen wear"} animation={"fade-down-right"}/>
            <Single_expertise img={imp2} title={"garden accessories"} animation={"fade-down"}/>
            <Single_expertise img={imp3} title={"furnitures"} animation={"fade-down-left"}/>
            <Single_expertise img={imp4} title={"grament accessories"} animation={"fade-up-right"}/>
            <Single_expertise img={imp5} title={"home decor"} animation={"fade-up-left"}/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Import
