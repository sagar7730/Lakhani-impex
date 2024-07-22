import React, { useEffect } from "react";
import Section_title from "./Section_title";
import Single_vision from "./Single_vision";
import Aos from "aos";
import "aos/dist/aos.css";
function Vision() {
  useEffect(() => {
    Aos.init({ durataion: 2000 });
  }, []);
  return (
    <section className="vision" id="Vision">
      <Section_title title={"vision & mission"} />
      <div className="container" style={{ paddingBottom:'80px'}} >
        <div className="vision-content">
          <div className="row">
            
            <Single_vision
              title={"vision"}
              text={
                "Our Vision Is To Achieve Sustainable Growth With A National And International Market Presence For All Our Services Offerings And Our Customers All Products Easily Provides Threw Our Company In Global Market."
              }
              animation={"fade-right"}
            />
             <Single_vision
              title={"mission"}
              text={
                "Our Mission Is To Provide A Superior Quality, Cost Effective End To End Export And Import Services Of All Your Requirements Products, Through Strong Customer Focus, Continues Improvements, Reliability And Trust Consistently Exceeding Our Customers Expectations."
              }
              animation={"fade-left"}
            /> 
             <div className="w-2">
                <div className="vision-title">
                    <h2>Goal</h2>
                </div>
                <div className="vision-text">
                    <p>Making A Unicorn Company With Global Market Customers.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
