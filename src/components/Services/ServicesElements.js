import styled, { css } from 'styled-components';
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
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right:10%;
    padding-left:10%;
    
    @media screen and (max-width:768px) {
        overflow: hidden;
        display:none;
    }
`;

export const BookContainerMobile = styled.div`
    display:none;
    
    @media screen and (max-width:768px) {
        overflow: hidden;

        text-align:center;
        display:flex;
        justify-content:center;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-right:10%;
        padding-left:10%;
    }
`;

export const BookCoverPageContainer = styled.div`
    border : 3px white solid;
    width: 100%;
    height:100%;
    background-color: #70D9B8;  
    border-radius: 2px;
    // box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    box-shadow: rgba(70, 70, 70, 0.55) 0px 10px 25px, rgba(70, 70, 70, 0.40) 15px 5px 15px;
`;

export const BookCoverBackContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
    font-size: 1.5rem;
    background-color: #70D9B8;
    color: #000;
    padding: 0px 30px;

    box-shadow: rgba(0, 0, 0, 0.25) -50px 0px 36px -28px inset;
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

    @media screen and (max-width:560px){
        // display:none;
    }
`;

export const BookPageContainer = styled.div`
    border-left : 2px grey solid;
    border-right : 2px grey solid;
    
    width: 100%;
    height:100%;
    display:flex;
    // border-top-right-radius: 90px 10px;
    border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 10px' : '0px'};
    border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 10px'};
    border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
    border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    overflow: hidden;
    @media screen and (max-width:768px) {
        border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 5px' : '0px'};
        border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 5px'};
        border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
        border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    }

    // ${props => (props.id%2===0) && css`
    // border-top-right-radius: '90px 10px';
    // border-top-left-radius: '0px';
    // border-bottom-right-radius: '90px 3px';
    // border-bottom-left-radius: '0px';

    // @media only screen and (max-width: 768px) {
    //     border-top-right-radius: '90px 5px';
    //     border-top-left-radius: '0px';
    //     border-bottom-right-radius: '90px 3px';
    //     border-bottom-left-radius: '0px';
    // }
    // `}
    // ${props => (props.id%2!==0) && css`
    // border-top-right-radius: '0px';
    // border-top-left-radius: '90px 10px';
    // border-bottom-right-radius: '0px';
    // border-bottom-left-radius: '90px 3px';

    // @media only screen and (max-width: 768px) {
    //     border-top-right-radius: '0px';
    //     border-top-left-radius: '90px 5px';
    //     border-bottom-right-radius: '0px';
    //     border-bottom-left-radius: '90px 3px';
    // }
    // `}
`;

export const BookPageLogoContainer = styled.div`
    background-color: #fff;
    width: 30%;
    height:100%;
    position:relative;
    box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0.35) 50px 0px 36px -28px inset'};
    @media screen and (max-width:768px) {
        box-shadow: rgba(0, 0, 0, 0.25) 50px 0px 36px -28px inset;
    }
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
    box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0) -50px 0px 36px -28px inset'};
    // box-shadow: rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset;
    @media screen and (max-width:768px) {
        box-shadow: rgba(0, 0, 0, 0.25) -50px 0px 36px -28px inset;
    }
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

export const BookKnowMoreContainer = styled.div`
    position:absolute;
    bottom:15%;
    left:35%;
`;

