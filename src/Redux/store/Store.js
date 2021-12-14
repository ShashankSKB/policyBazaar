import thunk from "redux-thunk";
import {numBikeReducer} from "../Reducer/NumBikereducer"
import {applyMiddleware, combineReducers, compose, createStore} from "redux"

const rootReducer = combineReducers({
    bikenumber:numBikeReducer
})

export const store=createStore(
    rootReducer,
    compose( applyMiddleware(thunk), 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))