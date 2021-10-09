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
    ServicesHeading
} from './ServicesElements';
import { Loading } from '../Loading/LoadingComponent';

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
                <Book services={props.services}/>
            </ServicesContainer>
        )
    }

    
}

export default Services
