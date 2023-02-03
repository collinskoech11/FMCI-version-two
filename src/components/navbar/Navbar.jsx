import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo192.png"
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="displayed logo image"/>
          <p style={{ fontWeight:"bold", fontSize:"large"}} className="gradient__text">FMCI</p>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/news">News & Updates</Link>
          </p>
          <p>
            <Link to="/give">Give Offering</Link>
          </p>
          <p>
            <Link to="/justfm">Just Fm Radio</Link>
          </p>
          <p>
            <Link to="/Photo">Photo Library</Link>
          </p>
          <p>
            <Link to="/youtube">Weekly Live stream</Link>
          </p>
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <Link to="/" onClick={() => setToggleMenu(false)} >Home</Link>
              </p>
              <p>
                <Link to="/news" onClick={() => setToggleMenu(false)} >News & Updates</Link>
              </p>
              <p>
                <Link to="/give" onClick={() => setToggleMenu(false)} >Give Offering</Link>
              </p>
              <p>
                <Link to="/justfm" onClick={() => setToggleMenu(false)} >Just Fm Radio</Link>
              </p>
              <p>
                <Link to="/Photo" onClick={() => setToggleMenu(false)} >Photo Library</Link>
              </p>
              <p>
                <Link to="/youtube" onClick={() => setToggleMenu(false)} >Weekly Live stream</Link>
              </p>
            </div>
            {/* <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
