import React from "react";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contactMe">
      <div className="contact-text">
        <h2>
          Contact <span>Me!</span>
        </h2>
        <h4>If You Have Any Project In Your Mind</h4>
        <p>
          I'm a Software Developer - Creating bold & brave interface design for
          companies all across the world.
        </p>
        <div className="list">
          <li>
            <a href="#">08829206xx</a>
          </li>
          <li>
            <a href="#">tncnp27402@gmail.com</a>
          </li>
          <li>
            <a href="#">Thank You</a>
          </li>
        </div>

        <div className="contact-icons">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <form action="">
          <input type="name" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email Address" required />
          <input type="" placeholder="Your Mobile Number" required />
          <textarea
            name=""
            id=""
            cols={35}
            rows={10}
            placeholder="How can I help You"
            required
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="submit"
            required
          />
        </form>
      </div>
    </section>
  );
};
export default Contact;