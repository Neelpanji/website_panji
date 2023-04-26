import React,{useState,useEffect} from 'react'
import {ConversationImage, ConversationContainer, ConversationTextBoxVisitor, ConversationTextBoxPanji, ConversationMobileLeftContainer, ConversationMobileRightContainer, ConversationMobileImage, ConversationMobileTextBox
    ,ConversationTextBoxContent
} from './ConversationElements';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import { Parallax } from 'react-scroll-parallax';

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
                    <ConversationImage src="/assets/images/conversation.2.png" /> 
                    
                    <ConversationTextBoxPanji top="6%" left="22%">
                        <Parallax x={[-5,5]}>
                        <ConversationTextBoxContent>
                        Are you looking to launch a podcast from 0to1?
                        </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>
                    
                    <ConversationTextBoxVisitor top="22%" left="28%">  
                    {/* left  = 62% */}
                        <Parallax x={[5,-5]}>
                            {/* 20,-10 */}
                            <ConversationTextBoxContent>
                            Maybe you just want your podcast edited professionally due to lack of time & skill?
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxVisitor>

                    <ConversationTextBoxPanji top="44%" left="22%">
                        <Parallax x={[-5,5]}>
                            <ConversationTextBoxContent>
                            Probably you are looking for someone to guide and brainstorm your podcast idea with?
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>

                    <ConversationTextBoxVisitor top="62%" left="27%">
                        {/* left = 47% */}
                        <Parallax x={[5,-5]}>
                            {/* 5,-15 */}
                            <ConversationTextBoxContent>
                            Yes, you think you need a podcast marketing plan and are willing to set up one, right?
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxVisitor>

                    <ConversationTextBoxPanji top="81%" left="28%">
                        <Parallax x={[-5,5]}>
                            <ConversationTextBoxContent>
                            {/* It is highly appreciable if you feel any one of the above questions apply to you and taking steps to bring in an editor in your team. */}
                            If any of the above questions resonate with you, I would be happy to help you answer them with my services.
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>
                </ConversationContainer>
            </div>
        );
    } else if(width > 560){
        return(
            <div>
                <ConversationContainer>
                    <ConversationImage src="/assets/images/conversation_tablet.2.png"/> 
                    <ConversationTextBoxPanji top="6%" left="27%">
                        <Parallax x={[-20,-10]}>
                            <ConversationTextBoxContent>
                            Are you looking to launch a podcast from 0to1?
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>
                    <ConversationTextBoxVisitor top="23%" left="42%">
                        <Parallax x={[-20,-30]}>
                            <ConversationTextBoxContent>
                            Maybe you just want your podcast edited professionally due to lack of time & skill?
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxVisitor>
                    <ConversationTextBoxPanji top="40%" left="28%">
                        <Parallax x={[-5,5]}>
                            <ConversationTextBoxContent>
                            Probably you are looking for someone to guide and brainstorm your podcast idea with?
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>
                    <ConversationTextBoxVisitor top="62%" left="37%">
                        <Parallax x={[10,-15]}>
                            <ConversationTextBoxContent>
                            Yes, you think you need a podcast marketing plan and are willing to set up one, right?
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxVisitor>
                    <ConversationTextBoxPanji top="85%" left="30%">
                        <Parallax x={[-10,10]}>
                            <ConversationTextBoxContent>
                            {/* It is highly appreciable if you feel any one of the above questions apply to you and taking steps to bring in an editor in your team. */}
                            If any of the above questions resonate with you, I would be happy to help you answer them with my services.
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>
                </ConversationContainer>
            </div>
        );
    } else {
        return(
            <div>
                <ConversationContainer>
                    {/* <ConversationImage src="/assets/images/conversation.png"/>  */}
                    <ConversationMobileLeftContainer>
                        <ScrollAnimation animateIn="animate__fadeInLeft" duration="1.5" animateOnce="true" delay="100">
                        <ConversationMobileImage src="/assets/images/bitmoji/1-resize.png"/>
                        </ScrollAnimation>
                        <Parallax x={[-5,5]}>
                        <ConversationMobileTextBox visitor="0">Are you looking to launch a podcast from 0to1?</ConversationMobileTextBox>
                        </Parallax>
                    </ConversationMobileLeftContainer>
                    <ConversationMobileRightContainer>
                        <Parallax x={[20,5]}>
                        <ConversationMobileTextBox visitor="1">Maybe you just want your podcast edited professionally due to lack of time & skill?</ConversationMobileTextBox>
                        </Parallax>
                        <ScrollAnimation animateIn="animate__fadeInRight" duration="1.5" animateOnce="true" delay="300">
                        <ConversationMobileImage src="/assets/images/bitmoji/2.2.png"/>
                        </ScrollAnimation>
                    </ConversationMobileRightContainer>
                    <ConversationMobileLeftContainer>
                        <ScrollAnimation animateIn="animate__fadeInLeft" duration="1.5" animateOnce="true" delay="300">
                        <ConversationMobileImage src="/assets/images/bitmoji/3.png"/>
                        </ScrollAnimation>
                        <Parallax x={[-5,5]}>
                        <ConversationMobileTextBox visitor="0">Probably you are looking for someone to guide and brainstorm your podcast idea with?</ConversationMobileTextBox>
                        </Parallax>
                    </ConversationMobileLeftContainer>
                    <ConversationMobileRightContainer>
                        <Parallax x={[15,5]}>
                        <ConversationMobileTextBox visitor="1">Yes, you think you need a podcast marketing plan and are willing to set up one, right?</ConversationMobileTextBox>
                        </Parallax>
                        <ScrollAnimation animateIn="animate__fadeInRight" duration="1.5" animateOnce="true" delay="300">
                        <ConversationMobileImage src="/assets/images/bitmoji/4.2.png"/>
                        </ScrollAnimation>
                    </ConversationMobileRightContainer>
                    <ConversationMobileLeftContainer>
                        <ScrollAnimation animateIn="animate__fadeInLeft" duration="1.5" animateOnce="true" delay="300">
                        <ConversationMobileImage src="/assets/images/bitmoji/5.png"/>
                        </ScrollAnimation>
                        <Parallax x={[-10,10]}>
                        <ConversationMobileTextBox visitor="0">
                            {/* It is highly appreciable if you feel any one of the above questions apply to you and taking steps to bring in an editor in your team. */}
                            If any of the above questions resonate with you, I would be happy to help you answer them with my services.
                        </ConversationMobileTextBox>
                        </Parallax>
                    </ConversationMobileLeftContainer>
                </ConversationContainer>
            </div>
        );
    }

}

export default Conversation
