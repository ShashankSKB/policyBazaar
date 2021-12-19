import "./sidecard.css"

function SideCard()
{


    return (
        <div>

        
        <div className="sideParent-skb">
            <div className="child1s-skb">
                <p>Insured Declared Value (IDV)</p>
            
            </div>
          
            <div className="child2s-skb">
                <p>IDV: N/A</p>
            </div>

            <div className="child3s-skb">
                <img src="https://twowheeler.policybazaar.com/images/idv-icon.png"></img>
                <div><p>Know More about IDV</p></div>
            </div>
        </div>

        <div className="sideParent-skb">
            <div className="child1s-skb">
            <p>No Claim Bonus</p>
            
            </div>
          
            <div className="child2s-skb">
            <p>Current Applicable NCB : N/A</p>
            <p>Previous Year NCB : N/A</p>
            {/* <p>Claims in last policy : N/A</p> */}
                
            </div>

            <div className="child3s-skb">
                <img src="https://twowheeler.policybazaar.com/images/idv-icon.png"></img>
                <div><p>Know More about NCB</p></div>
            </div>
        </div>

        </div>
    )
}

export {SideCard}