import thunk from "redux-thunk";
import {numBikeReducer} from "../Reducer/NumBikereducer"
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import {reducer} from "../reducer"
const rootReducer = combineReducers({
    vehicledetail:numBikeReducer,
    addressdetail:reducer
})

export const store=createStore(
    rootReducer,
    compose(applyMiddleware(thunk), 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))