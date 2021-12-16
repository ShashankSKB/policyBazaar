import { Inputselectbox } from '../util/selectbox';
import { NormalText } from '../util/normaltext';
import { Inputerror } from '../util/inputerror';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import "./proposol.css";
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Proposal1()
{
    const [owner,setOwner]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [pincode,setPincode]=useState("");
    const [errorMessageOwner,setErrorMessageOwner]=useState("")
    const [errorMessageMobile,setErrorMessageMobile]=useState("")
    const [errorMessageEmail,setErrorMessageEmail]=useState("")
    const [errorMessageAddress,setErrorMessageAddress]=useState("")
    const [errorMessageCity,setErrorMessageCity]=useState("")
    const [errorMessageState,setErrorMessageState]=useState("")
    const [errorMessagePincode,setErrorMessagePincode]=useState("")
    
    
    const handleChange=(e)=>{
        console.log(e.target.value,e.target.name)
        if(e.target.name=="Owner")
        {
            setOwner(e.target.value);
        }
        if(e.target.name=="Mobile")
        {
            setMobile(e.target.value);
        }
        if(e.target.name=="Email")
        {
            setEmail(e.target.value);
        }
        if(e.target.name=="Address")
        {
            setAddress(e.target.value);
        }
        if(e.target.name=="City")
        {
            setCity(e.target.value);
        }
        if(e.target.name=="State")
        {
            setState(e.target.value);
        }
        if(e.target.name=="Pincode")
        {
            setPincode(e.target.value);
        }


        
    }

    const handlesubmit=(e)=>{

        e.preventDefault();
        if(owner=="")
        {
            setErrorMessageOwner("error")
            console.log("errorMessage",errorMessageOwner)
        }
        else{
            setErrorMessageOwner("")
        }

        if(mobile=="")
        {
            setErrorMessageMobile("error")
        }
        else{
           
            setErrorMessageMobile("")
        }

        if(email=="")
        {
            setErrorMessageEmail("error")
        }
        else{
           
            setErrorMessageEmail("")
        }

        if(address=="")
        {
            setErrorMessageAddress("error")
        }
        else{
           
            setErrorMessageAddress("")
        }

        if(city=="")
        {
            setErrorMessageCity("error")
        }
        else{
           
            setErrorMessageCity("")
        }


        if(state=="")
        {
            setErrorMessageState("error")
        }
        else{
           
            setErrorMessageState("")
        }

        
        if(pincode=="")
        {
            setErrorMessagePincode("error")
        }
        else{
           
            setErrorMessagePincode("")
        }

        if(owner&&mobile&&email&&address&&city&&state&&pincode != "")
        {
            console.log("proceed")
        }
    }
    

    


    return (
        <div className='gridparent-skb'>
            <form onSubmit={(e)=>handlesubmit(e)}>
            <div className='step1-header-skb'>
                <p>Proposal step 1/3</p>
            </div>
            
             <Grid container spacing={2} >

             <Grid item xs={6} md={3}>
             <Inputselectbox width={160} label="Title" value1="Mr" value2="Ms" ></Inputselectbox>
             </Grid>
             
            <Grid item xs={6} md={9} >
             <TextField
             error={errorMessageOwner == "error"}
                id="fullWidth" 
                fullWidth label="vehicle owner"
                name='Owner'
                onChange={(e)=>handleChange(e)}
                // helperText="Mandatory"
                />
            </Grid>
            
            <Grid item xs={6} md={12} >
            <TextField
             error={errorMessageMobile == "error"}
                id="fullWidth" 
                fullWidth label="Mobile Number"
                name='Mobile'
                onChange={(e)=>handleChange(e)}
                type="number"
                // helperText={errorMessage}
                />
            </Grid>

            <Grid item xs={6} md={12} >
            <TextField
             error={errorMessageEmail == "error"}
                id="fullWidth" 
                fullWidth label="Email"
                name='Email'
                onChange={(e)=>handleChange(e)}
                type="email"
                // helperText={errorMessage}
                />
            </Grid>
            <Grid item xs={6} md={12} >
            <TextField
             error={errorMessageAddress == "error"}
                id="fullWidth" 
                fullWidth label="Address"
                name='Address'
                onChange={(e)=>handleChange(e)}
                type="text"
                // helperText={errorMessage}
                />
            </Grid>

            
            <Grid item xs={6} md={6}>
            <TextField
             error={errorMessageCity == "error"}
                id="fullWidth" 
                fullWidth label="City/District"
                name='City'
                onChange={(e)=>handleChange(e)}
                // helperText={errorMessage}
                />
             </Grid>
            <Grid item xs={6} md={6} >
            <TextField
             error={errorMessageState == "error"}
                id="fullWidth" 
                fullWidth label="State"
                name='State'
                onChange={(e)=>handleChange(e)}
                // helperText={errorMessage}
                />
            </Grid>
           
            
            <Grid item xs={6} md={12} >
            <TextField
             error={errorMessagePincode == "error"}
                id="fullWidth" 
                fullWidth label="Pincode"
                name='Pincode'
                onChange={(e)=>handleChange(e)}
                type="number"
                // helperText={errorMessage}
                />
            </Grid>
             </Grid>


            <input type="submit" className='submitButton-skb' value="Continue to step 2  >>"></input>
            
             </form>

        </div>
    )
}

export {Proposal1}