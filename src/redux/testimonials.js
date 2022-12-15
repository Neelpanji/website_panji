import * as ActionTypes from './ActionTypes';

export const Testimonials = ( state ={
    isLoading: true,
    errMess: null,
    testimonials: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_TESTIMONIALS:
            return {...state, isLoading:false, errMess:null, testimonials:action.payload}
        case ActionTypes.TESTIMONIALS_LOADING:
            return {...state, isLoading:true, errMess:null, testimonials:[]}
        case ActionTypes.TESTIMONIALS_FAILED:
            return {...state, isLoading:false, errMess:action.payload, testimonials:[]}
        default:
            return state;
    }
}