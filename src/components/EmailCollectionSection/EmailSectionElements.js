import styled from "styled-components";

export const EmailCollectionContainer= styled.div`

    border-top: 5px solid #70D9B8;
    border-bottom: 5px solid #70D9B8;

    padding: 4rem 0;

    display: flex;
    justify-content:center;
    align-items: center;
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
padding: 1.2rem 0px;
color: white;
`;

export const InputElement = styled.input`
width:100%;
border-radius: 5px;
border-width:0px;
margin: 1.2rem 0;
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
    color: black;
    background: #70D9B8;
}
`;