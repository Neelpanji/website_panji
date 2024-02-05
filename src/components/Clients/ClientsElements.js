import styled from 'styled-components';

export const ClientsContainer = styled.div`
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 30px 0 30px 0;
    text-align:center;
`;

export const ClientsHeading = styled.h1`
    // font-size:40px;
    padding: 30px 0 40px 0;
    
`;

export const ClientsContent = styled.h4`

`;

export const ClientsBgImage = styled.img`
    position:absolute;
    width:100%;
    left:0;
    padding-top:5%;
    @media screen and (max-width:560px){
        display:none;
    }
`;

export const ClientsBgImage2 = styled.img`
    position:absolute;
    width:100%;
    left:0;
    padding-top:18%;
    display:none;
    @media screen and (max-width:560px){
        display:block;
    }
`;

export const ClientImage = styled.img`
    height: 250px;
    width:250px;
    margin: 1rem;
    z-index: 10;
    box-shadow: rgba(170, 140, 190, 0.3) 0px 7px 29px 0px;

    @media screen and (max-width:560px){
        height: 160px;
        width: 160px;
    }
`;

export const ClientImageLink = styled.a`
`;

export const ClientsCarouselContainer = styled.div`
    padding: 2rem 0;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
`;