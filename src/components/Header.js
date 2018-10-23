import React from "react";
import About from "./About";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <div className="header-outs">
        <Navigation />
        <div className="slider">
          <div className="callbacks_container">
            <ul className="rslides" id="slider4">
              <li>
                <div className="slider-img">
                  <div className="container">
                    <div className="slider-info">
                      <h4>I am Dheeraj Singh</h4>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="slider-img ">
                  <div className="container">
                    <div className="slider-info">
                      <h4>Am Web Designer</h4>
                      <p>My Passion</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Header;
