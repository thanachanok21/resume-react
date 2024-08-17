import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      {/* home section design */}
      <section className="home" id="home">
        <div className="home-text">
          <div className="slide">
            <span className="one">Hello</span>
            <span className="two">I'm</span>
          </div>
          <h1>Thanachanok Sitthipornrungreang</h1>
          <h3>
            Software <span> Developer.</span>
          </h3>
          <p>
            Web Developer have no work experience but want to learn more from
            the field.
          </p>
          <div className="button">
            <a href="#" className="btn">
              Say Hello
            </a>
            <a href="#" className="btn2">
              <span>
                <i className="bx bx-play"></i>
              </span>
              Watch My Work{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
