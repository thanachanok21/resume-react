import React from "react";
import "./portflolio.css";
import portflolioImg1 from "../assets/images/portfolio1.jpg.jpg";
import portflolioImg2 from "../assets/images/portfolio2.jpg.jpg";
import portflolioImg3 from "../assets/images/portfolio3.jpg.jpg";
import portflolioImg4 from "../assets/images/portfolio4.jpg.jpg";
import portflolioImg5 from "../assets/images/portfolio5.jpg.jpg";
import portflolioImg6 from "../assets/images/portfolio6.jpg.jpg";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <div className="main-text">
        <p>Portfolio</p>
        <h2>
          <span>Latest</span>Project
        </h2>
      </div>
      <div className="portfolio-content">
        <div className="row">
          <img src={portflolioImg1} />
          <div className="layer">
            <h5>Visual Design</h5>
            <p>
              Check out 10 Best Design's updates for the top web design &
              development companies
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <img src={portflolioImg2} />
          <div className="layer">
            <h5>Visual Design</h5>
            <p>
              Check out 10 Best Design's updates for the top web design &
              development companies
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <img src={portflolioImg3} />
          <div className="layer">
            <h5>Visual Design</h5>
            <p>
              Check out 10 Best Design's updates for the top web design &
              development companies
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <img src={portflolioImg4} />
          <div className="layer">
            <h5>Visual Design</h5>
            <p>
              Check out 10 Best Design's updates for the top web design &
              development companies
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <img src={portflolioImg5} />
          <div className="layer">
            <h5>Visual Design</h5>
            <p>
              Check out 10 Best Design's updates for the top web design &
              development companies
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <img src={portflolioImg6} />
          <div className="layer">
            <h5>Visual Design</h5>
            <p>
              Check out 10 Best Design's updates for the top web design &
              development companies
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
