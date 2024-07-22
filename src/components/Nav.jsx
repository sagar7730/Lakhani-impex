import React from "react";
import logo from "../static/logo.svg";
import header_img from "../static/1140.png";
import Nav_Ullist from "./Nav_Ullist";

function Nav() {
  return (
    <>
      {/* <div className="header-img">
        <img src={header_img} alt="" />
      </div> */}
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand logo" href="/home">
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler border-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-white">&#9776;</span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end me-5"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li> */}
                <Nav_Ullist req={"/Home"} name={"Home"} />
                <Nav_Ullist req={"#About"} name={"About"} />
                <Nav_Ullist req={"#Services"} name={"Services"} />
                {/* <Nav_Ullist req={"#Expertise"} name={"Our Expertise"} /> */}
                <Nav_Ullist req={"#Vision"} name={"Vision & Mission"} />
                <Nav_Ullist req={"#Contact"} name={"Contact Us"} />
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Toggle static offcanvas
      </button> */}

      <div
        class="offcanvas offcanvas-end w-50 text-bg-dark"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">
            <a className="navbar-brand logo" href="/home">
              <img src={logo} alt="" />
            </a>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li> */}
            <Nav_Ullist req={"/Home"} name={"Home"} />
            <Nav_Ullist req={"#About"} name={"About"} />
            <Nav_Ullist req={"#Services"} name={"Services"} />
            <Nav_Ullist req={"#Expertise"} name={"Our Expertise"} />
            <Nav_Ullist req={"#Vision"} name={"Vision & Mission"} />
            <Nav_Ullist req={"#Contact"} name={"Contact Us"} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
