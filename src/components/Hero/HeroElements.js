import styled from 'styled-components';

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: black;
    // overflow:hidden;
    // overflow: hidden;
    @media screen and (max-width:1990px) {
        height:850px;
    }
    @media screen and (max-width:1366px) {
        height:700px;
    }
    @media screen and (max-width:1026px) {
        height:850px;
    }
    @media screen and (max-width:560px){
        height: 700px;
    }
`;

export const HeroImage = styled.img`
    position:absolute;
    width: 35%;
    left: 60%;
    top: 5%;
    // margin-left: 60%;
    // margin-top: 5%;
    content:url("/assets/images/Wavy_Lst-14_Single-04 [Converted]-1.png");

    @media screen and (max-width:1990px) {
        width: 35%;
        left: 60%;
        top: 5%;
        // margin-left: 60%;
        // margn-top: 5%;
    }
    @media screen and (max-width:1366px) {
        width: 45%;
        left: 55%;
        top: 10%;
        // margin-left: 60%;
        // margn-top: 5%;
    }
    @media screen and (max-width:1026px) {
        width: 45%;
        left: 55%;
        top: 15%;
        // margin-left: 55%;
        // margn-top: 15%;
    }
    @media screen and (max-width:769px) {
        width: 85%;
        left: 50%;
        top: 5%;
        // margin-left: 50%;
        // margn-top: 5%;
    }
    @media screen and (max-width:560px) {
        // height: 70%;
        // width:auto;
        width:120vw;
        left: 25%;
        top: 10%;
        // margin-left: 25%;
        // margin-top: 10%;
    }
`;

export const HeroHeadingIn = styled.div`
    color: #70D9B8;
    font-size: 5vw;
    
    @media screen and (max-width:769px) {
        font-size: 6vw;
    }
    @media screen and (max-width:560px) {
        font-size: 9vw;
        padding-top:80px;
    }
`;

export const HeroHeading = styled.div`
    position:absolute;
    
    font-weight: bold;
    color:#fff;
    left: 15%;
    width: 60%;
    top: 30%;
    font-size: 5rem;

    z-index:5;

    @media screen and (max-width:1990px) {
        left: 15%;
        width: 60%;
        top: 25%;
        font-size: 4vw;
    }
    @media screen and (max-width:1366px) {
        left: 10%;
        width: 55%;
        top: 25%;
        // font-size: 6rem;
    }
    @media screen and (max-width:1026px) {
        left: 10%;
        top: 25%;
        // font-size: 6rem;
        width: 50%;
    }
    @media screen and (max-width:769px) {
        left: 10%;
        top: 30%;
        font-size: 5vw;
        width: 60%;
    }
    @media screen and (max-width:561px) {
        left: 10%;
        top: 12%;
        font-size: 7vw;
        width: 60%;
    }
`;

export const HeroRectangle = styled.div`
    background-color: #70D9B8;
    z-index:2;
    width:100%;
    height:100%;
`;

export const HeroRectangleContainer = styled.div`
    position:absolute;
    display:block;
    font-weight: bold;
    color:#fff;
    // margin-left: 0;
    // left:0;
    // background-color: #70D9B8;
    // z-index:2;
    @media screen and (max-width:1990px) {
        top: 70%;
        // margin-top: 50%;
        width: 60%;
        height: 10%;
    }
    @media screen and (max-width:1366px) {
        // left: 0%;
        top: 65%;
        // margin-top: 55%;
        width: 60%;
        height: 10%;
    }
    @media screen and (max-width:1026px) {
        // left: 0%;
        top: 65%;
        // margin-top:65%;
        width: 60%;
        height: 10%;
    }
    @media screen and (max-width:769px) {
        // left: 0%;
        top: 65%;
        // margin-top:65%;
        width: 60%;
        height: 15%;
    }
    @media screen and (max-width:560px) {
        height:10%;
        top: 70%;
        // margin-top:70%;
    }


    // THIS DIV IS ADDED FOR SUPPORTING RECTANGLE ANIMATION EXPLICITLY !!!!!!!!!!!!!
    div{
        height:100%;
    }
`;