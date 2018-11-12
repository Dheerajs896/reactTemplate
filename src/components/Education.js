import React from "react";
import Gallery from "./Gallery";

const Education = () => {
  return (
    <div>
      <div className="experience" id="experience">
        <div className="container">
          <div className="education">
            <div className="col-md-5 education-info">
              <h4>education</h4>
            </div>
            <div className="col-md-7 education-matter">
              <div className="edu-right ">
                <h6>2011-2014</h6>
                <h5>Bachelor Degree Of Education</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
              <div className="edu-right back-shadow clr-green">
                <h6>2011-2014</h6>
                <h5>Bachelor Degree Of Education</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>

              <div className="edu-right ">
                <h6>2011-2014</h6>
                <h5>Bachelor Degree Of Education</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
              <div className="edu-right back-shadow clr-green">
                <h6>2011-2014</h6>
                <h5>Bachelor Degree Of Education</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="experience-info">
            <div className="col-md-7 exp-matter">
              <div className="exp-left">
                <h6>2012-2014</h6>
                <h5>WebDesigner – Mutation Media</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
              <div className="exp-left back-shadow clr-green">
                <h6>2011-2012</h6>
                <h5>WebDesigner – Mutation Media</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>

              <div className="exp-left">
                <h6>2009-2011</h6>
                <h5>WebDesigner – Mutation Media</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
              <div className="exp-left back-shadow clr-green">
                <h6>2008-2009</h6>
                <h5>WebDesigner – Mutation Media</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div className="col-md-5 exp-info-right">
              <h4>experience</h4>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default Education;
