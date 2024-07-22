import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Slider({ img, text1, text2 }) {
  return (
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..." />
      <div className="carousel-caption">
        <div className="banner-title">
          <h2>{text1}</h2>
          <h1>{text2}</h1>
        </div>
        <div className="banner-link">
          <a
            href="http://wa.me/8758033626"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={faWhatsapp} />
            </i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
