import { Inputselectbox } from '../../util/selectbox';

import { Inputerror } from '../../util/inputerror';
import { NormalText } from '../../util/normaltext';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import "../step1/proposol.css"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
function Proposal2()
{  const history=useHistory()
    const [Nname,setNname]=useState("");
    const [Nage,setNage]=useState("");
    
    
    const [errorMessageNname,setErrorMessageNname]=useState("")
    const [errorMessageNage,setErrorMessageNage]=useState("")
    
    
    
    
    const handleChange=(e)=>{
        console.log(e.target.value,e.target.name)
        if(e.target.name=="Nname")
        {
            setNname(e.target.value);
        }
        if(e.target.name=="Nage")
        {
            setNage(e.target.value);
        }
       


        
    }

    const handlesubmit=(e)=>{

        e.preventDefault();
        if(Nname=="")
        {
            setErrorMessageNname("error")
            console.log("errorMessage",errorMessageNname)
        }
        else{
            setErrorMessageNname("")
        }

        if(Nage=="")
        {
            setErrorMessageNage("error")
        }
        else{
           
            setErrorMessageNage("")
        }

        
       

        if(Nname&&Nage!= "")
        {
            console.log("proceed")
            history.push("/step3")
        }
    }
    

    


    return (
        <div className='gridparent-skb'>
            <form onSubmit={(e)=>handlesubmit(e)}>
            <div className='step1-header-skb'>
                <p>Proposal step 1/3</p>
            </div>
            
             <Grid container spacing={2} >

             <Grid item xs={6} md={12} >
            <TextField
             error={errorMessageNname == "error"}
                id="fullWidth" 
                fullWidth label="Nominee Name*"
                name='Nname'
                onChange={(e)=>handleChange(e)}
                type="text"
                // helperText={errorMessage}
                />
            </Grid>


             <Grid item xs={6} md={12}>
             <Inputselectbox width={900} label="Nominee Relationship*" value1="Wife" value2="Mother" value3="Father"></Inputselectbox>
             </Grid>
             
            
            
            

            <Grid item xs={6} md={12} >
            <TextField
             error={errorMessageNage == "error"}
                id="fullWidth" 
                fullWidth label="Nominee Age*"
                name='Nage'
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

export {Proposal2}