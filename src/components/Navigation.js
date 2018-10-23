import React from "react";

const Navigation = () => {
  return (
    <div className="header-w3layouts">
      <div className="container">
        <div className="right-side">
          <p>
            <button id="trigger-overlay" type="button">
              <span className="fa fa-bars" aria-hidden="true" />
            </button>
          </p>
        </div>
        <div className="overlay overlay-hugeinc">
          <button type="button" className="overlay-close">
            Close
          </button>
          <nav>
            <ul>
              <li>
                <a href="#index.html" className="scroll">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#experience" className="scroll">
                  Qualification
                </a>
              </li>
              <li>
                <a href="#gallery" className="scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="scroll">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hedder-logo">
          <h1>
            <a href="index.html">Intro</a>
          </h1>
        </div>
      </div>
      <div className="clearfix"> </div>
    </div>
  );
};

export default Navigation;
