import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import b2 from "../static/banner.png";
import b1 from "../static/2.jpg";
import Slider from "./Slider";
import Aos from "aos";
import "aos/dist/aos.css";
function Banner() {
  useEffect(() => {
    Aos.init({ durataion: 1000 });
  }, []);
  return (
    // <section className="banner">
    //   <div className="container">
    //     <div className="banner-inner">
    //       <div className="banner-title">
    //         <h2>we are</h2>
    //         <h1>china goods importer</h1>
    //       </div>
    //       <div className="banner-link">
    //         <a href="http://wa.me/8758033626">
    //           <i>
    //             <FontAwesomeIcon icon={faWhatsapp} />
    //           </i>
    //         </a>
    //         <a href="/whatsapp">
    //           <i>
    //             <FontAwesomeIcon icon={faInstagram} />
    //           </i>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div> */}
        <div className="carousel-inner">
          {/* <Slider img={b2} text1={"we are"} text2={"china goods importer"} /> */}

          <div className="carousel-item active">
            <img src={b2} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <div className="banner-title">
                <h2>we are</h2>
                <h1>india goods exporter</h1>
                {/* <h1>china goods importer</h1> */}
              </div>
              <div className="banner-link">
                <a href="https://api.whatsapp.com/send?phone=919737149831">
                  <i>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </i>
                </a>
                <a href="https://www.instagram.com/lakhani_impex9737/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                  <i>
                    <FontAwesomeIcon icon={faInstagram} />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <Slider img={b1} text1={"we are"} text2={"china goods importer"} />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Banner;
