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
    const [errorMessage,setErrorMessage]=useState("")
    

    const handleChange=(e)=>{
        console.log(e.target.value,e.target.name)
        setOwner(e.target.value);
    }

    const handlesubmit=(e)=>{

        e.preventDefault();
        if(owner=="")
        {
            setErrorMessage("error")
            console.log("errorMessage",errorMessage)
        }
        else{
            setErrorMessage("")
        }
    }
    

    // React.useEffect(() => {
    //     // Set empty erroMessage only if text is less than MAX_LENGTH
    //     // and errorMessage is not empty.
    //     // avoids setting empty errorMessage if the errorMessage is already empty
    //     if ( errorMessage=="error") {
    //       setErrorMessage("");
    //     }
    //   }, [owner, errorMessage]);


    return (
        <div className='gridparent-skb'>
            <form onSubmit={(e)=>handlesubmit(e)}>

            
             <Grid container spacing={2} >

             <Grid item xs={6} md={3}>
             <Inputselectbox width={220} label="Title" value1="Mr" value2="Ms" ></Inputselectbox>
             </Grid>
             
            <Grid item xs={6} md={9} >
             <TextField
             error={errorMessage == "error"}
                id="fullWidth" 
                fullWidth label="vehicle owner"
                name='Owner'
                onChange={(e)=>handleChange(e)}
                // helperText={errorMessage}
                />
            </Grid>
            
            <Grid item xs={6} md={12} >
            <NormalText label="Mobile Number *"></NormalText>
            </Grid>

            <Grid item xs={6} md={12} >
            <NormalText label="Email id*"></NormalText>
            </Grid>
            <Grid item xs={6} md={12} >
            <NormalText label="Communication address*"></NormalText>
            </Grid>

            
            <Grid item xs={6} md={6}>
             <Inputselectbox  width={465} label="City/District"></Inputselectbox>
             </Grid>
            <Grid item xs={6} md={6} >
            <NormalText label="State*"></NormalText>
            </Grid>
           
            
            <Grid item xs={6} md={12} >
            <NormalText label="Pincode*"></NormalText>
            </Grid>
             </Grid>


            <input type="submit"></input>
            
             </form>

        </div>
    )
}

export {Proposal1}