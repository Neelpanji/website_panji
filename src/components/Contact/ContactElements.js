import styled from "styled-components";

export const ContactContainer = styled.div`
    background-color: black;
    align-items:center;
    display:flex;
    justify-content:space-evenly;
    // height: 90vh;
    flex-direction:column;
    @media screen and (min-height: 1050px){
        height: 90vh;
    }
`;

export const ContactHeading = styled.h1`
    color: white;
    padding: 30px 0;
    text-align:center;
`;



export const CalendlyContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100%;
    padding: 1rem 0;
`;

export const CalendlyContent = styled.div`
    padding: 1em 0;
    color: white;
    font-size:1.2rem;
`;

export const CalendlyButton = styled.button`
    outline:none;
    background: black;
    color: #70D9B8;
    border: 2px solid #70D9B8;
    border-radius: 3px;
    transition: ease-in-out .3s;
    &:hover{
        transform:translateY(-3px);
    }
`;

export const Hr = styled.hr`
    margin: 2rem 0;
    color: #70D9B8;
    opacity: 1;
    width:50%;
`;

export const ContactContentContainer = styled.div`
    width: 65%;
    @media screen and (max-width: 1990px){
    }
    @media screen and (max-width: 1366px){
    }
    @media screen and (max-width: 1025px){
        width: 80%;
    }
    @media screen and (max-width: 560px){
        width: 90%;
    }
`;

export const FormHeading = styled.h1`
    color: white;
    padding: 30px 0 10px 0;
    text-align:center;
    font-size:1.4rem;
`;

export const FormElement = styled.form`
    padding-top: 10px;
    padding-bottom: 30px;
    margin: 0 1rem;
    // @media screen and (max-width: 1990px){
    // }
    // @media screen and (max-width: 1366px){
    // }
    // @media screen and (max-width: 1025px){
    //     width: 80%;
    // }
    // @media screen and (max-width: 560px){
    //     width: 90%;
    // }
`;

export const LabelElement = styled.label`
    font-size: 1.1rem;
    margin :0;
    padding: 10px 0px;
    color: white;
`;

export const InputElement = styled.input`
    width:100%;
    margin-bottom: 5px;
    height: 90%;
    border-radius: 5px;
    border-width:0px;
    &:focus{
        outline:none;
    }
`;

export const InputTextArea = styled.textarea`
    width:100%;
    margin-bottom: 5px;
    height: 90%;
    border-radius: 5px;
    border-width:0px;
    &:focus{
        outline:none;
    }
`;

export const FormSubmitButton = styled.button`
    outline:none;
    background: black;
    color: #70D9B8;
    border: 2px solid #70D9B8;
    border-radius: 3px;
    transition: ease-in-out .3s;
    &:hover{
        transform:translateY(-3px);
    }
`;

export const SubmitConfirmation = styled.div`
    text-align:center;
    color:white;
    padding: 10px 0;
`;

export const ConfirmationImageContainer = styled.div`
    display:flex;
    justify-content:right;
`;

export const ConfirmationImage = styled.img`
    
    @media screen and (max-width: 1990px){
        max-height: 40vh;
    }
    @media screen and (max-width: 1366px){
    }
    @media screen and (max-width: 1025px){
        
    }
    @media screen and (max-width: 560px){
        max-height: 50vh;
    }
`;



export const ConfirmationContainer = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-top: 10px;
    width: 50%;
    font-size:1.1rem;
    @media screen and (max-width: 1990px){
    }
    @media screen and (max-width: 1366px){
    }
    @media screen and (max-width: 1025px){
        width: 70%;
    }
    @media screen and (max-width: 560px){
        width: 90%;
        display:block;
    }
`;