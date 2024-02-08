import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const PrimaryButton = styled.button`
    color: white;
    font-size:1rem;
    text-decoration:none;

    width: fit-content;

    padding: .5rem .5rem;
    margin:0.5rem;

    border: 2px solid #70D9B8;
    border-radius: 5px;
    background: black;

    transition: all 0.2s linear;

    :hover{
        border: 2px white solid;
        background: #70D9B8;
        color: black;
    }
`;

export const WhiteHr = styled.hr`
    margin: 2rem 0;
    color: white;
    opacity: 1;
    width:${({width}) => (width ? width : '60%')};
`;

export const GreenHr = styled.hr`
    margin: 2rem 0;
    color: #70D9B8;
    opacity: 1;
    width:${({width}) => (width ? width : '60%')};
`;

export const Link = styled(HashLink)`
    text-decoration: none;
`;