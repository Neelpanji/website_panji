import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Clients } from "./clients";
import { Services } from "./services";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            services: Services,
            clients: Clients,
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}