import React, { useState } from 'react';
import "./policySteps.css"
import { useHistory } from 'react-router-dom';
export default function PolicySteps(){
    const [polifcyflag,setpolicyflag]=useState(true)
    let history=useHistory()
    return(
      <div className="backg-img-r">
      {polifcyflag ? <div className="policy-container-r">
        <div className="policy-div-text-r">
                <p className="policy-txt-r">
                Answer 2 Simple questions to get best quotes
                </p>
            </div>
            <div className="progrs-icon-r">
                <img className="progrs-one-img" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Eo_circle_orange_number-1.svg" alt="" />
                <img className="progrs-line-img" src="./Images/numBike/progess/Line 2.svg" alt="" />
                <img  className="progrs-two-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Eo_circle_orange_number-2.svg" alt="" />
            </div>
            <div className="select-policy-r">
            <p className="policy-inpt-r">
            Has your current policy expired?
                </p>
               
                    <div onClick={()=>{
                        setpolicyflag(false)
                    }}  className="ipnt-policy-r">
                    Not Expired
                    </div>
                    <div onClick={()=>{
                        setpolicyflag(false)
                    }} className="ipnt-policy-r">
                    Expired Within 90 Days
                    </div>
                    <div onClick={()=>{
                        setpolicyflag(false)
                    }} className="ipnt-policy-r">
                    Expired More Than 90 Days
                    </div>
                    <div onClick={()=>{
                        setpolicyflag(false)
                    }} className="ipnt-policy-r">
                    I don’t remember
                    </div>
                    <p className="policy-btm-d-r">
                    Policy expired? Don’t worry - renew instantly without any inspection or documentation
                </p>
            </div> 
        </div>:<div className="policy-container-r">
        <div className="policy-div-text-r">
                <p className="policy-txt-r">
                Answer 2 Simple questions to get best quotes
                </p>
            </div>
            <div className="progrs-icon-r">
                <img className="progrs-one-2-img" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Eo_circle_orange_number-1.svg" alt="" />
                <img className="progrs-line-img" src="./Images/numBike/progess/Line 2.svg" alt="" />
                <img  className="progrs-two-2-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Eo_circle_orange_number-2.svg" alt="" />
            </div>
            <div className="select-policy-r">
            <p className="policy-inpt-r">
            Which cover did you have on your expiring policy?
                </p>
               
                    <div onClick={()=>{
                        history.push("/planlayout")
                    }} className="ipnt-policy-r">
                    Standard / Comprehensive
                    </div>
                    <div onClick={()=>{
                        history.push("/planlayout")
                    }} className="ipnt-policy-r">
                    Third Party Liability Only
                    </div>
                    <div onClick={()=>{
                        history.push("/planlayout")
                    }} className="ipnt-policy-r">
                    I don’t remember
                    </div>
            </div> 
        </div>}
        </div>
    )
}