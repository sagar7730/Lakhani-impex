import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Single_vision({title,text,animation}) {
  useEffect(() => {
    Aos.init({ durataion: 2000 });
  }, []);
  return (
    <div className="col-lg-6 col-md-6">
      <div className="vision-title" data-aos={animation}>
        <h2>{title}</h2>
      </div>
      <div className="vision-text mb-lg-0" data-aos={animation}>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Single_vision;
