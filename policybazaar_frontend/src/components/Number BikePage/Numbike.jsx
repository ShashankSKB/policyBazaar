import React, { useState } from 'react';
import {TextField,Button} from "@mui/material"
import "./NuBike.css"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addbikenum } from '../../Redux/actions/NumBikeation';
export default function Numbike(){
    const [bikeno,setBikeno]=useState("")
    const [fieldflag,setFieldflag]=useState(false)
    const dispatch=useDispatch()
    const history=useHistory()
    const isbikeno=useSelector(state=>state.vehicledetail.isbikeno)
    return(
        <div className="container-r">
            <div className="bikeno-conti-r">
                <div className="bikeno-img-r">
                    <img className="bikeno-img-i-r" src="./Images/numBike/Logo (1).svg" alt="" />
                    {/* <img className="bikeno-img-aki-r" src="./Images/numBike/image 2.svg" alt="" /> */}
                    <img className="bikeno-img-aki-r" src="https://static.pbcdn.in/cdn/images/home-v1/pb-promise-new.png" alt="" />
                </div>
                
                <div className="bikeno-inpt-r">
                        <div>
                            <p className="bikeno-head_r">
                            Save upto 85%* on  
                            Two Wheeler Insurance
                            </p>
                        </div>
                        <div>
                            <p className="bikeno-head-info-_r">
                            Stay home & renew in 2 minutes
                            </p>
                        </div>
                        <div>
                        <img  className="img-tray-r-img" src="./Images/numBike/jam_thunder-f.svg" alt="" />
                        <img  className="img-tray-r-img2" src="./Images/numBike/Instant Policy.svg" alt="" />
                        <img  className="img-tray-r-img" src="./Images/numBike/iconoir_percentage-round.svg" alt="" />
                        <img  className="img-tray-r-img5" src="./Images/numBike/Best Prices.svg" alt="" />
                        <img  className="img-tray-r-img" src="./Images/numBike/Frame 63.svg" alt="" />
                        <img  className="img-tray-r-img2" src="./Images/numBike/No Paperwork.svg" alt="" />
                        </div>
                        <div className="ipntflied-r-div">
                        <TextField style={{width: '65%'}}
                        error={fieldflag}
                        id="standard-error-helper-text"
                        label={fieldflag ? "error" :"Enter Bike Number"}
                        placeholder='Enter Bike Number (eg. DL1SAB1234)'
                        value={bikeno}
                        pattern="[A-Z]{2}[0-9]{1}[A-Z]{2}[0-9]{4}"
                        onChange={(e)=>{setBikeno(e.target.value.toUpperCase())}}
                        helperText={fieldflag? "Incorrect entry.":""}
                        variant="outlined"
                        required 
                        />
                        </div>
                        <div className="ipntflied-r-btn">
                            <Button style={{width: '65%'}}
                            variant="contained"
                            onClick={()=>{
                                if(bikeno!="" && /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{3,4}$/i.test(bikeno)){
                                setFieldflag(false)
                                dispatch(addbikenum(bikeno))

                            }
                                else{
                                    setFieldflag(true)
                                }
                            }}>View Prices</Button>
                        </div>
                        <div className="img-tray2-r">
                        <img  className="img-tray2-r-img3" src="./Images/numBike/Vector.svg" alt="" />
                        <img  className="img-tray2-r-img23" src="./Images/numBike/Button.svg" alt="" />
                        <img  className="img-tray2-r-img2" src="./Images/numBike/Vector-1.svg" alt="" />
                        <img  className="img-tray2-r-img4" src="./Images/numBike/emojione-monotone_new-button.svg" alt="" />
                        <img  className="img-tray2-r-img2" src="./Images/numBike/Button-1.svg" alt="" />
                        <img  className="img-tray2-r-img2" src="./Images/numBike/Vector-1.svg" alt="" />
                        </div>
                        <img  className="img-tray2-r-img22" src="./Images/numBike/Button (1).svg" alt="" />
                </div>
            </div>
            <div  className="p_div_descriotop_r">
                <p className="description_nu-r">
                    Disclaimer:
                    All savings provided by insurers as per IRDAI approved insurance plans. Standard T&C apply.
                    Actual time for transaction may vary subject to additional data requirements and operational processes.
                    Policybazaar Insurance Brokers Private Limited (formerly known as Policybazaar Insurance Web Aggregator Private Limited)
                    CIN: U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44, Gurgaon, Haryana – 122001) Policybazaar is now registered as a Direct Broker
                    Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024, License category- Direct Broker (Life & General)
                    Visitors are hereby informed that their information submitted on the website may be shared with insurers. Product information is authentic and
                    solely based on the information received from the insurers.
                </p>
            </div>
        </div>
    )
}