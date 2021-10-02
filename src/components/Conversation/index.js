import React,{useState,useEffect} from 'react'
import {ConversationImage, ConversationContainer, ConversationTextBoxVisitor, ConversationTextBoxPanji, ConversationMobileLeftContainer, ConversationMobileRightContainer, ConversationMobileImage, ConversationMobileTextBox} from './ConversationElements';


const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }


const Conversation = () => {

    const { width } = useViewport();

    if(width > 1025){
        return(
            <div>
                <ConversationContainer>
                    <ConversationImage src="/assets/images/conversation.png" /> 
                    <ConversationTextBoxPanji top="6%" left="28%">Hello there, seems you are in search of an EDITOR?</ConversationTextBoxPanji>
                    <ConversationTextBoxVisitor top="22%" left="62%">Yes, I am!</ConversationTextBoxVisitor>
                    <ConversationTextBoxPanji top="44%" left="22%">Well presenting a Professional Podcast Editor at your Service. I am here to handle everything around your podcast, so that you can focus on the creative aspect of your Podcast.</ConversationTextBoxPanji>
                    <ConversationTextBoxVisitor top="66%" left="47%">Hmmm, that sounds interesting. Tell me more!</ConversationTextBoxVisitor>
                    <ConversationTextBoxPanji top="81%" left="28%">Awesome! Let’s Scroll Down to know more about My Services.</ConversationTextBoxPanji>
                </ConversationContainer>
            </div>
        );
    } else if(width > 560){
        return(
            <div>
                <ConversationContainer>
                    <ConversationImage src="/assets/images/conversation_tablet.png"/> 
                    <ConversationTextBoxPanji top="6%" left="27%">Hello there, seems you are in search of an EDITOR?</ConversationTextBoxPanji>
                    <ConversationTextBoxVisitor top="23%" left="50%">Yes, I am!</ConversationTextBoxVisitor>
                    <ConversationTextBoxPanji top="40%" left="28%">Well presenting a Professional Podcast Editor at your Service. I am here to handle everything around your podcast, so that you can focus on the creative aspect of your Podcast.</ConversationTextBoxPanji>
                    <ConversationTextBoxVisitor top="68%" left="37%">Hmmm, that sounds interesting. Tell me more!</ConversationTextBoxVisitor>
                    <ConversationTextBoxPanji top="85%" left="28%">Awesome! Let’s Scroll Down to know more about My Services.</ConversationTextBoxPanji>
                </ConversationContainer>
            </div>
        );
    } else {
        return(
            <div>
                <ConversationContainer>
                    {/* <ConversationImage src="/assets/images/conversation.png"/>  */}
                    <ConversationMobileLeftContainer>
                        <ConversationMobileImage src="/assets/images/bitmoji/1-resize.png"/>
                        <ConversationMobileTextBox visitor="0">Hello there, seems you are in search of an EDITOR?</ConversationMobileTextBox>
                    </ConversationMobileLeftContainer>
                    <ConversationMobileRightContainer>
                        <ConversationMobileTextBox visitor="1">Yes, I am!</ConversationMobileTextBox>
                        <ConversationMobileImage src="/assets/images/bitmoji/2.png"/>
                    </ConversationMobileRightContainer>
                    <ConversationMobileLeftContainer>
                        <ConversationMobileImage src="/assets/images/bitmoji/3.png"/>
                        <ConversationMobileTextBox visitor="0">Well presenting a Professional Podcast Editor at your Service. I am here to handle everything around your podcast, so that you can focus on the creative aspect of your Podcast.</ConversationMobileTextBox>
                    </ConversationMobileLeftContainer>
                    <ConversationMobileRightContainer>
                        <ConversationMobileTextBox visitor="1">Hmmm, that sounds interesting. Tell me more!</ConversationMobileTextBox>
                        <ConversationMobileImage src="/assets/images/bitmoji/4.png"/>
                    </ConversationMobileRightContainer>
                    <ConversationMobileLeftContainer>
                        <ConversationMobileImage src="/assets/images/bitmoji/5.png"/>
                        <ConversationMobileTextBox visitor="0">Awesome! Let’s Scroll Down to know more about My Services.</ConversationMobileTextBox>
                    </ConversationMobileLeftContainer>
                </ConversationContainer>
            </div>
        );
    }

}

export default Conversation
