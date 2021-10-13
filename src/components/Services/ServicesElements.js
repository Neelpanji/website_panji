import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServicesContainer = styled.div`
    width: 100%;
    background-color: black;
    color: #fff;
    // height: 650px;
`;

export const BookContainer = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    padding-top: 20px;
    padding-bottom: 30px;
    padding-right:10%;
    padding-left:10%;
    overflow: hidden;

`;

export const BookCoverPageContainer = styled.div`
    border : 3px white solid;
    width: 100%;
    height:100%;
    background-color: #70D9B8;  
    
`;

export const BookFlipContainer = styled.div`
    position:absolute;
    bottom:5%;
    color: #000;
    right:5%;
    width:15%;
    font-size:1.2vw;

    @media screen and (max-width:768px) {
        font-size: 1.7vw;
    }
    @media screen and (max-width:560px) {
        font-size: 2.5vw;
    }
`;

export const BookCoverPageImg = styled.img`
    content:url("/assets/images/service-cover-1-transparent.png");
    width:100%;
    position: absolute;
    bottom: 3px;
    left:0;
`;

export const BookPageContainer = styled.div`
    border : 3px grey solid;
    width: 100%;
    height:100%;
    display:flex;
`;

export const BookPageLogoContainer = styled.div`
    background-color: #fff;
    width: 30%;
    height:100%;
    position:relative;
`;

export const BookPageLogo = styled.img`
    position:absolute;
    width:70%;
    top:15%;
    left:15%;
`;

export const BookPageContentContainer = styled.div`
    background-color: #70D9B8;
    width: 71%;
    height:100%;
    position:relative;
    color: #000;
`;

export const BookPageHeader = styled.h2`
    position:absolute;
    top:20%;
    left:5%;
    @media screen and (min-width:1400px){
        font-size: 3rem;
    }
    @media screen and (max-width: 992px) {
        font-size: 2.5rem;
    }
    @media screen and (max-width:560px){
        font-size: 1.4em;
    }
`;

export const BookPageFeatures = styled.ul`
    position:absolute;
    top:35%;
    left:5%;
    font-size: 1.2rem;
    @media screen and (min-width:1400px){
        font-size: 1.7rem;
    }
    @media screen and (max-width: 992px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width:560px){
        font-size: 1.2rem;
    }
`;

export const BookInquireContainer = styled.div`
    position:absolute;
    bottom:15%;
    left:5%;
`;

export const BookInquireLink = styled(Link)`
    color:#000;
    position: relative;
    text-decoration:none;
    font-size: 1.1rem;
    @media screen and (min-width:1400px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 992px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width:560px){
    font-size: 1.1rem;
    }
    &:before{
        content: "";
        position: absolute;
        width: 70%;
        height: 2px;
        bottom: -2px;
        left: 15%;
        background-color: #000;
        // visibility: hidden;
        transition: all 0.2s ease-in-out;
    }
    &:hover{
        color:#000 !important;
    }
    &:hover:before{
        visibility: visible;
        width: 100%;
        left:0;

    }
`;

export const ServicesHeading = styled.h2`
text-align: center;
// margin-bottom:0;
padding-top: 80px;
// @media screen and (max-width:1990px) {
    
// }
@media screen and (max-width:1366px) {
    padding-top: 60px;
}
@media screen and (max-width:991px) {
    padding-top: 40px;
}
@media screen and (max-width:767px) {
    padding-top: 25px;
    padding-bottom: 10px;
}
`;

export const ServiceWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    width:100%;

    @media screen and (min-width:1990px) {
        height: 800px;
    }
    @media screen and (max-width:1990px) and (min-width:1366px) {
        height: 800px;
    }
    @media screen and (max-width:1366px) and (min-width:992px) {
        height: 700px;
    }
    @media screen and (max-width:991px) and (min-width:767px) {
        height: 530px;
    }
    // @media screen and (max-width:767px) {
    //     height: 400px;
    // }
`;

export const ServiceCard = styled.div`
    
    margin: 10px 0;
    border: 1px solid black;
    border-radius: 5px;

    padding: 40px 5px;
    @media screen and (min-width:1990px) {
        padding: 80px 5px;
    }
    @media screen and (max-width:1990px) and (min-width:1366px) {
        padding: 80px 5px;
    }
    @media screen and (max-width:1366px) and (min-width:992px) {
        padding: 45px 5px;
    }
    @media screen and (max-width:991px) and (min-width:767px) {
        padding: 40px 5px;
    }
`;

export const ServiceImage = styled.img`
    max-width:100%;
`;

export const ServiceHeading = styled.h3`
    text-align:center;
    padding: 15px 0;
`;

export const SerivceContent = styled.div`
    padding: 0 20px;
    text-align: justify;
`;