import styled from "styled-components";

export const ContactContainer = styled.div`
    background-color: black;
    align-items:center;
    display:flex;
    justify-content:center;
    height: 90vh;
    flex-direction:column;

`;

export const ContcatHeading = styled.h1`
    color: white;
    padding-bottom: 30px;
`;

export const FormElement = styled.form`
    padding-top: 10px;
    width: 50%;

    @media screen and (max-width: 1990px){
    }
    @media screen and (max-width: 1366px){
    }
    @media screen and (max-width: 1025px){
        width: 70%;
    }
    @media screen and (max-width: 560px){
        width: 90%;
    }
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

export const SelectElement = styled.select`
    width:100%;
    margin-bottom: 5px;
    height: 90%;
    border-radius: 5px;
    border-width:0px;
    &:focus{
        outline:none;
    }
`;

export const OptionElement = styled.option`
    
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