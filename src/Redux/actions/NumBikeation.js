import { ADDBIKENUMBER, BIKENUMFLAG } from "../actiontypes/NumBikeActiontypes"

export const numBikeflag=()=>{
    return{
        type:BIKENUMFLAG
    }
}
export const addbikenum=(data)=>{
    return{
        type:ADDBIKENUMBER,
        payload:data
    }
}