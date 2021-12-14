import "./wheelerDetails.css"

function WheelerBox()
{

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
                    <p>Bajaj pulsar</p>
                </div>
            </div>
            <div className="child3-skb">
                <div>
                    <label>Year</label>
                    <p>2014</p>
                </div>
                <div>
                <label>RTO</label>
                    <p>MH34AJ9903</p>
                    
                </div>
            </div>
        </div>
    )
}

export {WheelerBox}