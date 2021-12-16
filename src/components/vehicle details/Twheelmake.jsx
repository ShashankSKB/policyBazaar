import React, { useState } from 'react';

import {TextField,Button,Box} from "@mui/material"
import Autocomplete from '@mui/material/Autocomplete';
import "./Twheel.css"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addbikedetails, addbikenum } from '../../Redux/actions/NumBikeation';
import SelectBox from "./SelectBox"

const makedata=[
    "HONDA",
    "BAJAJ",
    "HERO HONDA",
    "TVS",
    "YAMAHA",
    "HERO",
    "SUZUKI",
    "ROYAL ENFIELD"
    ,"MAHINDRA",
    "KTM",
    "LML",
    "HARLEY DAVIDSON"
]
const yeardata=[
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014"
    ,"2013",
    "2012",
    "2011",
    "2010",
]
const modeldata=[
    "ACTIVA",
    "CB SHINE",
    "CB UNICORN",
    "AVATOR",
    "DIO",
    "DREAM YUGA",
    "SHINE",
    "UNICRON"
    ,"CB TWISTER",
    "ACTIVA-L",
    "CB 350 RS",
    "CRF 1000L",
]

export default function Twheelmake(){
    const [bikemake,setBikemake]=useState("")
    const [bikemodel,setBikemodel]=useState("")
    const [year,setYear]=useState("")
    const [makeflag,setMakeflag]=useState(true)
    const [modelfalg,setModelflag]=useState(false)
    const [yearflag,setYearflag]=useState(false)
    const [errorflag,setErrorflag]=useState(false)
    const dispatch=useDispatch()
    const history=useHistory()
    const bikenum=useSelector(state=>state.vehicledetail.bikenum)

    function RedBar() {
        return (
          <Box
            sx={{
              height: 20,
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgb(255 132 132 / 25%)',
            }}
          />
        );
      }
    return(
        <div className="container-r">
            <div className="bikeno-conti-r">
                <div className="bikeno-img-r">
                    <img className="bikeno-img-i-r" src="./Images/numBike/Logo (1).svg" alt="" />
                    {/* <img className="bikeno-img-aki-r" src="./Images/numBike/image 2.svg" alt="" /> */}          
                    <div className="bikedetail-r-inpt">
                        <h4 className="h4-modeldetail-r">
                        Your Vehicle Details
                        </h4>
                  
                    <TextField  style={{width: '92%'}}
                        id="standard-error-helper-text"
                        label="Bike Number"
                        value={bikenum}
                        variant="outlined"
                        // required 
                     /> 
                     <RedBar />
                    <TextField style={{width: '92%'}}
                    //    error={errorflag===""}
                        id="standard-error-helper-text"
                        label={"Select Make"}
                        placeholder='Select Make'
                        value={bikemake}
                        // helperText={fieldflag? "Incorrect entry.":""}
                        variant="outlined"
                        // required 
                        onClick={()=>{

                            setMakeflag(true);
                            setModelflag(false);
                            setYearflag(false);
                        }}
                    />
                      <RedBar /> 
                    <TextField style={{width: '92%'}}
                        // error={errorflag===""}
                        id="standard-error-helper-text"
                        label={"Select Model/Variant"}
                        placeholder='Select Make'
                        value={bikemodel}
                        // helperText={fieldflag? "Incorrect entry.":""}
                        variant="outlined"
                        // required 
                        onClick={()=>{

                            setMakeflag(false);
                            setModelflag(true);
                            setYearflag(false);
                        }}
                    />
                      <RedBar /> 
                    <TextField style={{width: '92%'}}
                        // error={errorflag===""}
                        id="standard-error-helper-text"
                        label={"Select Ragistation Year"}
                        placeholder='Select Ragistation Year'
                        value={year}
                        helperText={errorflag? "Incorrect entry.":""}
                        variant="outlined"
                        // required 
                        onClick={()=>{

                            setMakeflag(false);
                            setModelflag(false);
                            setYearflag(true);
                        }}
                    />
                      <RedBar />
                      <div className="modelbtn-r">
                    <Button  style={{width: '92%'}}  
                    // disabled={bikemake=="" || bikemodel=="" || year==""}
                    variant="contained" 
                    onClick={()=>{
                        if(bikemake!=="" && bikemodel!=="" && year!==""){
                            dispatch(addbikedetails({make:bikemake,model:bikemodel,year:year}))
                            setErrorflag(false)
                        }
                        else
                        {
                                setErrorflag(true)
                        }
                    }}>GET QOUTES</Button>
                    </div> 
                    </div>
                </div>
                
                            
                <div className="bikeno-model-r">
               {makeflag ? <div className="selection-models-r">
                           <p className="vehel-text-r">Select Two Wheeler Make</p>
                           <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={makedata}
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params} 
                            onSelect={(e)=>{setBikemake(e.target.value)}}
                            value={bikemake}
                              label="Select Make" />}
                            />
                           <div className="items-grid-r">
                            {makedata.map((e,index)=>(
                                <SelectBox key={index} label={e} labelvalue={setBikemake} flag={setMakeflag} nflag={setModelflag} />
                            ))}
                           </div>
                       </div> : modelfalg ? <div className="selection-models-r">
                           <p className="vehel-text-r">Select Two Wheeler Variant</p>
                           <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={modeldata}
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params} 
                            onSelect={(e)=>{setBikemodel(e.target.value)}}
                              label="Select Model/Variant" />}
                            />
                           <div className="items-grid-r">
                            {modeldata.map((e,index)=>(
                                <SelectBox key={index} label={e} labelvalue={setBikemodel}  flag={setModelflag} nflag={setYearflag}/>
                            ))}
                           </div> 
                        </div> : yearflag ? <div className="selection-models-r">
                           <p className="vehel-text-r">Select Registration Year</p>
                           <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={yeardata}
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params} 
                            
                            onSelect={(e)=>{setYear(e.target.value)}}
                              label="Select Ragistation Year" />}
                            />
                           <div className="items-grid-r">
                            {yeardata.map((e,index)=>(
                                <SelectBox key={index} label={e} labelvalue={setYear} flag={setMakeflag}  />
                            ))}
                           </div> 
                       </div> : ""}
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





