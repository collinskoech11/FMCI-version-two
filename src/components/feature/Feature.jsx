import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1 style={{color:"#000"}}>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text ">
      <p style={{color:"linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%) "}}>{text}</p>
    </div>
  </div>
);

export default Feature;
