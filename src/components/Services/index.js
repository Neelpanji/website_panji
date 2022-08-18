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
import { useSelector } from 'react-redux';

const Services = () => {

    const servicesState = useSelector(state => state.services);

    // console.log("inside services component ", servicesState);

    if(servicesState.isLoading)
    {
      return(
        <Loading />
      );
    }
    else if(servicesState.errMess)
    {
      return(<h4>{servicesState.errMess}</h4>);
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
                <Book services={servicesState.services}/>
                {/* </ScrollAnimation> */}
            </ServicesContainer>
        )
    }

    
}

export default Services
