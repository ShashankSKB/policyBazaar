import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Login } from './Login page/Logni';

function Check()
{
    const [isopen,setIsopen]=useState(false);

    return (
        <div>
        <div onClick={()=>{
            
            setIsopen(!isopen)
        }}>
            <h1>Show modal</h1>

          {isopen &&  <Login className='modal_check' ></Login>}
        </div>
        </div>
        
    )
}

export {Check}