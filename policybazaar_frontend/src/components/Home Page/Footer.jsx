import "./Home.css"
import one1 from "../../images/one1.png"
import one2 from "../../images/one2.png"
import one3 from "../../images/one3.png"
import one4 from "../../images/one4.png"
import one5 from "../../images/one5.png"
import fb from "../../images/fb.png"
import tw from "../../images/tw.png"
import ln from "../../images/ln.png"
import yu from "../../images/yu.png"
import Visa1 from "../../images/Visa1.png"
import Visa2 from "../../images/Visa2.png"
import Visa3 from "../../images/Visa3.png"
import Visa4 from "../../images/Visa4.png"

import Visa6 from "../../images/Visa6.png"
import Visa7 from "../../images/Visa7.png"
export const Footer=()=>{
    return(
        <>
        <div className="footer">
        <div>
          <h1 className="footer-h1">More Products</h1>
        </div>
      <div className="footer-f">
                <div>
                  <img src={one1} alt="one"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>General Insurance</b>
                  <div style={{marginLeft:"0%"}} >
                  <p className="footer-hov">Car Insurance</p>
                  <p className="footer-hov">Bike Insurance</p>
                  <p className="footer-hov">Motor Insurance</p>
                  <p className="footer-hov">Motor Insurance</p>
                  <p className="footer-hov">Third Party Car Insurance</p>
                  <p className="footer-hov">Third Party Bike Insurance</p>
                  <p className="footer-hov">Travel Insurance</p>
                  <p className="footer-hov">Commercial Vehicle Insurance plans</p>
                  </div>
                </div>
            <div>
                  <img src={one2} alt="one"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>Life Insurance</b>
                  <div style={{marginRight:"0%"}}>
                  <p className="footer-hov">Team Insurance</p>
                  <p className="footer-hov">Spouse Term Plan</p>
                  <p className="footer-hov">Return of Premium</p>
                  <img style={{position:"absolute",left:"440px",width:"1.3%"}} src={one5} alt="side" /> <b>Other Insurance</b> 
                  <p className="footer-hov">Group Health Insurance</p>
                  <p className="footer-hov">Other General Insurance products</p>
                  <p className="footer-hov">Cancer Insurance</p>
                  <p className="footer-hov">Home Insurance</p>
                </div>
            </div>
            <div>
                  <img src={one3} alt="one"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>Investment</b>
                  <div style={{marginRight:"0%"}}>
                  <p className="footer-hov">Investment Plans</p>
                  <p className="footer-hov">Child Plans</p>
                  <p className="footer-hov">Pension Plans</p>
                  <p className="footer-hov">ULIPS</p>
                  <p className="footer-hov">Money back Policy</p>
                  <p className="footer-hov">Endowment Policy</p>
                  <p className="footer-hov">Guaranteed Return Plans</p>
                  <p className="footer-hov">Tax Saving Plan</p>
                  </div>
            </div>
            <div style={{marginRight:"18%"}}>
                    <img src={one4} alt="one"/><b style={{marginLeft:"1%",position:"absolute",fontSize:"20px"}}>Health  Insurance</b>
                    <div style={{marginRight:"0%"}}>
                    <p className="footer-hov">Health Insurance</p>
                    <p className="footer-hov">1cr Health Cover </p>
                    <p className="footer-hov">Family Health Insurance</p>
                    <p className="footer-hov">Senior Citizen Health Insurance</p>
                    <p className="footer-hov">Corona Virus Insurance</p>
                    <p className="footer-hov">Corona Kavach Policy</p>
                    <p className="footer-hov">Corona Rakshak Policy</p>
                    <p className="footer-hov">Arogya Sanjeevni Policy</p>
                    </div>
            </div>
      </div>
     
      <p style={{textAlign:"right",fontSize:"11px"}}>
     
     <p>  <sup>*</sup>Standard Plans Terms and Conditions apply</p>
     <p> <sup>+</sup>For insurance plans that do not require inspection of your car</p>
     <p>#The above returns are based on the past performance of 7 years</p>
  
      </p>
      <div className="footer-boro">
        <div className="footer-bor"> 
        <p>Home</p>
        <p>About Us</p>
        <p>Sitemap</p>
        <p>Careers</p>
        <p>Legal & Admin Polices</p>
        <p>ISNP</p>
        <p>Insurance Companies</p>
        <p>Articles</p>
        <p>Contacts Us</p>
        <p>Know your advisor</p>
        <p>Newsroom</p>
      <img  className="footer-logo"  src={fb} alt="fb"/>
       <img className="footer-logo"  src={ln} alt="fb"/>
        <img className="footer-logo"  src={yu} alt="fb"/>
         <img className="footer-logo"  src={tw} alt="fb"/>
       
        </div>
      </div>
      <div>
      <div style={{width:"80%",marginLeft:"10%"}}>
      <b style={{position:"absolute"}}>Payment Methods</b>
      <p style={{textAlign:"end"}}><b> Secured with</b></p>
      </div>
      <div style={{width:"80%", display:"flex",marginLeft:"10%",flexDirection:"row"}}>
      <div style={{backgroundColor:"white",marginRight:"1%",paddingLeft:"12px",paddingTop:"15px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa1} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",padding:"5px",borderRadius:"2px",width:"70px"}} >
      <img src={Visa2} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",paddingTop:"12px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa3} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",padding:"5px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa4} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",padding:"5px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa1} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"50%",padding:"5px",borderRadius:"2px",width:"70px"}}>
      <img src={Visa6} alt="vs"/>
      </div>
      <div style={{backgroundColor:"white",marginRight:"1%",padding:"5px",borderRadius:"2px",width:"85x"}}>
      <img src={Visa7} alt="vs"/>
      </div>
      
      </div>
      <div style={{textAlign:"center",color:"#A8A8A8",fontSize:"12px"}}>
      <p>**Discount is offered by the Insurance company as approved by IRDAI for the product under File & Use guidelines</p>
      <p>#On the basis of your profile</p>
      <p>Policybazaar Insurance Brokers Private Limited (formerly known as Policybazaar Insurance Web Aggregator Private Limited) | CIN: U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44,</p>
      <p>Gurgaon, Haryana - 122001</p>
      <p style={{color:"white"}}>Contact Us | Legal and Admin Policies</p>
      <p>Policybazaar is now registered as a Direct Broker |Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024, License category- Direct Broker (Life & General)| Visitors are hereby informed</p>
      <p>that their information submitted on the website may be shared with insurers.Product information is authentic and solely based on the information received from the insurers.</p>
      <p>© Copyright 2008-2021 policybazaar.com. All Rights Reserved.</p>
      </div>
      </div>
      </div>
        </>
    )
}