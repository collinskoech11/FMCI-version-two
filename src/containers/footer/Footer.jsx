import React from "react";
import {Link} from "react-router-dom"
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to take a step of faith and join us
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Reach out to us</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p style={{ color: "#fff", fontWeight: "bold", fontSize: "25px" }}>
          FMCI
        </p><br/>
        <p>
          Habakuk 2:4 <br/>
          But the just shall live by his faith
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/wgpt3">News & Updates</Link>
          </p>
          <p>
            <Link to="/possibility">Give Offering</Link>
          </p>
          <p>
            <Link to="/features">Just Fm Radio</Link>
          </p>
          <p>
            <Link to="/blog">Photo Library</Link>
          </p>
          <p>
            <Link to="/blog">Weekly Live stream</Link>
          </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Our Church</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>+254700105721</p>
        <p>Kericho Kenya</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>&copy;{new Date().getFullYear()} FMCI. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
