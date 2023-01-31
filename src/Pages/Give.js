import React from "react";

function Give() {
  return (
    <div className="gradient__bg">
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">
            Offerings for our mission
          </h1>
          <p>
            Lets join hands to give
          </p>

          <div className="gpt3__header-content__input">
            <input type="text" placeholder="Your Phone Number" />
          </div>

          <div className="gpt3__header-content__input">
            <input type="number" placeholder="Amount" />
            <button type="button">Get Started</button>
          </div>

          <div className="gpt3__header-content__people">
            <p>Blessed is the hand that gives</p>
          </div>
        </div>
        {/* 
    <div className="gpt3__header-image">
      <img src={ai} />
    </div> */}
      </div>
    </div>
  );
}

export default Give;
