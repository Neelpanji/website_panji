import * as ActionTypes from './ActionTypes';

export const Ui = (state={
        selectedService: 0
    }, action) => {
        switch(action.type){
            case ActionTypes.UPDATE_SELECTED_SERVICES:
                return{...state, selectedService: action.payload}
            default:
                return state;
    }
}