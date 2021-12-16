import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";


export default function Bikenotodetails(){
    const isbikeno=useSelector(state=>state.vehicledetail.isbikeno)
    if(isbikeno){
        return(
            <Redirect to="/bikedetail" />
            )
        }else{
            return(
            <Redirect to="/bikeno" />
        )
    }
}