import "./payment.css";
import { useHistory } from "react-router-dom";
import { PayHeader } from "../Paymentheader/PayHeader";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

export const PaymentDetails = () => {
  const history = useHistory();
  
  let data=useSelector((state)=>state.vehicledetail)
    const { bikenum,
    bikemake,
    bikemodel,
    bikeyear}=data

    const store=useSelector(state=>state.addressdetail);

    console.log("reduce data",store);

    const {info1,info2,info3}=store;
  const handleRoute = () => {
    history.push("/credit");
  };
  return (
    <div className="pay_body">
      <PayHeader />
      <div className="payment-md-page">
        <div className="personal-md-details">
          <div className="per-d1-md">
            <div>
              <Button variant="outlined" size="small">
                Back
              </Button>
            </div>
            <div>Summary</div>
          </div>
          <div className="Pd-md">
            <div>Personal Details</div>
            <div>
              <Button variant="outlined" size="small">
                Edit
              </Button>
            </div>
          </div>
          <div className="owner-md-de">
            <div>
              <p className="p1-md">Name of the vehical owner</p>
              <p className="p2-md">{info1.Owner}</p>

              <p
                className="p1-md"
                style={{ marginLeft: "1px", marginTop: "15px" }}
              >
                Communication Address
              </p>
              
              <p className="p2-md">{info1.Address}</p>
              <p className="p3-md">{info1.City} {info1.Pincode}</p>
              <p className="p3-md" style={{ marginTop: "0", width: "110px" }}>
                {info1.State}
              </p>
              <p
                className="p1-md"
                style={{ marginTop: "15px", width: "110px" }}
              >
                Email Address
              </p>
              <p
                className="p3-md"
                style={{ marginLeft: "4px", width: "220px" }}
              >
                {info1.Email}
              </p>
              <p
                className="p1-md"
                style={{ marginLeft: "1px", marginTop: "15px", width: "108px" }}
              >
                Mobile No.
              </p>
              <p
                className="p3-md"
                style={{ marginLeft: "4px", width: "110px" }}
              >
                {info1.Mobile}
              </p>
            </div>
            <div>
              <p className="p1-md">Name of the Nominee</p>
              <p
                className="p2-md"
                style={{ marginLeft: "30px", width: "150px" }}
              >
                {info2.Nname}
              </p>
              <p className="p1-md" style={{ marginTop: "15px" }}>
                Nominee Relationship
              </p>
              <p className="p2-md" style={{ width: "110px" }}>
                Mother
              </p>
              <p
                className="p1-md"
                style={{
                  marginTop: "65px",
                  width: "110px",
                  marginLeft: "22px",
                }}
              >
                Nominee Age
              </p>
              <p
                className="p2-md"
                style={{ width: "45px", marginLeft: "19px" }}
              >
                {info2.Nage}
              </p>
            </div>
          </div>
          <div className="Pd-md-1">
            <div>Vehical and Policy details</div>
            <div>
              <Button variant="outlined" size="small">
                Edit
              </Button>
            </div>
          </div>
          <div className="vehicle-md-d">
            <div>
              <p
                className="p1-md"
                style={{ width: "100px", marginLeft: "1px" }}
              >
                Policy Type
              </p>
              <p
                className="p2-md"
                style={{
                  width: "110px",
                  marginLeft: "12px",
                  marginBottom: "14px",
                }}
              >
                Third-Party Only
              </p>
              <p
                className="p1-md"
                style={{ width: "150px", marginLeft: "7px" }}
              >{info3.Engine}
              </p>
              <p
                className="p2-md"
                style={{
                  width: "110px",
                  marginLeft: "4px",
                  marginBottom: "14px",
                }}
              >
                {bikenum}
              </p>
              <p
                className="p1-md"
                style={{ width: "250px", marginLeft: "15px" }}
              >
                {info3.Chasis}(Mentioned on your PC)
              </p>
              <p
                className="p2-md"
                style={{
                  width: "110px",
                  marginLeft: "16px",
                  marginBottom: "14px",
                }}
              >
                MD63E4KR2789WD15
              </p>
              <p
                className="p1-md"
                style={{ width: "160px", marginLeft: "7px" }}
              >
                Model & Variant Name
              </p>
              <p
                className="p2-md"
                style={{
                  width: "100px",
                  marginLeft: "4px",
                  marginBottom: "14px",
                }}
              >
                {bikemake} - {bikemodel}
              </p>
              <p
                className="p1-md"
                style={{ width: "130px", marginLeft: "12px" }}
              >
                Previouse Policy No
              </p>
              <p
                className="p2-md"
                style={{
                  width: "110px",
                  marginLeft: "10px",
                  marginBottom: "14px",
                }}
              >
                SDE3586457896
              </p>
              <p
                className="p1-md"
                style={{ width: "110px", marginLeft: "12px" }}
              >
                Registration Date
              </p>
              <p
                className="p2-md"
                style={{ width: "96px", marginBottom: "14px" }}
              >
                {info3.date}
              </p>
              <p className="p1-md" style={{ width: "50px", marginLeft: "2px" }}>
                NCB
              </p>
              <p
                className="p2-md"
                style={{ width: "50px", marginBottom: "14px" }}
              >
                50%
              </p>
            </div>
            <div>
              <p className="p1-md" style={{ width: "150px" }}>
                Add-Ons in Policy
              </p>
              <p
                className="p2-md"
                style={{
                  width: "110px",
                  marginLeft: "12px",
                  marginBottom: "14px",
                }}
              >
                Not Included{" "}
              </p>
              <p
                className="p1-md"
                style={{ width: "110px", marginLeft: "18px" }}
              >
                Engine Number
              </p>
              <p
                className="p2-md"
                style={{
                  width: "110px",
                  marginLeft: "14px",
                  marginBottom: "14px",
                }}
              >
                0E34F5357951
              </p>
              <p
                className="p1-md"
                style={{ width: "150px", marginLeft: "8px" }}
              >
                Manufacture Name
              </p>
              <p
                className="p2-md"
                style={{
                  width: "68px",
                  marginLeft: "1px",
                  marginBottom: "14px",
                }}
              >
                TVS
              </p>
              <p
                className="p1-md"
                style={{ width: "110px", marginLeft: "17px" }}
              >
                Previous Insurer
              </p>
              <p
                className="p2-md"
                style={{
                  width: "100px",
                  marginLeft: "4px",
                  marginBottom: "14px",
                }}
              >
                Bahrti Axa{" "}
              </p>
              <p className="p1-md" style={{ marginLeft: "8px" }}>
                Previous Policy Expiry Date
              </p>
              <p className="p2-md" style={{ width: "110px" }}>
                20/04/2021
              </p>
            </div>
          </div>
          <div className="warning-md">
            <div>
              This is based on your declaration that previous NCB is 50%.
            </div>
            <div>and no claim has been made in previous policy</div>
          </div>
        </div>
        <div className="pay-md-security">
          <div className="pay-md-head">
            <p>Your new policy will start from 06 December 2021</p>
          </div>
          <div className="total-md-am">
            <div>
              <img src="./images/companyName.png" alt="company name" />
            </div>
            <div>
              <p
                className="p1-md"
                style={{ width: "180px", marginLeft: "0", marginTop: "8px" }}
              >
                IDV (Insured declare value)
              </p>
              <p
                className="p1-md"
                style={{ marginLeft: "1px", width: "150px", marginTop: "20px" }}
              >
                NCB (No claim bonus)
              </p>
            </div>
            <div>
              <p>Rs. 36,082</p>
              <p>50%</p>
            </div>
          </div>
          <div className="total-md-am1">
            <div>
              <p>NET PREMIUM</p>
              <p style={{ width: "25px" }}>GST</p>
            </div>
            <div>
              <p>RS 2736</p>
              <p>+ RS 498</p>
            </div>
          </div>
          <div className="total-md-am2">
            <div>Compulsary Driver PA Cover</div>
            <div>
              <p>
                Add Compulsory Owner-Driver Personal Accident Cover of Rs{" "}
                <span style={{ color: "black", fontWeight: "500" }}>
                  15 Lakh
                </span>
              </p>
            </div>
            <div>
              <form className="set-in-md">
                <div>
                  <input type="checkbox" name="digit" />
                  <label for="digit">Digit Rs.451</label>
                </div>
                <div>
                  <input type="checkbox" name="next" />
                  <label for="next">Kotak Rs.389</label>
                </div>
                <div>
                  <input type="checkbox" name="gi" />
                  <label for="gi">Liberty GI Rs.443</label>
                </div>
              </form>
            </div>
          </div>
          <div className="total-md-am3">
            <div className="total-md-am44">
              <p>You Pay</p>
              <p>Rs. 2736</p>
            </div>
            <div className="input-md-2">
              <input type="checkbox" name="update" />
              <lable>Get's update on Whatsapp</lable>
            </div>
            <div className="input-md-1">
              <input type="checkbox" name="next" />
              <label>
                I agree to the{" "}
                <span style={{ color: "#0663F6" }}>Terms & Conditions</span> & I
                confirm that my previous policy is comprehensive/package policy
                having 50% NCB, there are no claims & I confirm that there is
                valid PUC certificate
              </label>
            </div>
          </div>
          <div className="total-md-am4">
            <button
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#62AF60",
                border: "none",
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
              }}
              onClick={handleRoute}
            >
              Pay Security
            </button>
          </div>
        </div>
      </div>
      <div className="footter-md">
        <div className="footter-md-1">
          <p>Disclaimer:</p>
          <p>
            All savings provided by insurers as per IRDAI approved insurance
            plans. Standard T&C apply.
          </p>
          <p>
            Actual time for transaction may vary subject to additional data
            requirements and operational processes.
          </p>
          <p>
            Policybazaar Insurance Brokers Private Limited (formerly known as
            Policybazaar Insurance Web Aggregator Private Limited)
          </p>
          <p>
            Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid
            till 09/06/2024, License category- Direct Broker (Life & General)
          </p>
          <p>
            Visitors are hereby informed that their information submitted on the
            website may be shared with insurers. Product information is
            authentic and
          </p>
          <p> solely based on the information received from the insurers.</p>
        </div>
        <div className="footer-md-2">
          <p>@Copyright 2018-2021</p>
          <p>
            <a href="www.policybazaar.com">policybazaar</a>
          </p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
