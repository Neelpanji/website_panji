import { NavHashLink } from 'react-router-hash-link';
import Select from 'react-select';
import styled, { css } from 'styled-components';

export const ServicesMainContainer = styled.div`
    width: 100%;
    background-color: black;
    color: #fff;
    overflow: hidden;
`;

export const ServiceMainHeading = styled.h1`
text-align: center;
margin-bottom:0;
@media screen and (max-width:1990px) {
    padding-top: 161px;
}
@media screen and (max-width:1366px) {
    padding-top: 181px;
}
@media screen and (max-width:991px) {
    padding-top: 191px;
}
@media screen and (max-width:767px) {
    padding-top: 100px;
    padding-bottom: 25px;
}
`;

export const ServiceDropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:1rem 0;
    position:fixed;
    width:100%;
    z-index:10;
`;

export const ServiceDropdownSelect = styled(Select)`
    width:50%;

    @media screen and (max-width:561px) {
        width:90%;
    }

`;


export const ServiceDropdownOption = styled.option`
    border: 4px solid #70D9B8;
`;

export const ServiceNavbarContainer = styled.div`
    position:fixed;
    z-index: 10;
    width: 100%;
    background: black;
`;

export const ServiceSliderContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: row;
`;

export const ServiceSlider  =styled.div`
    margin: 1rem auto;
    height: 8px;
    width: 90%;
    background: #70D9B8;
`;

export const SliderButton = styled.div`
    width: 40px;
    height: 30px;
    background: black;
    border: 4px solid #70D9B8;
    left: ${({pos})=>`${pos}%`};
    position: absolute;
    transition: all 0.3s linear;
`;

export const ServiceNavbarButtonContainer = styled.div`
    display:flex;
    justify-content: space-around;
    // position:fixed;
    // background:black;
    width:100%;
    padding:1.4rem 0;
    // z-index:10;
`;

export const ServiceNavbarButton = styled.div`
    
`;

export const ServiceNavbarButtonLink = styled(NavHashLink)`
    color: white;
    font-size:1.1rem;
    text-decoration:none;

    display: flex;
    align-items: center;

    padding: .5rem .5rem;
    margin:0.5rem;

    border: 2px solid #70D9B8;
    border-radius: 5px;
    background: black;

    transition: all 0.3s linear;


    &.active {
        color: #70D9B8;
        border: 4px solid white;
        font-size:1.2rem;
    }

    &.active:hover{
        border: 4px white solid;
        color: black;
    }

    :hover{
        border: 3px white solid;
        background: #70D9B8;
        color: black;
    }
`;

export const ServiceContainer = styled.div`
`;

export const ServiceSection = styled.section`
    padding:3rem 5rem;
    background: ${({ right }) => right ? 'black' : '#70D9B8'};
    color: ${({ right }) => right ? 'white' : 'black'};
    position:relative;

    @media screen and (max-width:767px) {
        padding:2rem 2rem;
    }
`;

export const WavesTop = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
overflow: hidden;
line-height: 0;

svg {
    position: relative;
    display: block;
    width: ${({right})=>(right)?'calc(100% + 1.3px)':'calc(100% + 100.3px)'};;
    height: 92px;
}

.shape-fill {
    fill: ${({right})=>(right)?'#70D9B8':'#000000'};

}

@media screen and (max-width:1990px) {
    svg {
        width: ${({right})=>(right)?'calc(100% + 1.3px)':'calc(100% + 100.3px)'};;
        height: 130px;
    }
}
@media screen and (max-width:1366px) {
    svg {
        width: ${({right})=>(right)?'calc(100% + 1.3px)':'calc(100% + 100.3px)'};;
        height: 100px;
    }
}
@media screen and (max-width:991px) {
    svg {
        width: ${({right})=>(right)?'calc(130%)':'calc(140%)'};;
        height: 90px;
    }
}
@media screen and (max-width:767px) {
    svg {
        width: ${({right})=>(right)?'calc(205%)':'calc(190%)'};;
        height: 70px;
    }
}
`;

export const ServiceHeading = styled.h2`
    text-align:center;
    padding-top:100px;

`;

export const ServiceContentConatiner = styled.div`
    display:flex;
`;

export const ServiceInternalContainerImg = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    width:50%;
    @media screen and (max-width:767px) {
        display:none;
    }
`;

export const ServiceInternalContainerContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    width:50%;
    @media screen and (max-width:767px) {
        width:100%;
    }
`;

export const ServiceImage = styled.img`
    
    width: 100%;

    @media screen and (max-width:767px) {
        display:none;
    }
`;

export const ServiceDescription = styled.div`

`;

export const ServicePoints = styled.div`
    border: ${({right})=>right?'2px white solid':'2px black solid'};
    color: ${({right})=>right?'black':'white'};

    background: ${({right})=>right?'#70D9B8':'black'};
    box-shadow: ${({right})=>right?'rgba(255, 255, 255, 0.24) 0px 3px 8px':'rgba(0, 0, 0, 0.24) 0px 3px 8px'};
    

    position:relative;
    transition: all 0.6s linear;

    border-radius:5px;
    // width:90%;
    margin: 1rem;
    margin-left:${({rand})=>`${rand}rem`};
    padding: 1rem;
    z-index:5;
    @media screen and (max-width:767px) {
        width:100%;
        margin:1rem 0;
        padding: 0.5rem;
    }
`;

export const KnowMoreButton  = styled.button`
    cursor:pointer;
    text-decoration:none;
    font-size:1.1rem;
    padding:0.5rem;
    margin-left: 48%;
    margin-top: 1rem;
    border:${({right})=>right?'2px solid #70D9B8':'2px solid black'};
    color:${({right})=>right?'white':'black'};
    background:${({right})=>right?'black':'#70D9B8'};
    border-radius:5px;

    transition: all 0.4s linear;

    :hover{
        border:${({right})=>right?'2px solid white':'2px solid white'};
        color:${({right})=>right?'black':'white'};
        background:${({right})=>right?'#70D9B8':'black'};
    }

`;
