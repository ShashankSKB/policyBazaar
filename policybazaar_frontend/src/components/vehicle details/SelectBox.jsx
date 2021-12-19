import React from 'react'

export default function SelectBox({label,labelvalue,flag,nflag,ll}){

    return(
        <div  className="selectBox-r" onClick={()=>{
            if(ll!==undefined){
                labelvalue(ll+" "+label)
            }else{
            labelvalue(label)}
           flag(false)
           if(nflag){
           nflag(true)}
        }}>
            {label}
        </div>
    )
}