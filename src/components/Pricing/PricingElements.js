import styled from 'styled-components';

export const PricingComponentContainer = styled.div`
    padding: 3rem 2rem;
    color:#fff;
`;

export const PricingHeading = styled.h1`
    padding: 2rem 0 4rem 0;
    text-align:center;
`;

export const PriceCardWrapper = styled.div`
    margin: 0rem 1rem;
    text-align: center;
    border: 2px solid white;
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column;
    border-radius: 0.7rem;
    padding: 1rem 0;

    transition: all 0.2s linear;

    :hover{
        box-shadow: #70d9b859 0px 7px 29px 0px;
    }
`;

export const CardHeading = styled.h2`
    padding: 0.8rem 0;
    font-weight: 800;
`;

export const CardCost = styled.h4`
    font-weight: 600;
`;

export const CardSubHeading = styled.h4`

`;

export const CardFeaturesContainer = styled.div`
    flex-grow: 1;
    padding: 1rem 3rem;
    text-align: start;

    @media screen and (max-width:1990px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width:1366px) {
        padding: 1rem 1.5rem;
    }
    @media screen and (max-width:992px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width:767px) {
        padding: 1rem .7rem;
    }
`;

export const CardFeature = styled.li`
    padding: 0.2rem;
`;