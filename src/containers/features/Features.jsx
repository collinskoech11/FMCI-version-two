import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Weekly Meet Ups',
    text: 'Matthew 18:20 -> For where two or three are gathered in my name, there am I among them. – Jesus',
  },
  {
    title: 'Youth Training services',
    text: 'John 13:34-35 -> "A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another.” – Jesus',
  },
  {
    title: 'Monthly prayer crusades for deliverance',
    text: 'Galatians 6:1-2 -> Brothers, if anyone is caught in any transgression, you who are spiritual should restore him in a spirit of gentleness. Keep watch on yourself, lest you too be tempted. Bear one another’s burdens, and so fulfill the law of Christ.',
  },
  {
    title: 'Weekly sunday sevices',
    text: 'Acts 5:42 -> And every day, in the temple and from house to house, they did not cease teaching and preaching that the Christ is Jesus.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Grow your faith with our regular prayer meet ups</h1>
      <p>Request to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
