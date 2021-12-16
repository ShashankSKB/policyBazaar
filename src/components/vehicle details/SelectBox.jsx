import React from 'react'

export default function SelectBox({label,labelvalue,flag,nflag}){

    return(
        <div  className="selectBox-r" onClick={()=>{
            labelvalue(label)
           flag(false)
           if(nflag){
           nflag(true)}
        }}>
            {label}
        </div>
    )
}