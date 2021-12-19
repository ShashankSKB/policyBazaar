import { useDispatch, useSelector } from "react-redux"
import "./plan.css"
import { Typography } from '@mui/material';
import { set_plan } from "../../Redux/action";
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
function Plan({imageSrc,plantype,price,data})
{
    const plans=useSelector(store=>store)
    const history=useHistory()
    const dispatch=useDispatch();
    console.log(plans)

    const handlePlan=()=>{

        console.log(data)

        dispatch(set_plan(data))
        console.log(plans)
        
        history.push("/step1")
           
        
        
    }
    return (
     
        <div className="planItem-skb">
            
           <div><img src={imageSrc}></img></div>
           <div>{plantype}</div>
           <div style={{backgroundColor:"blue",borderRadius:"8px",color:"white",justifyContent:"center",textAlign:"center"}}><h4 style={{margin:"10px"}} onClick={handlePlan}>{price}</h4> </div>
        </div>
    )
}

export {Plan}