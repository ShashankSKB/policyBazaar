import { ADD_PLAN, GET_PLANS } from "./actionTypes"

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

        case GET_PLANS:{
            return {
                ...state,
                data:action.payload
            }
        }

        
    default :
    return state
    }

}