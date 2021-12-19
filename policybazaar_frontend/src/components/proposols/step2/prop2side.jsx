import "../step1/prop1side.css"

import { useEffect, useState } from "react";
import { useSelector } from "react-redux"


function Prop2side()
{
    const [loading,setLoading]=useState(false);
    const state= useSelector(store=>store.addressdetail.choice)

    useEffect(()=>{ 
        if(state)
        {
            setLoading(true);
        }
    },[])
   
   

    return loading ?(
        <div className="prop1parent-skb">
            <div className="prop1parent-skb-child">
                <div>
                <img src={state.companyIcon}></img>
                </div>
                <div>
                    <p style={{background:"#F5F5F5"}}>Claim made : N/A</p>
                </div>
            </div>

            <div className="prop1parent-skb-child">
                <div>
                    <p>IDV:N/A</p>
                    <p>NCB:N/A</p>
                 </div>
                <div className="prop1parent-skb-child-grey">
                    <p style={{background:"#F5F5F5"}}>Zero Deprecation : N/A</p>
                </div>
            </div>

            <div className="prop1parent-skb-child">
                <div>
                    <p style={{color:"green",fontSize:"20px"}}>RS .{state.price}*</p>
                    <p style={{color:"blue"}}>Premium Breakup</p>
                 </div>
                 <div>
                     <p style={{background:"#F5F5F5"}}>Working policy</p>
                 </div>
                
            </div>
        </div>
    ) :
    (
        <div>
            <h1>Loading....</h1>
        </div>
    )
}


export {Prop2side}