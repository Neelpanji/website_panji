import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Clients } from "./clients";
import { Services } from "./services";
// import { InitialFeedback } from "./forms";   

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            services: Services,
            clients: Clients,
            
        }),
        compose(
            applyMiddleware(thunk, logger),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && 
            // window.__REDUX_DEVTOOLS_EXTENSION__()
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    return store;
}