import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
function Single_service({ src, text }) {
  useEffect(() => {
    Aos.init({ durataion: 2000 });
  }, []);
  return (
    <div className="w-5">
      <div className="single-service">
        {/* <i>
            <FontAwesomeIcon icon={icon} />
          </i> */}
        <div className="service-img">
          <img src={src} alt="" className="img-fluid" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Single_service;
