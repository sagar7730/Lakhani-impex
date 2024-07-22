import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [contact, setContact] = useState({
    name: "",
 
    subject: "",
    msg: "",
    user: "", // Assuming this is the user's mobile number
  });


  const handleForm = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://192.168.29.70:5050/email", contact);
      console.log("API Response:", response.data);
      // Reset the form after successful submission
      setContact({
        name: "",
      
        subject: "",
        msg: "",
        user: "",
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle error as needed
    }
  };

  return (
    <section className="contact" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="location" data-aos="flip-right" data-aos-duration="2000">
              <div className="location-title">
                <h2>our location</h2>
                <p>we are here for you</p>
              </div>
              <div className="address">
                <span>
                  <i>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </i>
                </span>
                <p>3RD FLOOR, OFFICE NO. 306, UNIQUE SQUARE, CAUSWAY DABHOLI LINK ROAD, SURAT, SURAT, GUJARAT, 395004
</p>
              </div>
              <div className="call">
                <span>
                  <i>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </i>
                </span>
                <span>
                  <p>+91 9737149831</p>
              
                </span>
              </div>
              <div className="website">
                <span>
                  <i>
                  <FontAwesomeIcon icon={faEnvelope} />

                  </i>  
                </span>
                <p>lakhaniimpex9737@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="contact-form" data-aos="flip-left" data-aos-duration="2000">
              <h2>get in touch</h2>
              <form onSubmit={handleSubmit}>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={contact.name}
                  onChange={handleForm}
                
                />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="email / mobile"
                  name="user"
                  value={contact.user}
                  onChange={handleForm}
                />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="subject"
                  value={contact.subject}
                  name="subject"
                  onChange={handleForm}
                />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Your message"
                  name="msg"
                  value={contact.msg}
                  onChange={handleForm}
                />
                <button type="submit">submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
