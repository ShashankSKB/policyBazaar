import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect } from "react";
export default function Selectrender({setflag,data,label,ll,flag,nflag}){
    useEffect(() =>{

    },[data])
return(<Autocomplete
    disablePortal
    id="combo-box-demo"
    options={data}
    sx={{ width: "100%" }}
    value={""}
    renderInput={(params) => <TextField {...params} 
    onSelect={(e)=>{
      
      if(ll!==undefined){
        console.log("ll",ll);
      setflag(ll+" "+e.target.value)
      }else{
        setflag(e.target.value)
      }
      // flag(false)
      // if(nflag){
      //   nflag(true)
      // }
    }}
      label={label} />}
    />)
}