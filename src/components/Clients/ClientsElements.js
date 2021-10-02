import styled from 'styled-components';

export const ClientsContainer = styled.div`
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 30px 0 30px 0;
    text-align:center;
    
`;

export const ClientsHeading = styled.div`
    font-size:40px;
    padding: 30px 0 40px 0;
    
`;

export const ClientsCarouselContainer = styled.div`
    padding: 10% 0 10% 0;
    
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