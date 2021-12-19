import React, { useState } from 'react';
import "./Login.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

import { Button, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
 function Login(){
    const [otpflag,setOtpflag]=useState(true)
    const [otpvalid,setOtpvalid]=useState(true)
    const [otp,setOtp]=useState("")
    const [number,setNumber]=useState("")
    const [tempotp,setTempotp]=useState("")

    const history= useHistory();
    const [authflagotp,otpauthflagotp]=useState(false)
    return (
        <div className='logn-body-rn'>

          

<div className="login-cont-r">
              <img className="login-cross-i-r" src="./Images/numBike/progess/coolicon.svg" alt="" />
            <div className="login-img-div">
              <img className="login-img-i-r" src="./Images/numBike/progess/image 1.svg" alt="" />
            </div>
            <div className="login-inpt-div">
            <div className="inpt-div-login">
                <div className="img-div-login-r">
                <img src="./Images/numBike/undraw_access_account_re_8spm 1.svg" alt="" />
                </div>
                <div className="img-div-p-r">
                  {otpflag ?<p className='login-div-r-p'>Please sign in to continue</p>:
                  <div>
                       <p className='login-div-r-p'> {`please enter 4 digit OTP sent on ${number}`}</p>
                       <p className="resend-otp-r" onClick={()=>{
                             setOtpvalid(true);
                             setOtpflag(true);
                             setTempotp("");
                             setOtp("")
                       }}>Change mobile number</p>
                  </div>
                  }
                </div>
            </div>
           <div className="inpt-number-din-r">
               {otpflag?
           <PhoneInput style={{width:"100%"}}
            country={'in'}
            onChange={(phone)=>{setNumber(phone)}}
            inputProps={{
                name: 'Mobile Number',
                required: true,
                autoFocus: true,
            }}
            />:
            <div>
            <TextField style={{width: '100%'}}
                        // error={errorflag===""}
                        id="standard-error-helper-text"
                        label={"Enter OTP"}
                        placeholder='Enter OTP'
                        value={otp}
                        helperText={authflagotp? "Incorrect OTP.":""}
                        variant="outlined"
                        // required 
                        onChange={(e)=>{
                            setOtp(e.target.value)
                        }}
            />
            <p onClick={()=>{
        if(number.length===12){
            setTimeout(() => {
                let otp=Math.floor(100000 + Math.random() * 900000)
                setTempotp(otp);
                alert(otp)
                setOtp("")
            }, [2000]);
            }}} className="resend-otp-r">Resend OTP</p>
           
            </div>
            }
            <div className="login-btn1-r">
            {otpvalid ?<div><Button   style={{width: '100%',marginTop:"3%", maxHeight: '42px',minHeight:"42px"}}                   
                    variant="contained" 
                    onClick={()=>{
                        if(number.length===12){
                        setTimeout(() => {
                            let otp=Math.floor(100000 + Math.random() * 900000)
                            setTempotp(otp);
                            alert(otp)
                            setOtpvalid(false);
                            setOtpflag(false);
                        }, [2000]);
                    }
                    }}>Sign In with OTP</Button>
                    <Button  style={{width: '100%',marginTop:"3%", maxHeight: '42px',minHeight:"42px"}}                    
                    variant="outlined" 
                    >Sign In with Password</Button>
                    </div>:
                    <div>
                    <Button  style={{width: '100%',marginTop:"3%", maxHeight: '42px',minHeight:"42px"}}        
                    variant="contained" 
                    onClick={()=>{
                      if(otp==tempotp){
                            console.log("logined");
                            history.push("/paydetails")
                      }
                    }}>Sign In</Button>
                    <Button  style={{width: '100%',marginTop:"3%", maxHeight: '42px',minHeight:"42px"}}                    
                    variant="outlined" 
                    >Sign In with Password</Button>
                    </div>}
            </div>
            <div className="desc-login-r">
                <p className="desc-1p-r">First time user?</p>
                <p className="desc-2p-r">Sign Up</p>
            </div>
           </div>

            </div>
        </div>
        
        </div>
        
    )
}

export {Login}