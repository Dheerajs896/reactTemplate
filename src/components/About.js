import React from "react";
import Service from "./Service";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="col-md-4 about-left ">
          <img
            src="images/ab2.jpg"
            className="img-responsive"
            alt="Dheeraj Singh"
          />
        </div>
        <div className="col-md-7 about-right">
          <div className="about-me">
            <h2>Dheeraj Singh</h2>
            <h4>Web Developer</h4>
          </div>
          <div className="w3layouts_more-buttn">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus adipiscing elit. Aenean commodo ligula eget dolor.
            </p>
            <div className="buttn-about">
              <a href="#services">Read More</a>
            </div>
            <div className="buttom-social-grids">
              <ul>
                <li>
                  <a href="">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fa-vk" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
        <div className="my-ser-info">
          <div className="col-md-5 my-datas">
            <h3>My Personal Data</h3>
            <ul className="address">
              <li>
                <ul className="address-text ">
                  <li>
                    <b>Name </b>
                  </li>
                  <li>:Dheeraj Singh</li>
                </ul>
              </li>
              <li>
                <ul className="address-text ">
                  <li>
                    <b>D.O.B </b>
                  </li>
                  <li>:06-12-1996</li>
                </ul>
              </li>
              <li>
                <ul className="address-text">
                  <li>
                    <b>PHONE </b>
                  </li>
                  <li>:+91 992 088 5615</li>
                </ul>
              </li>
              <li>
                <ul className="address-text">
                  <li>
                    <b>ADDRESS </b>
                  </li>
                  <li>:Kandivali East Mumbai 400101</li>
                </ul>
              </li>
              <li>
                <ul className="address-text">
                  <li>
                    <b>E-MAIL </b>
                  </li>
                  <li>
                    <a href="mailto:example@mail.com">
                      : dheerajs896@gmail.com
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="address-text">
                  <li>
                    <b>WEBSITE </b>
                  </li>
                  <li>
                    <a href="mailto:example@mail.com">: www.myresume.com</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="hire-w3lgrids">
              <a href="#" className="there-more">
                Download
              </a>
              <a href="#" className="there-more">
                Hire Me
              </a>
            </div>
          </div>
          <div className="col-md-7 aboutmy-services">
            <div className="col-md-6 col-sm-6 col-xs-6 about-ser-grid">
              <div className="about-gap">
                <span className="fa fa-television" aria-hidden="true" />
                <h3>Web Developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 about-ser-grid">
              <div className="about-gap clr-green">
                <span className="fa fa-database" aria-hidden="true" />{" "}
                <h3>UI/UX Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 about-ser-grid">
              <div className="about-gap clr-green">
                <span className="fa fa-picture-o" aria-hidden="true" />
                <h3>Photoshop</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer</p>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 about-ser-grid">
              <div className="about-gap">
                <span className="fa fa-mobile" aria-hidden="true" />
                <h3>Web Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer</p>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      <Service />
    </div>
  );
};

export default About;
