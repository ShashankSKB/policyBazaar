import { ADD_PLAN, GET_PLANS, SET_INFO1, SET_INFO2, SET_INFO3, SET_PLAN } from "./actionTypes"

const initstate={

    data:[
        {
            "id": 1,
            "companyIcon": "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif",
            "type": "Regular Third Party Only",
            "price": 752
          },
          {
            "id": 2,
            "companyIcon": "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/SBI.gif",
            "type": "Limited Third Party Only",
            "price": 752
          },
          {
            "id": 3,
            "companyIcon": "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/EdelweissTP.gif",
            "type": "Regular Third Party Only",
            "price": 752
          },
          {
            "id": 4,
            "companyIcon": "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/IFFCOTOKIO.gif",
            "type": "Limited Third Party Only ",
            "price": 752
          },
          {
            "id": 5,
            "companyIcon": "https://static.pbcdn.in/twowheeler-cdn/InsurerImages/CholaMandalam.gif",
            "type": "Regular Third Party Only",
            "price": 752
          }
    ],

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

        case SET_INFO1:{
            return {
                ...state,
                info1:action.payload
            }
        }

        case SET_INFO2:{
            return {
                ...state,
                info2:action.payload
            }
        }

        case SET_INFO3:{
            return {
                ...state,
                info3:action.payload
            }
        }

        


        
    default :
    return state
    }

}