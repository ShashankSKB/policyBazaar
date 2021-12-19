import './paydone.css';

export const Paydone = () => {
  return <div>
      <div className="main-md-cont">
          <div className="first-md-box1">
              <div>
                  <p>Merchant Name</p>
                  <p>Policy Bazaar</p>
              </div>
              <div>
                  <p>Payment Amount</p>
                  <p>Rs. 1,407.00</p>
              </div>
              <div>
                  <p>Order ID</p>
                  <p>PG427782305</p>
              </div>
          </div>
          <div className="second-md-box2"> 
              <div>
                  <p>Complete your payment</p>
                  <p>Page will expire within <span style={{ color:"red"}}>15 minutes</span></p>
              </div>
              <div>
                  <img src="./images/policylogo.png" alt="policy" />
              </div>
          </div>
          <div className="many-pd-md">
              <p>1. Open your PSP application</p>
              <p>Go to your UPI PSP mobile App</p>
              <p>2.Authorize Payment</p>
              <p>Complete your payment by selecting the bank & entering UPI</p>
          </div>
          <div className="last-class-md1">
              <p>*Please do not click your browser's back or refresh button</p>
          </div>
      </div>
  </div>;
};
