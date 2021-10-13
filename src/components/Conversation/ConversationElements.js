import styled from 'styled-components';

export const ConversationContainer = styled.div`
    background-color: black;
    position: relative;
    overflow: hidden;
`;

export const ConversationImage = styled.img`
    
    width: 100%;
    // content:url("/assets/images/conversation.png");
`;


export const ConversationTextBoxPanji = styled.div`
    text-align:center;
    position: absolute;
    max-width:50%;
    top:${props =>props.top};
    left:${props =>props.left};
    color: white;
    

    font-size:1.5vw;

    @media screen and (max-width:1990px) {
        // font-size: 1.5rem;
    }
    @media screen and (max-width:1366px) {
        // font-size: 1.3rem;
    }
    @media screen and (max-width:1024px) {
        font-size: 1.7vw;
        max-width: 40%
    }
    @media screen and (max-width:769px) {
        // width: 70%;
    }
`;

export const ConversationTextBoxVisitor = styled.div`
    text-align:center;
    position: absolute;
    max-width:45%;
    top:${props =>props.top};
    left:${props =>props.left};
    color: #70D9B8;
    
    font-size:1.5vw;
    @media screen and (max-width:1990px) {
        // font-size: 1.5rem;
    }
    @media screen and (max-width:1366px) {
        // font-size: 1.3rem;
    }
    @media screen and (max-width:1024px) {
        font-size:1.7vw;
        max-width: 40%
    }
`;

export const ConversationTextBoxContent = styled.div`
    position: relative;
    background-color: black;
    padding: 10px;
`;

export const ConversationMobileLeftContainer = styled.div`
    justify-content:left;
    display:flex;
    align-items: center;
`;

export const ConversationMobileRightContainer = styled.div`
    justify-content: right;
    text-align: right;
    display:flex;
    align-items: center;
`;

export const ConversationMobileImage = styled.img`
    // max-width: 30%;
    max-height: 60vw;
`;

export const ConversationMobileTextBox = styled.div`
    width: 75%;
    margin: 0px 10px;
    color:${props => (props.visitor === "1")?"#70D9B8":"white"};
    font-size: 3.5vw;
`;