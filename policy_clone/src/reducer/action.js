import { ADD_PLAN, SET_PLAN } from "./actionTypes"
import { GET_PLANS } from "./actionTypes"
import { SET_INFO } from "./actionTypes"
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

export const set_plan=(payload)=>{

    return {
        type: SET_PLAN,
        payload
    }

}

export const set_info=(payload)=>{

    return {
        type:SET_INFO,
        payload
    }
}