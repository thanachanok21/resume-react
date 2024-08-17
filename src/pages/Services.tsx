import React from "react";
import "./services.css";

const Services: React.FC = () => {
  return (
  // <!-- service section design -->
    <section className="services" id="mySkills">
      <div className="main-text">
        <p>What I trainee In</p>
        <h2>
          <span>My</span>skills
        </h2>
      </div>
      <div className="services-content">
        <div className="box">
          <div className="s-icons">
            <i className="bx bx-mobile-alt"></i>
          </div>
          <h3>Web Design</h3>
          <p>
            One way to categorize the activities is in terms of the
            professional's area of expertise such as competitive
            analysis,corporate straregy.
          </p>
          <a href="#" className="read">
            Read More
          </a>
        </div>
        <div className="box">
          <div className="s-icons">
            <i className="bx bx-code"></i>
          </div>
          <h3>Web Development</h3>
          <p>
            the building and maintenance of websites; it's the work that happens
            behind the scenes to make a website look great, work fast and
            perform well with a seamless user experience..
          </p>
          <a href="#" className="read">
            Read More
          </a>
        </div>
        <div className="box">
          <div className="s-icons">
            <i className="bx bx-edit"></i>
          </div>
          <h3>Creative Design</h3>
          <p>
            a process that uses digital and physical image-making tools to
            create renders and representations used for marketing purposes.
            Creative design as a field relies heavily on the work of visual
            designers but is not entirely limited to it.
          </p>
          <a href="#" className="read">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};
export default Services;