export const BookKnowMoreLink = styled.a`
    color:#000;
    position: relative;
    text-decoration:none;
    @media screen and (max-width:1990px) {
        font-size:1.5rem;
    }
    @media screen and (max-width:1366px) {
        font-size:1.2rem;
    }
    @media screen and (max-width:1026px) {
        font-size:1rem;
    }
    @media screen and (max-width:769px) {
        font-size:1.3rem;
    }
    @media screen and (max-width:561px) {
        font-size:.9rem;
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

export const BookInquireLink = styled(Link)`
    color:#000;
    position: relative;
    text-decoration:none;
    @media screen and (max-width:1990px) {
        font-size:1.5rem;
    }
    @media screen and (max-width:1366px) {
        font-size:1.2rem;
    }
    @media screen and (max-width:1026px) {
        font-size:1rem;
    }
    @media screen and (max-width:769px) {
        font-size:1.3rem;
    }
    @media screen and (max-width:561px) {
        font-size:.9rem;
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

export const ServicesHeading = styled.h1`
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

export const ServiceHeading = styled.h1`
    text-align:center;
    padding: 15px 0;
`;

export const SerivceContent = styled.div`
    padding: 0 20px;
    text-align: justify;
`;

export const ServiceInfo = styled.h5`
    text-align:center;
    padding: 15px 10px;  
`;

export const HighlightGreen = styled.span`
    color: #70D9B8;
`; 

export const BookEndPageContainer = styled.div`
    border-left : 2px grey solid;
    border-right : 2px grey solid;
    
    width: 100%;
    height:100%;
    display:flex;
    // border-top-right-radius: 90px 10px;
    border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 10px' : '0px'};
    border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 10px'};
    border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
    border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    overflow: hidden;
    @media screen and (max-width:768px) {
        border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 5px' : '0px'};
        border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 5px'};
        border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
        border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    }

    // box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0.35) 50px 0px 36px -28px inset'};
    
    
     ${({pageNum}) =>     pageNum%2 !== 0 && css`
     border-radius: 0px;`  };
`;


// page style 2 components !!

export const BookPage2Container = styled.div`
    border-left : 2px grey solid;
    border-right : 2px grey solid;


    background-color:white;
    box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0.35) 50px 0px 36px -28px inset'};
    

    width: 100%;
    height:100%;
    // border-top-right-radius: 90px 10px;
    border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 10px' : '0px'};
    border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 10px'};
    border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
    border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    overflow: hidden;
    @media screen and (max-width:768px) {
        border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 5px' : '0px'};
        border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 5px'};
        border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
        border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    }
`;

export const BookPage2NumberContainer = styled.div`
    align-items:center;
    display:flex;
    justify-content: center;
    background-color: white;
    height: 25%;
    width:100%;

    box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0.35) 50px 0px 36px -28px inset'};
    // @media screen and (max-width:768px) {
    //     box-shadow: rgba(0, 0, 0, 0.25) -50px 0px 36px -28px inset;
    // }

    @media screen and (max-width:561px) {
        height: 22.2%;
    }
    
`;
export const BookPage2Number = styled.div`
    color:black;
    @media screen and (max-width:1990px) {
        font-size:8rem;
    }
    @media screen and (max-width:1366px) {
        font-size:6rem;
    }
    @media screen and (max-width:1026px) {
        font-size:4.5rem;
    }
    @media screen and (max-width:769px) {
        font-size:7rem;
    }
    @media screen and (max-width:561px) {
        font-size:3rem;
    }
`;

export const BookPage2MainHeadingContainer = styled.div`
    align-items:center;
    display:flex;
    justify-content: center;
    background-color: #70D9B8;
    height: 75%;
    width:100%;
    padding: 0px 20px;
    box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0.35) 50px 0px 36px -28px inset'};
    // @media screen and (max-width:768px) {
    //     box-shadow: rgba(0, 0, 0, 0.25) -50px 0px 36px -28px inset;
    // }

    border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 7px' : '0px'};
    border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 7px'};
    border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
    border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    overflow: hidden;
    @media screen and (max-width:768px) {
        border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 5px' : '0px'};
        border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 5px'};
        border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
        border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    }

    @media screen and (max-width:561px) {
        height: 78%;
    }
`;

export const BookPage2MainHeading = styled.div`
    
    color:black;
    @media screen and (max-width:1990px) {
        font-size:4rem;
    }
    @media screen and (max-width:1366px) {
        font-size:3.2rem;
    }
    @media screen and (max-width:1026px) {
        font-size:2.5rem;
    }
    @media screen and (max-width:769px) {
        font-size:3.6rem;
    }
    @media screen and (max-width:561px) {
        font-size:2.2rem;
    }
