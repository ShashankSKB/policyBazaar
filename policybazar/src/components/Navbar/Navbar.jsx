import logo from "../../images/logo.png"
import vector1 from "../../images/Vector1.png"
import "./navbar.css"
export const Navbar=()=>{
    return(
        <>
        <div className="navbar">
        <img className="logo" src={logo} alt="logo"/>
        <div className="navbar-insu">
        <p >Insurance Products</p> 
        <img className="navbar-vec" src={vector1} alt="arrow"/>
        </div>
        <div className="navbar-rev">
        <p >Renew Your Policy</p>
        <img className="navbar-vec1" src={vector1} alt="arrow"/>
        </div>
        <div className="navbar-file">
        <p>File a claim</p>
        </div>
        <div className="navbar-sur">
        <p >Support</p>
        <img className="navbar-vec2" src={vector1} alt="arrow"/>
        </div>
        <div className="navbar-sign">
        <button>Sign in</button>
        </div>
        </div>
        </>
    )
}