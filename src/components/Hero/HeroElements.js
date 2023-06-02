
import styled from 'styled-components';
import { NavHashLink } from 'react-router-hash-link';

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: black;
    // overflow:hidden;
    overflow: hidden;
    @media screen and (max-width:2020px) {
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

export const HeroImageWrapper = styled.div`
position: absolute;
@media screen and (max-width:2020px) {
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

export const HeroImage1 = styled.img`
    position:absolute;
    // width: 35%;
    // left: 60%;
    // top: 5%;
    // margin-left: 60%;
    // margin-top: 5%;
    width: 100%;
    content:url("/assets/images/Wavy_Lst-14_Single-04 [Converted]-1.png");


    // clip-path : polygon(0% 0%, 30.1% 0%, 70.1% 100%, 0% 100%);
    clip-path : polygon(0% 0%, 100% 0%, 100% 50.1%, 0% 50.1%);
    // transform: translate(0px, 0px);
    // transition: transform 250ms ease-in-out;
    // transform-origin: top;
    ${HeroImageWrapper}:hover &{
        // transform: translate(2px,0px);
    }
`;
export const HeroImage2 = styled.img`
    // position:absolute;
    // width: 35%;
    // left: 60%;
    // top: 5%;
    // margin-left: 60%;
    // margin-top: 5%;
    width: 100%;
    content:url("/assets/images/Wavy_Lst-14_Single-04 [Converted]-1.png");

    

    // clip-path : polygon(30% 0%, 100% 0%, 100% 100%, 70% 100%);
    // clip-path : polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
    // transform: translate(0px, 0px);
    // transition: transform 250ms ease-in-out;
    // transform-origin: top;
    ${HeroImageWrapper}:hover &{
        // transform: translate(-2px,0px);
    }
`;

export const HeroHeadingIn = styled.div`
    color: ${({color})=>color};
    font-size: 5vw;
    line-height:1.6;
    // text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
    
    @media screen and (max-width:769px) {
        font-size: 6vw;
    }
    @media screen and (max-width:560px) {
        font-size: 7vw;
        padding:0px 0;
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

    @media screen and (max-width:2020px) {
        left: 15%;
        width: 60%;
        top: 23%;
        font-size: 4vw;
    }
    @media screen and (max-width:1366px) {
        left: 10%;
        width: 55%;
        top: 23%;
        // font-size: 6rem;
    }
    @media screen and (max-width:1026px) {
        left: 10%;
        top: 23%;
        // font-size: 6rem;
        width: 50%;
    }
    @media screen and (max-width:769px) {
        left: 10%;
        top: 25%;
        font-size: 5vw;
        width: 50%;
    }
    @media screen and (max-width:561px) {
        left: 10%;
        top: 13%;
        font-size: 5vw;
        width: 50%;
    }
`;

export const HeroRectangle = styled.div`
    background-color: #70D9B8;
    z-index:2;
    width:100%;
    height:100%;
    
`;

export const HeroRectangleContent = styled(NavHashLink)`
    z-index:2;
    width:100%;
    height:100%;
    transition: ease-in-out .5s;
    text-decoration:none;
    color: white;
    justify-content: center;
    align-items:center;
    text-align:center;
    font-weight: 400;
    &:hover{
        // background-color:white;
        color: white;
    }

    @media screen and (max-width:2020px) {
        font-size: 3.5vw;
        display:none;
        
    }
    @media screen and (max-width:1366px) {
        // font-size:1.2rem;
    }
    @media screen and (max-width:1026px) {
        // font-size:1rem;
    }
    @media screen and (max-width:769px) {
        font-size: 4.5vw;
        display:flex;
    }
    @media screen and (max-width:561px) {
        font-size: 5.5vw;
    }
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
    @media screen and (max-width:2020px) {
        top: 90%;
        // margin-top: 50%;
        width: 60%;
        height: 10%;
    }
    @media screen and (max-width:1366px) {
        // left: 0%;
        top: 85%;
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

export const HeroButtonContainer = styled.div`
    position:absolute;
    display:flex;
    justify-content: center;
    left: 0%;
    top:85%;
    width: 100%;
    @media screen and (max-width:2020px) {
        // left: 15%;
        // width: 60%;
        // top: 25%;
        font-size: 3.5vw;
    }
    @media screen and (max-width:1366px) {
        // left: 10%;
        // width: 55%;
        // top: 25%;
        // font-size: 6rem;
    }
    @media screen and (max-width:1026px) {
        // left: 10%;
        // top: 25%;
        // font-size: 6rem;
        // width: 50%;
    }
    @media screen and (max-width:769px) {
        // left: 10%;
        // top: 30%;
        font-size: 4.5vw;
        // width: 60%;
    }
    @media screen and (max-width:561px) {
        // left: 10%;
        // top: 12%;
        font-size: 6.5vw;
        // width: 60%;
    }
`;

export const ButtonHero = styled.button`
    outline:none;
    background: black;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    transition: ease-in-out .3s;
    &:hover{
        transform:translateY(-1px);
        color: #70D9B8;
        background-color: #000;
    }
    @media screen and (max-width:2020px) {
        // font-size:1.5rem;
    }
    @media screen and (max-width:1366px) {
        // font-size:1.2rem;
    }
    @media screen and (max-width:1026px) {
        // font-size:1rem;
    }
    @media screen and (max-width:769px) {
        // font-size:1.3rem;
    }
    @media screen and (max-width:561px) {
        // font-size:.9rem;
    }
`;

export const CustomBr = styled.br`

    
    @media screen and (min-width:1026px) {
        display:none;    
    }
    
`;