import React from "react";
import Eduction from "./Education";

const Navigation = () => {
  return (
    <div>
      <div className="services" id="services">
        <div className="container">
          <h3 className="title clr">Services</h3>
          <div className="banner-bottom-girds">
            <div className="col-md-5 my-ser-right">
              <div className="col-md-6 col-sm-6 col-xs-6 stats-grid stats-grid-1">
                <div className="ser-icone">
                  <span className="fa fa-users font" aria-hidden="true" />
                  <div className="counter">3500</div>
                  <div className="stat-info-w3ls">
                    <h4>Clients</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 stats-grid stats-grid-2">
                <div className="ser-icone clr-green">
                  <span className="fa fa-coffee font" aria-hidden="true" />
                  <div className="counter">650</div>
                  <div className="stat-info-w3ls">
                    <h4>Coffee</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 stats-grid stats-grid-3">
                <div className="ser-icone clr-green">
                  <span className="fa fa-trophy font" aria-hidden="true" />
                  <div className="counter">1021</div>
                  <div className="stat-info-w3ls">
                    <h4>Awards</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 stats-grid stats-grid-4">
                <div className="ser-icone">
                  <span className="fa fa-lightbulb-o font" aria-hidden="true" />
                  <div className="counter">1010</div>
                  <div className="stat-info-w3ls">
                    <h4>Ideas</h4>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="w3l_about_bottom_grid_right bar-grids">
                <h6>
                  Html
                  <span> 100% </span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="mid-bar">
                  <h6>
                    Css
                    <span> 85% </span>
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped active"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
                <h6>
                  Java
                  <span>67% </span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "67%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 my-ser-left">
              <div className="white-shadow">
                <div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
                  <h6>1</h6>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
                  <h4>Development</h4>
                  <p>
                    Lorem ipsum dolor sitamet,consectetuer adipiscing
                    elit.Aenean commodo ligula eget
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="white-shadow">
                <div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
                  <h6>2</h6>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
                  <h4>Typography</h4>
                  <p>
                    Lorem ipsum dolor sitamet,consectetuer adipiscing
                    elit.Aenean commodo ligula eget
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="white-shadow">
                <div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
                  <h6>3</h6>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
                  <h4>Graphic Design</h4>
                  <p>
                    Lorem ipsum dolor sitamet,consectetuer adipiscing
                    elit.Aenean commodo ligula eget
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="white-shadow">
                <div className=" col-md-3 col-sm-3 col-xs-3 service-num-left">
                  <h6>4</h6>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9 service-info-left">
                  <h4>Adobe Photoshop</h4>
                  <p>
                    Lorem ipsum dolor sitamet,consectetuer adipiscing
                    elit.Aenean commodo ligula eget
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <Eduction />
    </div>
  );
};

export default Navigation;
