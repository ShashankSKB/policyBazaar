import { ADD_PLAN, GET_PLANS, SET_INFO, SET_PLAN } from "./actionTypes"

const initstate={
    plans:{
        loading:true,
        data:[],
        choice:{},
        
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

        
        case SET_PLAN:{
            return {
                ...state,
                choice:action.payload
            }
        }

        


        
    default :
    return state
    }

}