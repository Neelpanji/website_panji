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
                    <ConversationImage src="/assets/images/conversation.png" /> 
                    
                    <ConversationTextBoxPanji top="6%" left="28%">
                        <Parallax x={[-5,5]}>
                        <ConversationTextBoxContent>
                        Hello there, seems you are in search of an EDITOR?
                        </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>
                    
                    <ConversationTextBoxVisitor top="22%" left="62%">
                        <Parallax x={[20,-10]}>
                            <ConversationTextBoxContent>
                            Yes, I am!
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxVisitor>

                    <ConversationTextBoxPanji top="44%" left="22%">
                        <Parallax x={[-5,5]}>
                            <ConversationTextBoxContent>
                            Well presenting a Professional Podcast Editor at your Service. I am here to handle everything around your podcast, so that you can focus on the creative aspect of your Podcast.
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>

                    <ConversationTextBoxVisitor top="66%" left="47%">
                        <Parallax x={[5,-15]}>
                            <ConversationTextBoxContent>
                            Hmmm, that sounds interesting. Tell me more!
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxVisitor>

                    <ConversationTextBoxPanji top="81%" left="28%">
                        <Parallax x={[-5,5]}>
                            <ConversationTextBoxContent>
                            Awesome! Let’s Scroll Down to know more about My Services.
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
                    <ConversationImage src="/assets/images/conversation_tablet.png"/> 
                    <ConversationTextBoxPanji top="6%" left="27%">
                        <Parallax x={[-20,-10]}>
                            <ConversationTextBoxContent>
                            Hello there, seems you are in search of an EDITOR?
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>
                    <ConversationTextBoxVisitor top="23%" left="50%">
                        <Parallax x={[120,30]}>
                            <ConversationTextBoxContent>
                            Yes, I am!
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxVisitor>
                    <ConversationTextBoxPanji top="40%" left="28%">
                        <Parallax x={[-5,5]}>
                            <ConversationTextBoxContent>
                            Well presenting a Professional Podcast Editor at your Service. I am here to handle everything around your podcast, so that you can focus on the creative aspect of your Podcast.
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxPanji>
                    <ConversationTextBoxVisitor top="68%" left="37%">
                        <Parallax x={[10,-15]}>
                            <ConversationTextBoxContent>
                            Hmmm, that sounds interesting. Tell me more!
                            </ConversationTextBoxContent>
                        </Parallax>
                    </ConversationTextBoxVisitor>
                    <ConversationTextBoxPanji top="85%" left="28%">
                        <Parallax x={[-10,10]}>
                            <ConversationTextBoxContent>
                            Awesome! Let’s Scroll Down to know more about My Services.
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
                        <ConversationMobileTextBox visitor="0">Hello there, seems you are in search of an EDITOR?</ConversationMobileTextBox>
                        </Parallax>
                    </ConversationMobileLeftContainer>
                    <ConversationMobileRightContainer>
                        <Parallax x={[20,5]}>
                        <ConversationMobileTextBox visitor="1">Yes, I am!</ConversationMobileTextBox>
                        </Parallax>
                        <ScrollAnimation animateIn="animate__fadeInRight" duration="1.5" animateOnce="true" delay="300">
                        <ConversationMobileImage src="/assets/images/bitmoji/2.png"/>
                        </ScrollAnimation>
                    </ConversationMobileRightContainer>
                    <ConversationMobileLeftContainer>
                        <ScrollAnimation animateIn="animate__fadeInLeft" duration="1.5" animateOnce="true" delay="300">
                        <ConversationMobileImage src="/assets/images/bitmoji/3.png"/>
                        </ScrollAnimation>
                        <Parallax x={[-5,5]}>
                        <ConversationMobileTextBox visitor="0">Well presenting a Professional Podcast Editor at your Service. I am here to handle everything around your podcast, so that you can focus on the creative aspect of your Podcast.</ConversationMobileTextBox>
                        </Parallax>
                    </ConversationMobileLeftContainer>
                    <ConversationMobileRightContainer>
                        <Parallax x={[15,5]}>
                        <ConversationMobileTextBox visitor="1">Hmmm, that sounds interesting. Tell me more!</ConversationMobileTextBox>
                        </Parallax>
                        <ScrollAnimation animateIn="animate__fadeInRight" duration="1.5" animateOnce="true" delay="300">
                        <ConversationMobileImage src="/assets/images/bitmoji/4.png"/>
                        </ScrollAnimation>
                    </ConversationMobileRightContainer>
                    <ConversationMobileLeftContainer>
                        <ScrollAnimation animateIn="animate__fadeInLeft" duration="1.5" animateOnce="true" delay="300">
                        <ConversationMobileImage src="/assets/images/bitmoji/5.png"/>
                        </ScrollAnimation>
                        <Parallax x={[-10,10]}>
                        <ConversationMobileTextBox visitor="0">Awesome! Let’s Scroll Down to know more about My Services.</ConversationMobileTextBox>
                        </Parallax>
                    </ConversationMobileLeftContainer>
                </ConversationContainer>
            </div>
        );
    }

}

export default Conversation
