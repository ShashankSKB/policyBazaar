import { ADDBIKENUMBER } from "../actiontypes/NumBikeActiontypes";

const init={
    isbikeno:false,
    bikenum:""
  };
export const numBikeReducer=(state=init,{type,payload})=>{
    switch (type) {
        case ADDBIKENUMBER:
            return {...state,bikenum:payload,isbikeno:true};
        default:
            return {...state}
    }
}