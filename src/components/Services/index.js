import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Book from './BookComponent';
import {
    ServicesContainer,
    ServiceWrapper,
    ServiceCard,
    ServiceImage,
    ServiceHeading,
    SerivceContent,
    ServicesHeading,
    ServiceInfo,
    HighlightGreen
} from './ServicesElements';
import { Loading } from '../Loading/LoadingComponent';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Services = (props) => {


    if(props.servicesLoading)
    {
      return(
        <Loading />
      );
    }
    else if(props.servicesErrMess)
    {
      return(<h4>{props.servicesErrMess}</h4>);
    }
    else{
        return (
            <ServicesContainer>
                <ServicesHeading>Services</ServicesHeading>
                
                <ServiceInfo>
                    <ScrollAnimation animateIn="animate__fadeIn" duration="1.5" animateOnce="true" delay="500">
                    <HighlightGreen>Flip</HighlightGreen> through my <HighlightGreen>Service Booklet</HighlightGreen> to know more!
                    </ScrollAnimation>
                    
                </ServiceInfo>
                
                {/* <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <ServiceWrapper>
                                <ServiceCard>
                                    <ServiceImage src='/pdcst_sample.svg' alt='serv-img'></ServiceImage>
                                    <ServiceHeading>Service 1</ServiceHeading>
                                    <SerivceContent>this is the content for the service provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit </SerivceContent>
                                </ServiceCard>
                            </ServiceWrapper>
                        </Col>
                        <Col lg='3' md='6'>
                            <ServiceWrapper>
                                <ServiceCard>
                                    <ServiceImage src='/pdcst_sample.svg' alt='serv-img'></ServiceImage>
                                    <ServiceHeading>Service 1</ServiceHeading>
                                    <SerivceContent>this is the content for the service provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit </SerivceContent>
                                </ServiceCard>
                            </ServiceWrapper>
                        </Col>
                        <Col lg='3' md='6'>
                            <ServiceWrapper>
                                <ServiceCard>
                                    <ServiceImage src='/pdcst_sample.svg' alt='serv-img'></ServiceImage>
                                    <ServiceHeading>Service 1</ServiceHeading>
                                    <SerivceContent>this is the content for the service provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit </SerivceContent>
                                </ServiceCard>
                            </ServiceWrapper>
                        </Col>
                        <Col lg='3' md='6'>
                            <ServiceWrapper>
                                <ServiceCard>
                                    <ServiceImage src='/pdcst_sample.svg' alt='serv-img'></ServiceImage>
                                    <ServiceHeading>Service 1</ServiceHeading>
                                    <SerivceContent>this is the content for the service provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit </SerivceContent>
                                </ServiceCard>
                            </ServiceWrapper>
                        </Col>
    
                    </Row>
                </Container> */}
                {/* <ScrollAnimation animateIn="animate__slideInRight" duration="1.5" animateOnce="true" delay="500"> */}
                <Book services={props.services}/>
                {/* </ScrollAnimation> */}
            </ServicesContainer>
        )
    }

    
}

export default Services
