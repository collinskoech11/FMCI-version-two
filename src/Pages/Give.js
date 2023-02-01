import {Mpesa } from "daraja";

const mpesa = new Mpesa(123456, 'yourConsumerKey', 'yourConsumerSecret');

mpesa
  .mpesaExpressRequest(
    100,
    254712345678,
    123456,
    'bfb279f9aa9bdbcf15...',
    'CustomerPayBillOnline',
    'INV001',
    'Regular payment',
    'http://callbackurl.com'
  )
  .then(response => {
    // SUCCESS
    // do something with the response
  })
  .catch(error => {
    // FAILED
    // handle the error
  });

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
            <button type="button">Give Offering</button>
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
