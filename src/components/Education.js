import React from "react";
import Gallery from "./Gallery";

const Education = () => {
  return (
    <div>
      <div class="experience" id="experience">
        <div class="container">
          <div class="education">
            <div class="col-md-5 education-info">
              <h4>education</h4>
            </div>
            <div class="col-md-7 education-matter">
              <div class="edu-right ">
                <h6>2011-2014</h6>
                <h5>Bachelor Degree Of Education</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
              <div class="edu-right back-shadow clr-green">
                <h6>2011-2014</h6>
                <h5>Bachelor Degree Of Education</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>

              <div class="edu-right ">
                <h6>2011-2014</h6>
                <h5>Bachelor Degree Of Education</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
              <div class="edu-right back-shadow clr-green">
                <h6>2011-2014</h6>
                <h5>Bachelor Degree Of Education</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div class="clearfix" />
          </div>
          <div class="experience-info">
            <div class="col-md-7 exp-matter">
              <div class="exp-left">
                <h6>2012-2014</h6>
                <h5>WebDesigner – Mutation Media</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
              <div class="exp-left back-shadow clr-green">
                <h6>2011-2012</h6>
                <h5>WebDesigner – Mutation Media</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>

              <div class="exp-left">
                <h6>2009-2011</h6>
                <h5>WebDesigner – Mutation Media</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
              <div class="exp-left back-shadow clr-green">
                <h6>2008-2009</h6>
                <h5>WebDesigner – Mutation Media</h5>
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div class="col-md-5 exp-info-right">
              <h4>experience</h4>
            </div>
            <div class="clearfix" />
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default Education;
