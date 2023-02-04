import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3" style={{background:"lightgray"}}>
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Why FMCI" text="Whoever believes in the Son of God has the testimony in himself. Whoever does not believe God has made him a liar, because he has not believed in the testimony that God has borne concerning his Son. And this is the testimony, that God gave us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The power of believing</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature  title="Prayer Crusades" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature  title="Sermons" text="a religious discourse delivered in public usually by a member of the clergy as a part of a worship service" />
      <Feature  title="Intercessory Prayer" text="We bring to mind all those in our locality who find themselves in a hard place. We especially pray for those who suffer physically with illness or mentally with depression or anxiety." />
    </div>
  </div>
);

export default WhatGPT3;
