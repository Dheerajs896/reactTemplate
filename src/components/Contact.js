import React from "react";
import Footer from "./Footer";

const Navigation = () => {
  return (
    <div>
      <div className="contact" id="contact">
        <div className="container">
          <h3 className="title">Contact</h3>
          <div className="contact-us">
            <form action="#" method="post">
              <div className="col-md-6 col-sm-6 col-xs-6 styled-input">
                <input type="text" name="Name" placeholder="Name" required="" />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 styled-input">
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  required=""
                />
              </div>

              <div className="col-md-6 col-sm-6 col-xs-6 styled-input">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  required=""
                />
              </div>

              <div className="col-md-6 col-sm-6 col-xs-6 styled-input">
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  required=""
                />
              </div>
              <div className="clearfix"> </div>
              <div className="styled-input">
                <textarea name="Message" placeholder="Message" required="" />
              </div>
              <div>
                <div className="click">
                  <input type="submit" value="SEND" />
                </div>
              </div>
            </form>
          </div>
          <div className="clearfix"> </div>
          <div className=" col-md-8 col-sm-8 col-xs-7 contact-map">
            <div className="map-grid">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.948805392833!2d-73.99619098458929!3d40.71914347933105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1479793484055" />
            </div>
          </div>

          <div className=" col-md-4 col-sm-4 col-xs-5 contact-icons">
            <div className="footer_grid_left">
              <h5>Address</h5>
              <p>
                756 st hill,south pole,
                <span> New York,10002, USA</span>
              </p>
            </div>
            <div className="footer_grid_left">
              <h5> Contact</h5>
              <p>
                +(000) 123 4565 32 <span>+(010) 123 4565 35</span>
              </p>
            </div>
            <div className="footer_grid_left">
              <h5>Email</h5>
              <p>
                <a href="mailto:info@example.com">mail@example1.com</a>
                <span>
                  <a href="mailto:info@example.com">mail@example2.com</a>
                </span>
              </p>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Navigation;
