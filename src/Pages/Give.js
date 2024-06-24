// import { Mpesa } from "daraja";

function Give() {
  // const submitReuest = () => {
  //   const mpesa = new Mpesa(
  //     123456,
  //     "",
  //     "",
  //   );

  //   mpesa
  //     .mpesaExpressRequest(
  //       100,
  //       254728000207,
  //       123456,
  //       "bfb279f9aa9bdbcf15...",
  //       "CustomerPayBillOnline",
  //       "INV001",
  //       "Regular payment",
  //       "http://callbackurl.com"
  //     )
  //     .then((response) => {
  //       return response
  //     })
  //     .catch((error) => {
  //       return error
  //     });
  // };
  return (
    <div className="gradient__bg">
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1  style={{color:"#fff"}}>Offerings for our mission</h1>
          <p style={{color:"#fff"}}>Lets join hands to give</p>

          <div className="gpt3__header-content__input">
            <input type="text" placeholder="Your Phone Number" style={{background:"#fff"}}/>
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
