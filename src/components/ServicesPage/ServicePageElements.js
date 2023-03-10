import styled, { css } from 'styled-components';

export const ServicesContainer = styled.div`
    width: 100%;
    background-color: black;
    color: #fff;
    // height: 650px;
    overflow: hidden;
`;

export const ServiceHeading = styled.h1`
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
    padding-bottom: 30px;
}
`;

export const ServiceDropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:1rem 0;
`;

export const ServiceDropdownSelect = styled.select`
    background : black;
    border: 4px solid #70D9B8;
    color: white;
    border-radius: 0.5rem;
    font-size:1.3rem;
`;

export const ServiceDropdownOption = styled.option`
    border: 4px solid #70D9B8;
`;