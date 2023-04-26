import styled from 'styled-components';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { keyframes } from 'styled-components';

export const FaqsContainer = styled.div`
    color: white;
    padding: 3rem 4rem;
    @media screen and (max-width:769px) {
        padding: 3rem 2rem;
    }
`;

export const FaqHeading = styled.h1`
    text-align:center;
`;

export const FaqAccordion = styled(Accordion)`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    @media screen and (max-width:1990px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width:1366px) {
        font-size: 1.3rem;
    }
    @media screen and (max-width:1024px) {
        font-size: 1.7vw;
    }
    @media screen and (max-width:769px) {
        font-size: 2.6vw;
    }
    @media screen and (max-width:490px) {
        font-size: 3.6vw;
    }
`;
export const FaqAccordionItem = styled(AccordionItem)`
border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
export const FaqAccordionItemButton = styled(AccordionItemButton)`
background-color: black;
color: white;
cursor: pointer;
padding: 18px;
width: 100%;
text-align: left;
border: 1px solid #70D9B8;
border-radius: 5px;

&:hover{
    border: 2px solid #70D9B8;
    color: #aaa;
}

&:before{
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
}

&[aria-expanded="true"]::before{
    transform: rotate(45deg);
}

`;
export const FaqAccordionItemHeading = styled(AccordionItemHeading)`
    
`;
export const FaqAccordionItemPanel = styled(AccordionItemPanel)`
padding: 20px;
animation: fadein 0.35s ease-in;
`;

const fadeIn = keyframes`
0% {
    opacity: 0;
}

100% {
    opacity: 1;
}
`;

