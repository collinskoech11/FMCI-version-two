import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <p style={{ color: "#fff", fontWeight: "bold", fontSize: "25px" }}>
            FMCI
          </p>
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
            <Link to="/">Photo Library</Link>
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
                <Link to="/">Photo Library</Link>
              </p>
              <p>
                <Link to="/youtube">Weekly Live stream</Link>
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
