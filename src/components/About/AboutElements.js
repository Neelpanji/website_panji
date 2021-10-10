import styled from 'styled-components';
import { baseUrl } from '../../shared/baseUrl';

export const AboutContainer = styled.div`
    width: 100%;
    background-color: #000;
    color: #fff;
`;

export const AboutHeading = styled.h1`
    text-align: center;
    margin-bottom:0;
    @media screen and (max-width:1990px) {
        padding-top: 80px;
    }
    @media screen and (max-width:1366px) {
        padding-top: 60px;
    }
    @media screen and (max-width:991px) {
        padding-top: 40px;
    }
    @media screen and (max-width:767px) {
        padding-top: 25px;
        padding-bottom: 30px;
    }
`;

export const AboutImageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    width:100%;

    @media screen and (max-width:1990px) {
        height: 750px;
    }
    @media screen and (max-width:1366px) {
        height: 650px;
    }
    @media screen and (max-width:992px) {
        height: 560px;
    }
    @media screen and (max-width:767px) {
        height: auto;
    }
    

`;

export const AboutImageDesktop = styled.img`
    max-width: 100%;
    z-index: 1;
    display:block;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media screen and (max-width: 767px){
        display:none;
    }
`;

export const AboutImageMobile = styled.img`
    max-width: 100%;
    z-index: 1;
    display:none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media screen and (max-width: 767px){
        display:block;
    }
`;

export const AboutContentWrapper = styled.div`
display:flex;
height: 100%;
align-items: center;
justify-content:;
padding: 40px 0;
`;

export const AboutContent = styled.div`
    // margin-left: -50px;
    // margin-top: 160px;
    text-align: justify;
    line-height: 2.5rem;
    font-size:1.3rem;
    @media screen and (max-width:560px) {
        font-size: 1rem;
    }
`;

export const AboutContactContainer = styled.div`
    padding: 50px 0;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    height: 90%;
    
`;

export const AboutContactContent = styled.div`
    text-align:center;
    font-size: 2rem;
`;

export const AboutContactButton = styled.button`
    outline:none;
    background: black;
    color: #70D9B8;
    border: 2px solid #70D9B8;
    border-radius: 3px;
    transition: ease-in-out .3s;
    font-size: 1.5rem;
    &:hover{
        transform:translateY(-1px);
        color: #000;
        background-color: #70D9B8;
    }
`;

export const AboutQuoteContainer = styled.div`
    width:100%;
    height: 100%;
    
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 10px 0;
`;

export const AboutQuoteContent = styled.div`
    text-align:center;
    font-size: 2.5rem;
    color: #000;
    background-color: #70D9B8;
    z-index: 5;
    margin-left: -30%;
    margin-top: 30%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width:992px) {
        margin-top: -15%;
        margin-left: 10%;
        margin-right: 5%;
        font-size: 2.5rem;
    }
    @media screen and (max-width: 767px){
        font-size: 2rem;
        margin-left: 15%;
        margin-top: -20%;
    }
    @media screen and (max-width:560px) {
        font-size: 1.8rem;
    }
`;

export const AboutRectangle1 = styled.div`
    position:absolute;
    
    font-weight: bold;
    color:#fff;
    
    left: 0%;
    width: 30%;
    top: 60%;
    height: 10%;
    background-color: #70D9B8;

    @media screen and (min-height:1023px) {
        top: 40%;
    }

`;

export const AboutRectangle2 = styled.div`
    background-color: #70D9B8;
    width:30%;
    height: 10%;
    margin-top:10%;
    right:0;
    
`;

export const HighlightGreen = styled.span`
    color: #70D9B8;
`;