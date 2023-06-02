import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import { AboutContainer, AboutHeading,AboutRectangle1, AboutImageWrapper, AboutImageDesktop, AboutImageMobile, AboutContentWrapper, AboutContent,
    AboutContactContainer,AboutContactContent, AboutContactButton,
    AboutQuoteContainer, AboutQuoteContent,  HighlightGreen, AboutContactLink } from './AboutElements';
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
                                <AboutQuoteContent>What Makeup is to Actors, Editing is to Podcasters!</AboutQuoteContent>
                            </Parallax>
                        </AboutQuoteContainer>
                    </Col>
                    <Col lg='12'>
                        <AboutContentWrapper>
                            <AboutContent>
                            Hi, I am Neel! Being a podcaster can be tough in many ways. From scheduling guests for an interview, finding new guests, promoting the value you provide to the audience in various forms, getting creative to keep your audience engaged, and finally spending hours to ensure the quality of the audio is top-notch. Spending hours editing and still not getting the quality sound can have cascading effects on the creative aspects.
                            Over my experience working and seeing podcasters, I have noticed that poor audio quality is a major reason affecting the confidence of the Podcasters in their art out of all of these activities.  
                            With my editing finesse, I want to ensure that no Podcaster has the slightest doubt over their art because of the audio quality.   
                            </AboutContent>
                        </AboutContentWrapper>
                    </Col>
                    <Col lg='8'>
                        <AboutContactContainer>
                            <AboutContactContent>Let's Get Your <HighlightGreen>Audience Hooked</HighlightGreen> To Your Sound 😀</AboutContactContent>
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
