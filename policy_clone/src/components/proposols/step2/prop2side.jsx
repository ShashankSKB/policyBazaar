import "../step1/prop1side.css"

function Prop2side()
{

    return(
        <div className="prop1parent-skb">
            <div className="prop1parent-skb-child">
                <div>
                <img src="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif"></img>
                </div>
                <div>
                    <p>Claim made : N/A</p>
                </div>
            </div>

            <div className="prop1parent-skb-child">
                <div>
                    <p>IDV:N/A</p>
                    <p>NCB:N/A</p>
                 </div>
                <div className="prop1parent-skb-child-grey">
                    <p>Zero Deprecation : N/A</p>
                </div>
            </div>

            <div className="prop1parent-skb-child">
                <div>
                    <p style={{color:"green",fontSize:"20px"}}>RS 1,913*</p>
                    <p style={{color:"blue"}}>Premium Breakup</p>
                 </div>
                 <div>
                     <p>Working policy</p>
                 </div>
                
            </div>
        </div>
    )
}


export {Prop2side}