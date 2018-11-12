import React from "react";
import Contact from "./Contact";

const Gallery = () => {
  return (
    <div>
      <div id="gallery" className="gallery">
        <div className="container">
          <h3 className="title clr">Gallery</h3>
          <div className="gallery-info">
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
              <a
                href="images/g1.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g1.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
              <a
                href="images/g2.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g2.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
              <a
                href="images/g3.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g3.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids">
              <a
                href="images/g4.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g4.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids grid-mdl">
              <a
                href="images/g5.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g5.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
              <a
                href="images/g6.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g6.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
              <a
                href="images/g7.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g7.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
              <a
                href="images/g8.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g8.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
              <a
                href="images/g9.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g9.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
              <a
                href="images/g12.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g12.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
              <a
                href="images/g10.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g10.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 gallery-grids  grid-mdl">
              <a
                href="images/g11.jpg"
                className="gallery-box"
                data-lightbox="example-set"
                data-title=""
              >
                <img
                  src="images/g11.jpg"
                  alt=""
                  className="img-responsive zoom-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Gallery;
