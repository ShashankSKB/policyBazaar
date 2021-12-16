import { ADDBIKEDETAILS, ADDBIKENUMBER, ALLBIKEDETAILS, BIKENUMFLAG } from "../actiontypes/NumBikeActiontypes"

export const numBikeflagfalse=()=>{
    return{
        type:BIKENUMFLAG
    }
}
export const allbikedetails=()=>{
    return{
        type:ALLBIKEDETAILS
    }
}
export const addbikenum=(data)=>{
    return{
        type:ADDBIKENUMBER,
        payload:data
    }
}
export const addbikedetails=(data)=>{
    return{
        type:ADDBIKEDETAILS,
        payload:data
    }
}
