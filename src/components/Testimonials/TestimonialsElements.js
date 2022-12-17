import styled from "styled-components";

export const TestimonialHr = styled.hr`
    width: 80%;
    margin : auto;
    height: 4px;
    margin: 1rem auto;
    border-top: 4px solid white;
    opacity: 1;
    @media screen and (min-width:768px){
        width: 50%;
    }
`;

export const TestimonialHeading = styled.h1`
    text-align:center;
    color:white;
    // font-size:2.5rem;
    padding : 5rem 0 4rem 0;
`;

export const TestimonialWholeContentContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    padding-top: 1.5rem;

    @media screen and (min-width:768px){
        flex-direction: row;
    }
`;

export const TestimonialContentContainer = styled.div`
    width:90%;
    padding:0 2rem;

    @media screen and (min-width:768px){
        width:55%;
    }
`;

export const TestimonialContentHeading = styled.div`
    text-align:center;
    color:white;
    font-size: 1.5rem;
    padding:1rem 0;

    @media screen and (min-width:768px){
        font-size: 1.6rem;
    }
`;

export const TestimonialContent = styled.div`
    color:white;
    padding:1rem 0;
    font-size: 1.2rem;

    @media screen and (min-width:768px){
        font-size: 1.2rem;
    }
`;

export const TestimonialImageContainer = styled.div`
    width:40%;
    @media screen and (min-width:768px){
        width:20%;
    }
`;

export const TestimonialImage = styled.div`
    width:80%;
    margin:auto;
`;

export const TestimonialVideoContainer = styled.div`
    

    width:85%;
    @media screen and (min-width:768px){
        width:50%;
    }
    padding: 2rem;
    margin: auto;

`;

export const TestimonialVideo = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    
`;

export const TestimonialVideoEmbed = styled.iframe`
left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const TestimonialLeftArrow = styled.div`
    position: absolute !important;
    left: 70px;
    z-index: 1;
    border: 1px solid white;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 12px;
    opacity: 0.8;
    cursor: pointer;
    transform: rotate(135deg);
    opacity: 1;
    color: white;

    @media screen and (max-width:1366px) {
        left: 60px;
        padding: 9px;
    }
    @media screen and (max-width:991px) {
        left: 60px;
        padding: 8px;
    }
    @media screen and (max-width:767px) {
        left: 40px;
        padding: 8px;
    }
`;

export const TestimonialRightArrow = styled.div`
    position: absolute !important;
    right: 70px;
    z-index: 1;
    border: 1px solid white;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 12px;
    opacity: 0.8;
    cursor: pointer;
    transform: rotate(-45deg);
    opacity: 1;

    @media screen and (max-width:1366px) {
        right: 60px;
        padding: 9px;
    }
    @media screen and (max-width:991px) {
        right: 60px;
        padding: 8px;
    }
    @media screen and (max-width:767px) {
        right: 40px;
        padding: 8px;
    }
`;

// .custom-right-arrow {

//   }