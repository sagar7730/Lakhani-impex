import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Single_expertise({ img, title, animation }) {

  useEffect(() => {
    Aos.init({ durataion: 1000 });
  }, []);
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-expertise" data-aos={animation}>
        <div className="expertise-img">
          <img src={img} alt="" className="img-fluid" />
        </div>
        
        <div className="single-expertise-title">{title}</div>
      </div>
    </div>
  );
}

export default Single_expertise;
