import { useSelector } from "react-redux"
import "./plan.css"

function Plan({imageSrc,plantype,price})
{
    const plans=useSelector(store=>store)

    console.log(plans)

    return (
        <div className="planItem-skb">
           <div><img src={imageSrc}></img></div>
           <div>{plantype}</div>
           <div style={{backgroundColor:"blue",borderRadius:"8px",color:"white"}}><h4 style={{margin:"10px"}}>{price}</h4> </div>
        </div>
    )
}

export {Plan}