import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import { AboutContainer, AboutHeading,AboutRectangle1, AboutImageWrapper, AboutImage, AboutContentWrapper, AboutContent,AboutQuoteContainer, AboutQuoteContent, AboutRectangle2 } from './AboutElements';

const About = () => {
    return (
        <AboutContainer>
            <AboutHeading>About</AboutHeading>
            <AboutRectangle1/>
            <Container style={{heigth: '100%'}}>
            
                <Row>
                    <Col lg='6'>
                        
                        <AboutImageWrapper>
                            <AboutImage src='/pdcst_sample.svg' alt='about_img'>
                            </AboutImage>
                        </AboutImageWrapper>
                    </Col>
                    <Col lg='6'>
                        <AboutContentWrapper>
                            <AboutContent>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </AboutContent>
                        </AboutContentWrapper>
                    </Col>
                </Row>
            </Container>
            <AboutQuoteContainer >
                <AboutQuoteContent>This is a Moving Quote !!
                </AboutQuoteContent>
            </AboutQuoteContainer>
            <Container style={{heigth: '100%'}}>
            
                <Row>
                    <Col lg='6'>
                        <AboutContentWrapper>
                            <AboutContent>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </AboutContent>
                        </AboutContentWrapper>
                    </Col>
                    <Col lg='6'>
                        <AboutRectangle2 />                        
                    </Col>
                </Row>
            </Container>
         </AboutContainer>
    )
}

export default About
