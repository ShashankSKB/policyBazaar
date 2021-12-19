import { ADD_PLAN, SET_PLAN } from "./actionTypes"
import { GET_PLANS } from "./actionTypes"
import { SET_INFO2,SET_INFO3 } from "./actionTypes"
import { SET_INFO1 } from "./actionTypes"
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

export const set_info1=(payload)=>{

    return {
        type:SET_INFO1,
        payload
    }
}

export const set_info2=(payload)=>{

    return {
        type:SET_INFO2,
        payload
    }
}

export const set_info3=(payload)=>{

    return {
        type:SET_INFO3,
        payload
    }
}