import React from "react";
import "./about.css";
import about from '../assets/images/about.jpg'

const About: React.FC = () => {
  return (
    <>
      {/* <!-- about section design --> */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={about} />
        </div>
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          <h4>Web Developer!</h4>
          <p>
            Web developers create functional, user-friendly websites and web
            applications. They may write code, develop and test new
            applications, or monitor site performance and traffic. Front-end
            developers focus on the user-facing side of their work, while
            back-end developers make websites functional and secure.
          </p>
          <a href="#" className="btn">
            More About
          </a>
        </div>
      </section>
    </>
  );
};

export default About;