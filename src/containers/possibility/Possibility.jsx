import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    {/* <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div> */}
    <div className="gpt3__possibility-content">
      <h4>Join us Sunday mornings as we gather online</h4>
      <h1 className="gradient__text">we want to make it<br /> possible for everyone to experience</h1>
      <p>the fellowship and Biblical teaching that keeps our faith strong, which is more important now than ever. With this in mind, we are ready to offer a series of special live stream worship services, </p>
      <h4>Sundays at 11am GMT+3.</h4>
    </div>
  </div>
);

export default Possibility;
