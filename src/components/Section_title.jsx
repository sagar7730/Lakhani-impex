import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Section_title({ title }) {
  useEffect(() => {
    Aos.init({ durataion: 2000 });
  }, []);
  return (
    <div className="section-title " >
      <h2 className="outer-title" data-aos=""  >
        {title}
        <h2 className="inner-title" data-aos="">
          {title}
        </h2>
      </h2>
    </div>
  );
}

export default Section_title;
