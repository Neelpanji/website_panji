import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
    background-color: #000;
    color: #fff;
`;

export const AboutHeading = styled.h2`
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
    }
`;

export const AboutImageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    width:100%;

    @media screen and (max-width:1990px) {
        height: 800px;
    }
    @media screen and (max-width:1366px) {
        height: 700px;
    }
    @media screen and (max-width:992px) {
        height: 560px;
    }
    @media screen and (max-width:767px) {
        height: 400px;
    }
    

`;

export const AboutImage = styled.img`
    max-width: 100%;
    z-index: 1;
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
    padding: 0 20px;
    text-align: justify;

`;

export const AboutQuoteContainer = styled.div`
    width:100%;
    height:200px;
    background-color: #70D9B8;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;

export const AboutQuoteContent = styled.div`
    text-align:center;
    font-size: 60px;
    color: #000;
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
`;

export const AboutRectangle2 = styled.div`
    background-color: #70D9B8;
    width:30%;
    height: 10%;
    margin-top:10%;
    right:0;
    
`;