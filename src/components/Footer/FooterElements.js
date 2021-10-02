import styled from "styled-components";
import { Link } from "react-router-dom";
import {Row} from "reactstrap";

export const FooterRectangle = styled.div`
    height:10px;
    width:100%;
    background-color: #70D9B8;
`;

export const FooterContainer = styled.div`
    background-color: #000;
    height: 110px;
    padding-top:20px;
    color:#fff;
    text-align:center;
    align-items:center;
    display:flex;
    // justify-content: space-between;
    font-size: 1.1vw;

    @media screen and (max-width:1026px) {
        font-size: 1.7vw;
        height: 130px;
    }
    @media screen and (max-width:560px) {
        font-size: 3vw;
    }
`;

export const FooterLinks = styled.div`
    height: 70%;
    align-items:center;
    // display:flex;
    // justify-content: space-between;
    width:80%;
    // margin:auto;
`;

export const FooterRow = styled(Row)`
    align-items:center;
`;

export const FooterLink = styled(Link)`
    padding: 0 30px;
    color: #aaa;
    display: flex;
    align-items: center;
    justify-content:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-align:center;

    &:hover{
        color:#70D9B8;
        transition: all 0.2s ease-in-out;
      }
`;

export const FooterMail = styled.a`
    color: #aaa;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover{
        color:#70D9B8;
        transition: all 0.2s ease-in-out;
    }
`;

export const FooterCopyright = styled.div`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    text-decoration: none;

    padding-top:20px;

    @media screen and (max-width:1026px) {
        font-size: 1.5vw;
    }
    @media screen and (max-width:560px) {
        font-size: 2vw;
        padding-top:10px;
    }
`;