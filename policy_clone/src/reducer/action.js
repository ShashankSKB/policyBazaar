import { ADD_PLAN } from "./actionTypes"
import { GET_PLANS } from "./actionTypes"

export const add_plan=(payload)=>{

    return {
        type:ADD_PLAN,
        payload
    }

}

export const get_plans=(payload)=>{

    return {
        type: GET_PLANS,
        payload
    }

}