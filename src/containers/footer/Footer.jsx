import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 style={{ color: "#fff" }}>
        Do you want to take a step of faith and join us
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Reach out to us</p>
    </div>

    <div className="gpt3__footer-links" style={{maxWidth:"1000px"}}>
      <div className="gpt3__footer-links_logo">
        <p style={{ color: "#fff", fontWeight: "bold", fontSize: "25px" }}>
          FMCI
        </p>
        <br />
        <p>
          Habakuk 2:4 <br />
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
        <h4>Get in touch</h4>
        <p>Kericho Kenya</p>
        <a href="Tel: +254700105721">
          <p>Phone : +254700105721</p>
        </a>
        <a href="mailto:faithministriesandchurches@gmail.com">
          <p>Email: faithministriesandchurches@gmail.com</p>
        </a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>&copy;{new Date().getFullYear()} FMCI. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
