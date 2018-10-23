import React from "react";

const Navigation = () => {
  return (
    <div>
      <footer style={{ marginBottom: "-67px" }}>
        <div className="social-icons">
          <ul>
            <li>
              <a href="#">
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-rss" />
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-vk" />
              </a>
            </li>
          </ul>
        </div>

        <p>© 2018 Dheeraj Singh. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Navigation;
