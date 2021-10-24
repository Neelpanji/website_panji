import React,{useState,useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap';
import { AboutContainer, AboutHeading,AboutRectangle1, AboutImageWrapper, AboutImageDesktop, AboutImageMobile, AboutContentWrapper, AboutContent,
    AboutContactContainer,AboutContactContent, AboutContactButton,
    AboutQuoteContainer, AboutQuoteContent, AboutRectangle2, HighlightGreen, AboutContactLink } from './AboutElements';
import { Parallax } from 'react-scroll-parallax';

import { useController } from 'react-scroll-parallax';
import { useLayoutEffect } from 'react';


const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
      const handler = () => parallaxController.update();
      window.addEventListener('load', handler);
      return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  return null;
};

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


const About = () => {

    const { width } = useViewport();

    return (
        <AboutContainer>
            <AboutHeading>About</AboutHeading>
            
            <Container >
            <ParallaxCache />    
            <AboutRectangle1/>
                <Row>
                    <Col lg='8'>
                        
                        
                        <AboutImageWrapper>
                            <AboutImageDesktop src='/assets/images/IMG-1730.jpg' alt='about_img'></AboutImageDesktop>
                            <AboutImageMobile src='/assets/images/IMG-1730-mob.jpg' alt='about_img'></AboutImageMobile>
                        </AboutImageWrapper>
                    </Col>
                    <Col lg='4'>
                        <AboutQuoteContainer>
                            <Parallax  y={[90, -90]}>
                                <AboutQuoteContent>What makeup is to your face, Podcast Editing is to your sound!</AboutQuoteContent>
                            </Parallax>
                        </AboutQuoteContainer>
                    </Col>
                    <Col lg='12'>
                        <AboutContentWrapper>
                            <AboutContent>
                            Hi, I am Neel! A podcast editor and also a video editor.
                            I am the makeup artist of podcasts, responsible to make the audio and video sound & look as flawless as you are.
                            Having produced 69 (and counting)  episodes of podcasts like (AJVC, SOS, ONE MORE NAME) till date in a short span of 1 year has led to significant growth of my professional journey and satisfaction among my clients.
                            Apart from my professional and personal milestones, with my editing expertise I intend to make the art of podcasting more consumable among masses by producing crisp and clean content along with my partners (clients).
                            </AboutContent>
                        </AboutContentWrapper>
                    </Col>
                    <Col lg='8'>
                        <AboutContactContainer>
                            <AboutContactContent>Unlocking your Podcast's <HighlightGreen>True Potential </HighlightGreen> is Just a Click Away 😀</AboutContactContent>
                        </AboutContactContainer>
                    </Col>
                    <Col lg='4'>
                        <AboutContactContainer>
                            <AboutContactLink to='/contact#top'>
                                <AboutContactButton>Reach Me !</AboutContactButton>
                            </AboutContactLink>
                        </AboutContactContainer>
                    </Col>
                </Row>
            </Container>
            {/* <AboutQuoteContainer >
                <AboutQuoteContent>This is a Moving Quote !!
                </AboutQuoteContent>
            </AboutQuoteContainer> */}
            <Container >
            
                {/* adding contact statement, quote !! */}
                <Row>
                    
                    
                </Row>
            </Container>
         </AboutContainer>
    )
}

export default About
