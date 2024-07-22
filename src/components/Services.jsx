import React, { useEffect } from "react";
import Section_title from "./Section_title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faList , faGlobeEurope, faTruckPickup,faWarehouse,faDolly} from "@fortawesome/free-solid-svg-icons";
import order from "../static/oredr booking.svg"
import product from "../static/product sourcing.svg"
import loading from "../static/loading of goods.svg"
import warehouse from "../static/warehousing.svg"
import logistic from "../static/logistics.svg"
import Single_service from "./Single_service";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({ durataion: 2000 });
  }, []);
  return (
    <section className="services" id="Services">
      <div className="container" style={{ paddingBottom:'80px'}}>
        <Section_title title={"our services"} />
        <div className="service-content">
          <div className="service-title" data-aos="zoom-in-up">
            <h3>why choose us?</h3>
          </div>
          <div className="services-details" >
            <div className="row justify-content-center" >
              <Single_service src={order} text={"order booking"}/>
              <Single_service src={product} text={"product sourcing"}/>
              <Single_service src={loading} text={"loading of goods"}/>
              <Single_service src={warehouse} text={"warehouse"}/>
              <Single_service src={logistic} text={"logistic"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
