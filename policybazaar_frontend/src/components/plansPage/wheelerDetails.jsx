import { useEffect } from "react"
import { useSelector } from "react-redux"
import "./wheelerDetails.css"

function WheelerBox()
{
    let data=useSelector((state)=>state.vehicledetail)
    const { bikenum,
    bikemake,
    bikemodel,
    bikeyear}=data
    useEffect(()=>{
        console.log(data);
    })
    return (
        <div className="parentbox-skb">
            <div className="child1-skb">
                <p>Your Two Wheeler</p>
                <div>edit</div>
            </div>
            <div className="child2-skb">
                <img src="https://twowheeler.policybazaar.com/images/icon.svg"></img>
                <div>
                    <label>Vehicle</label>
                    <p>{bikemake} - {bikemodel}</p>
                </div>
            </div>
            <div className="child3-skb">
                <div>
                    <label>Year</label>
                    <p>{bikeyear}</p>
                </div>
                <div>
                <label>RTO</label>
                    <p>{bikenum}</p>
                    
                </div>
            </div>
        </div>
    )
}

export {WheelerBox}