import "./planBar.css"
function Nav()
{

    return (
        <div className="nav-skb">
            <div className="nav-skb_child1">
                {/* <div><h4>Comprehensive Cover</h4></div>
                <div><h4>Third Party Only Cover</h4></div> */}
                <a href="#">Comprehensive Cover</a>
                <a href="#">Third Party Only Cover</a>
            </div>
            <div className="nav-skb_child">
                <div >Plan Tenure :
                <select>
                    <option>1 year</option>
                    <option>2 year</option>
                    <option>3 year</option>
                </select>
                </div>
               
            </div>
        </div>
    )
}

export {Nav}