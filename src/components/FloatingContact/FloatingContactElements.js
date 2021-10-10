import styled from "styled-components";

export const FloatingContactLink = styled.a`
    
    &:hover {
        right: 10px;
    }
`;

export const FloatingContactContainer = styled.div`
    position: fixed;
    right:0;
    
    // border-left: 2px solid #70D9B8;
    // border-top: 2px solid #70D9B8;
    // border-bottom: 2px solid #70D9B8;
    background-color: black;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content : space-around;
    align-items: center;
    border-radius: 4px;

    @media screen and (max-width:1990px) {
        bottom:35%;
        // height: 28%;
        width:70px;
    }
    @media screen and (max-width:1366px) {
        bottom:35%;
        // height: 30%;
        width:40px;
    }
    @media screen and (max-width:991px) {
        bottom:35%;
        // height: 30%;
        width:40px;
    }
    @media screen and (max-width:769px) {
        // bottom:37%;
        // // height: 25%;
        // width:40px;
        display:none;
    }
    @media screen and (max-width:560px) {
        display:none;
    }

    &:hover {
        right: 3px;
    }
`;

export const FloatingIcon = styled.img`
    width: 30px;
    height: 30px;
`;