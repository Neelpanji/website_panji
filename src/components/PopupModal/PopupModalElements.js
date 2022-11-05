import styled from "styled-components";

export const RelativePosContainer = styled.div`
    position: fixed;
    top: 30%;
    z-index: 10; 
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    animation: fadeIn .5s;
`;

export const ModalContainer = styled.div`
    background-color: black;
    border: 2px #70D9B8 solid;
    border-radius: 5px;
    width: 65%;
    padding: 1rem;
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

export const CloseContainer = styled.div`
    display: flex;
    justify-content: right;
`;

export const Close = styled.div`
    margin: 0.5rem;
`;

export const CloseIcon = styled.img`
    width:35px;
    height:35px;
`;

export const FormContainer = styled.div`
    // padding-top: 20px;
`;

export const FormElement = styled.form`
    padding-top: 10px;
    padding-bottom: 30px;
    margin: 0 1rem;
    
`;

export const LabelElement = styled.label`
    font-size: 1.1rem;
    margin :0;
    padding: 1rem 0px;
    color: white;
`;

export const InputElement = styled.input`
    width:100%;
    border-radius: 5px;
    border-width:0px;
    margin: 1rem 0;
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
    margin: 1rem 0 0 0;
    &:hover{
        transform:translateY(-3px);
    }
`;