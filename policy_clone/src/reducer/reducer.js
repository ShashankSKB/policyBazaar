import { ADD_PLAN } from "./actionTypes"

const initstate={
    plans:{
        loading:true,
        data:[],
        error:false
    }
}


export const reducer=(state=initstate,action)=>{

    switch (action.type)
    {
        case ADD_PLAN:{
            return {
                ...state,
                data:[...state,action.payload]
            }
        }

        
    default :
    return state
    }

}