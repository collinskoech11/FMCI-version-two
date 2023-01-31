import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Faith Ministries Church International</h1>
      <p>To make and deploy mature and equipped followers of Christ for the sake of Family, Community and Global Transformation. At Gateway, we are committed to helping every person believe in Jesus, belong to a family, become a disciple and build His kingdom.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Over 300 satelite branches to choose from</p>
      </div>
    </div>
{/* 
    <div className="gpt3__header-image">
      <img src={ai} />
    </div> */}
  </div>
);

export default Header;
