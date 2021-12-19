import "./topComp.css"
function Top()
{


    return(
        <div className="components-skb">
            <div className="box1">
                <p>Share Quotes</p>
            </div>
            <div className="box2">Language 
                <select>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Marathi</option>
                    <option>Punjabi</option>
                </select>
            </div>
        </div>
    )
}

export {Top}