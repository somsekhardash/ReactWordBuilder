import {createStore, applyMiddleware} from "redux";

import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import Reducer from "./Reducers/Reducer";

let store = createStore(Reducer,applyMiddleware(thunk,promise(),createLogger()));
        
store.subscribe(function(){
    console.log("updated Value"+ JSON.stringify(store.getState()));
})

export default store;