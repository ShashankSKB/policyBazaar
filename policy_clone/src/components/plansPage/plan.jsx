import { useDispatch, useSelector } from "react-redux"
import "./plan.css"
import { Typography } from '@mui/material';
import { set_plan } from "../../reducer/action";
function Plan({imageSrc,plantype,price,data})
{
    const plans=useSelector(store=>store)

    const dispatch=useDispatch();
    console.log(plans)

    const handlePlan=()=>{

        console.log(data)

        dispatch(set_plan(data))
        console.log(plans)
        alert("plan added",data)
    }
    return (
     
        <div className="planItem-skb">
            
           <div><img src={imageSrc}></img></div>
           <div>{plantype}</div>
           <div style={{backgroundColor:"blue",borderRadius:"8px",color:"white"}}><h4 style={{margin:"10px"}} onClick={handlePlan}>{price}</h4> </div>
        </div>
    )
}

export {Plan}