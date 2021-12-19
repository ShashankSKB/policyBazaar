import { Inputselectbox } from '../../util/selectbox';

import { Inputerror } from '../../util/inputerror';
import { NormalText } from '../../util/normaltext';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import "../step1/proposol.css"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { set_info3 } from '../../../Redux/action';
const axios = require('axios');
function Proposal3()
{   
    const store=useSelector(state=>state.addressdetail);
    
    const dispatch = useDispatch();
     const history=useHistory()
    const [engine,setEngine]=useState("");
    const [chasis,setChasis]=useState("");
    
    
    const [errorMessageEngine,setErrorMessageEngine]=useState("")
    const [errorMessageChasis,setErrorMessageChasis]=useState("")
    
    
    const [info3,setInfo3]=useState({
        Nname:"",
        Nage:"",
        date:"12/04/2021",
        registration:"AJ-9903"

})
    
    const handleChange=(e)=>{
        console.log(e.target.value,e.target.name)
        if(e.target.name=="Engine")
        {
            setEngine(e.target.value);
        }
        if(e.target.name=="Chasis")
        {
            setChasis(e.target.value);
        }
        setInfo3({
            ...info3,
            [e.target.name]:e.target.value
        })


        
    }

    const handlesubmit=(e)=>{

        e.preventDefault();
        if(engine=="")
        {
            setErrorMessageEngine("error")
            console.log("errorMessage",errorMessageEngine)
        }
        else{
            setErrorMessageEngine("")
        }

        if(chasis=="")
        {
            setErrorMessageChasis("error")
        }
        else{
           
            setErrorMessageChasis("")
        }

        
       

        if(engine&&chasis!= "")
        {
            console.log("proceed")
            
            // const postinfo=async()=>{
                
            //     // try{
            //     //     const {data}=await axios.post('http://localhost:3004/info3', info3)
            //     // }
            //     // catch(err)
            //     // {
            //     //     console.log("error",err);

            //     // }
                

            // }

            // postinfo();

            dispatch(set_info3(info3));
            
                console.log("store after dspatch info1",store)
            history.push("/login")
        }
    }
    
const value="MH34"
    


    return (
        <div className='gridparent-skb'>
            <form onSubmit={(e)=>handlesubmit(e)}>
            <div className='step1-header-skb'>
                <p>Proposal step 3/3</p>
            </div>
            
             <Grid container spacing={2} >

             <Grid item xs={6} md={3} >
            <TextField
             
                id="fullWidth" 
                fullWidth label="Registration Number*"
                name='Engine'
                onChange={(e)=>handleChange(e)}
                type="text"
                value={value}
                // helperText={errorMessage}
                />
            </Grid>

            <Grid item xs={6} md={9} >
            <TextField
             
                id="fullWidth" 
                fullWidth label=""
                name='Chasis'
                onChange={(e)=>handleChange(e)}
                type="text"
                // helperText={errorMessage}
                />
            </Grid>
                 

             <Grid item xs={6} md={12} >
            <TextField
             error={errorMessageEngine == "error"}
                id="fullWidth" 
                fullWidth label="Engine Number*"
                name='Engine'
                onChange={(e)=>handleChange(e)}
                type="text"
                // helperText={errorMessage}
                />
            </Grid>

            <Grid item xs={6} md={12} >
            <TextField
             error={errorMessageChasis == "error"}
                id="fullWidth" 
                fullWidth label="Chasis Number*"
                name='Chasis'
                onChange={(e)=>handleChange(e)}
                type="number"
                // helperText={errorMessage}
                />
            </Grid>

            <Grid item xs={6} md={4} >
            <TextField
            
                id="fullWidth" 
                fullWidth label="Date"
                name='Nage'
                onChange={(e)=>handleChange(e)}
                type="number"
                // helperText={errorMessage}
                />
            </Grid>

            <Grid item xs={6} md={4} >
            <TextField
             
                id="fullWidth" 
                fullWidth label="Month"
                name='Nage'
                onChange={(e)=>handleChange(e)}
                type="number"
                // helperText={errorMessage}
                />
            </Grid>

            <Grid item xs={6} md={4} >
            <TextField
             
                id="fullWidth" 
                fullWidth label="Year"
                name='Nage'
                onChange={(e)=>handleChange(e)}
                type="number"
                // helperText={errorMessage}
                />
            </Grid>

            
            

          
            
             </Grid>


            <input type="submit" className='submitButton-skb' value="CONTINUE TO PAY   >>"></input>
            
             </form>

        </div>
    )
}

export {Proposal3}