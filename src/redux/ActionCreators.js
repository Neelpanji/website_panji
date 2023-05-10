import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';


// for products

export const servicesLoading = () =>({
    type: ActionTypes.SERVICES_LOADING
});

export const addServices = (services) =>({
    type: ActionTypes.ADD_SERVICES,
    payload: services
});

export const servicesFailed = (errmess) =>({
    type: ActionTypes.SERVICES_FAILED,
    payload: errmess
});

export const fetchServices = () => (dispatch) =>{
    dispatch(servicesLoading(true));

    return fetch(baseUrl+'newServices.json')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(services => dispatch(addServices(services)))
        .catch(error => dispatch(servicesFailed(error.message)));
}

//  for clients !!!
export const clientsLoading = () =>({
    type: ActionTypes.CLIENTS_LOADING
});

export const addClients = (products) =>({
    type: ActionTypes.ADD_CLIENTS,
    payload: products
});

export const clientsFailed = (errmess) =>({
    type: ActionTypes.CLIENTS_FAILED,
    payload: errmess
});

export const fetchClients = () => (dispatch) =>{
    dispatch(clientsLoading(true));

    return fetch(baseUrl+'clients.json')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error '+response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(clients => dispatch(addClients(clients)))
        .catch(error => dispatch(clientsFailed(error.message)));
}


// for testimonials

export const testimonialsLoading = () => ({
    type: ActionTypes.TESTIMONIALS_LOADING
});

export const addTestimonials = (testimonials) => ({
    type: ActionTypes.ADD_TESTIMONIALS,
    payload: testimonials
}); 

export const testimonialsFailed = (errMess) => ({
    type: ActionTypes.TESTIMONIALS_FAILED,
    payload:errMess
});

export const fetchTestimonials = () => (dispatch) => {
    dispatch(testimonialsLoading(true))

    return fetch(baseUrl+'testimonials.json')
        .then(
            response =>{
                if(response.ok){
                    return response;
                }else{
                    var error = new Error('Error '+response.status+" : "+response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response=> response.json())
        .then(testimonials => dispatch(addTestimonials(testimonials)))
        .catch(error => dispatch(testimonialsFailed(error.message)));
}

// for faqs

export const faqsLoading = () => ({
    type: ActionTypes.FAQS_LOADING
});

export const addFaqs = (faqs) => ({
    type: ActionTypes.ADD_FAQS,
    payload: faqs
}); 

export const faqsFailed = (errMess) => ({
    type: ActionTypes.FAQS_FAILED,
    payload:errMess
});

export const fetchFaqs = () => (dispatch) => {
    dispatch(faqsLoading(true))

    return fetch(baseUrl+'faqs.json')
        .then(
            response =>{
                if(response.ok){
                    return response;
                }else{
                    var error = new Error('Error '+response.status+" : "+response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response=> response.json())
        .then(faqs => dispatch(addFaqs(faqs)))
        .catch(error => dispatch(faqsFailed(error.message)));
}

export const updateSelectedService = (selectedService) => ({
    type: ActionTypes.UPDATE_SELECTED_SERVICES,
    payload: selectedService
});