`;

//below is for normal service page in Page 2 schema

export const BookPage2MainHeadingSmallContainer = styled.div`
    align-items:center;
    display:flex;
    justify-content: center;
    background-color: white;
    height: 8.1%;
    width:100%;

    box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0.35) 50px 0px 36px -28px inset'};
    // @media screen and (max-width:768px) {
    //     box-shadow: rgba(0, 0, 0, 0.25) -50px 0px 36px -28px inset;
    // }
    @media screen and (max-width:561px) {
        height: 6%;
    }

`;
export const BookPage2MainHeadingSmall = styled.div`
    
    color:black;
    @media screen and (max-width:1990px) {
        font-size:1.5rem;
    }
    @media screen and (max-width:1366px) {
        font-size:1.3rem;
    }
    @media screen and (max-width:1026px) {
        font-size:1rem;
    }
    @media screen and (max-width:769px) {
        font-size:1.3rem;
    }
    @media screen and (max-width:561px) {
        font-size:.9rem;
    }
`;
export const BookPage2SubHeadingContainer = styled.div`
    align-items:center;
    display:flex;
    justify-content: center;
    background-color: white;
    height: 17.1%;
    width:100%;

    box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0.35) 50px 0px 36px -28px inset'};
    // @media screen and (max-width:768px) {
    //     box-shadow: rgba(0, 0, 0, 0.25) -50px 0px 36px -28px inset;
    // }
    @media screen and (max-width:561px) {
        height: 15%;
    }
`;
export const BookPage2SubHeading = styled.div`
    
    color:black;
    @media screen and (max-width:1990px) {
        font-size:2.8rem;
    }
    @media screen and (max-width:1366px) {
        font-size:2.5rem;
    }
    @media screen and (max-width:1026px) {
        font-size:2.1rem;
    }
    @media screen and (max-width:769px) {
        font-size:2.8rem;
    }
    @media screen and (max-width:561px) {
        font-size:1.7rem;
    }
`;

export const BookPage2MainContainer = styled.div`
    align-items:center;
    display:flex;
    justify-content: center;
    background-color: #70D9B8;
    height: 75%;
    width:100%;
    box-shadow : ${({ id }) => (id%2===0) ? 'rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset' : 'rgba(0, 0, 0, 0.35) 50px 0px 36px -28px inset'};
    // @media screen and (max-width:768px) {
    //     box-shadow: rgba(0, 0, 0, 0.25) -50px 0px 36px -28px inset;
    // }

    border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 7px' : '0px'};
    border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 7px'};
    border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
    border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    overflow: hidden;
    @media screen and (max-width:768px) {
        border-top-right-radius: ${({ id }) => (id%2===0) ? '90px 5px' : '0px'};
        border-top-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 5px'};
        border-bottom-right-radius: ${({ id }) => (id%2===0) ? '90px 3px' : '0px'};
        border-bottom-left-radius:  ${({ id }) => (id%2===0) ? '0px' : '90px 3px'};
    }

    @media screen and (max-width:561px) {
        height: 78%;
    }
`;

export const BookPage2Features = styled.ul`
    position:absolute;
    top:35%;
    left: 10%;
    width: 80%;
    text-align: left;
    color:black;
    @media screen and (max-width:1990px) {
        font-size:1.5rem;
    }
    @media screen and (max-width:1366px) {
        font-size:1.05rem;
    }
    @media screen and (max-width:1026px) {
        font-size:.8rem;
    }
    @media screen and (max-width:769px) {
        font-size:1.3rem;
    }
    @media screen and (max-width:561px) {
        font-size:.8rem;
        left: 6%;
        top: 26%;
        width: 88%;
    }
`;

export const BookInquireContainer2 = styled.div`
    position:absolute;
    bottom:15%;
    left:15%;
    @media screen and (max-width:1026px) {
        bottom: 11%;
    }
`;

export const BookKnowMoreContainer2 = styled.div`
    position:absolute;
    bottom:15%;
    left:50%;
    @media screen and (max-width:1026px) {
        bottom: 11%;
    }
`;