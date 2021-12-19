import React, { useState } from 'react';

import {TextField,Button,Box} from "@mui/material"
import Autocomplete from '@mui/material/Autocomplete';
import "./Twheel.css"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addbikedetails, addbikenum } from '../../Redux/actions/NumBikeation';
import SelectBox from "./SelectBox"
import Selectrender from './Selectrender';

const makedata=[
    "TVS",
    "HONDA",
    "BAJAJ",
    "HERO HONDA",
    "YAMAHA",
    "HERO",
    "SUZUKI",
    "ROYAL ENFIELD"
    ,"MAHINDRA",
    "KTM",
    "LML",
    "HARLEY DAVIDSON",

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
    "2009","2008","2007","2006"
]
const modeldata=[
    "APCHE",
    "SCOOTY",
    "JUPITER",
    "WEGO",
    "STAR CITY",
    "SPORT",
    "XL SUPER",
    "ZEST"
    ,"NTORQ",
    "STAR",
    "VICTOR",
    "PHOENIX",
    "CENTRA","CHAMP",

]

const wvarient=[
    "DLX (150 CC)",
    "RTR 180 (180 CC)",
    "RTR 4V (200 CC)",
    "RTR FI (160 CC)",
    "RTR 4V (160 CC)",
    "TRT 160 RR (160 CC)",
]
export default function Twheelmake(){
    const [bikemake,setBikemake]=useState("")
    const [bikemodel,setBikemodel]=useState("")
    const [year,setYear]=useState("")
    const [makeflag,setMakeflag]=useState(true)
    const [modelfalg,setModelflag]=useState(false)
    const [yearflag,setYearflag]=useState(false)
    const [errorflag,setErrorflag]=useState(false)
    const [vartflag,setVartflag]=useState(false)
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
            <div className="bikeno-conti-d-r">
                <div className="bikeno-img-r">
                    <img className="bikeno-img-i-r" src="./Images/numBike/Logo (1).svg" alt="" />
                    {/* <img className="bikeno-img-aki-r" src="./Images/numBike/image 2.svg" alt="" /> */}          
                    <div className="bikedetail-r-inpt">
                        <h4 className="h4-modeldetail-r">
                        Your Vehicle Details
                        </h4>
                  
                   <div className="padding-left-inpt-r">
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
                            setVartflag(false)
                            setMakeflag(false);
                            setModelflag(false);
                            setYearflag(true);
                        }}
                    />
                      <RedBar />
                      <div className="modelbtn-r">
                    <Button  style={{width: '92%'}}  
                    disabled={bikemake=="" || bikemodel=="" || year=="" || !/^(.*\s+.*)+$/i.test(bikemodel)}
                    variant="contained" 
                    onClick={()=>{
                        if(bikemake!=="" && bikemodel!=="" && year!=="" &&  /^(.*\s+.*)+$/i.test(bikemodel)){
                            dispatch(addbikedetails({make:bikemake,model:bikemodel,year:year}))
                            setErrorflag(false)
                            history.push("/policystep")
                        }
                        else
                        {
                                setErrorflag(true)
                        }
                    }}>GET QOUTES</Button>
                   </div>
                    </div> 
                    </div>
                </div>
                
                            
                <div className="bikeno-model-r">
               {makeflag ? <div className="selection-models-r">
                   <div className="detail-div-r">
                        <img className="back-btn-r" src="./Images\numBike\progess\Back button.svg" alt="" />
                        <p className="vehel-text-r">Select Two Wheeler Make</p>
                   </div>
                           <Selectrender
                            data={makedata}
                            setflag={setBikemake}
                            label={"Select Make"}
                            flag={setMakeflag} nflag={setModelflag}
                            />
                            <p className="inpt-down-r-desc">Popular makes ----</p>
                           <div className="items-grid-r">
                            {makedata.map((e,index)=>(
                                <SelectBox key={index} label={e} labelvalue={setBikemake} flag={setMakeflag} nflag={setModelflag} />
                            ))}
                              <p className="inpt-down-r-end">Can’t find your two wheeler’s make? Click here</p>
                           </div>
                        </div> 
                       : modelfalg ? <div className="selection-models-r">
                       <div className="detail-div-r">
                        <img className="back-btn-r" src="./Images\numBike\progess\Back button.svg" alt="" />
                           <p className="vehel-text-r">Select Two Wheeler Model</p>
                           </div>
                           <Selectrender
                            data={modeldata}
                            setflag={setBikemodel}
                            label={"Select Model"}
                            flag={setModelflag} nflag={setVartflag}
                            />
                              <p className="inpt-down-r-desc">Popular models ----</p>
                           <div className="items-grid-r">
                            {modeldata.map((e,index)=>(
                                <SelectBox key={index} label={e} labelvalue={setBikemodel}  flag={setModelflag} nflag={setVartflag}/>
                            ))}
                               <p className="inpt-down-r-end">Can’t find your two wheeler’s models? Click here</p>
                           </div> 
                        </div>
                        : vartflag ? <div className="selection-models-r">
                        <div className="detail-div-r">
                         <img className="back-btn-r" src="./Images\numBike\progess\Back button.svg" alt="" />
                            <p className="vehel-text-r">Select Two Wheeler Variant</p>
                            </div>
                            <Selectrender
                             data={wvarient}
                             setflag={setBikemodel}
                             label={"Select Variant"}
                             flag={setVartflag} nflag={setYearflag}  ll={bikemodel}
                             />
                               <p className="inpt-down-r-desc">Popular Variant ----</p>
                            <div className="items-grid-r">
                             {wvarient.map((e,index)=>(
                                 <SelectBox key={index} label={e}  ll={bikemodel} labelvalue={setBikemodel}  flag={setVartflag} nflag={setYearflag}/>
                             ))}
                                <p className="inpt-down-r-end">Can’t find your two wheeler’s Variants? Click here</p>
                            </div> 
                         </div>
                         : yearflag ? <div className="selection-models-r">
                        <div className="detail-div-r">
                        <img className="back-btn-r" src="./Images\numBike\progess\Back button.svg" alt="" />
                           <p className="vehel-text-r">Select Registration Year</p>
                           </div>
                            <Selectrender
                            data={yeardata}
                            setflag={setYear}
                            flag={setMakeflag}
                            label={"Select Ragistation Year"}
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





