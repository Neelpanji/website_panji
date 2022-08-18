import React ,{useRef} from 'react';
import emailjs from 'emailjs-com';
import { Container, Row,Col } from 'reactstrap';
import { FormElement,ContcatHeading, LabelElement, InputElement, ContactContainer, InputTextArea, FormSubmitButton, SelectElement, OptionElement } from './EnquiryElements'
import { useSelector } from 'react-redux';

const Enquiry = () => {

    const servicesState = useSelector(state => state.services);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        // // !!!!!!!!!!!!!!!!!!!!!!!!!uncomment when want to test !!!!!!!!!!!!!!!!!!!!!!!!!
        emailjs.sendForm('service_hllzzpo', 'template_6qbrr2s', e.target, 'user_nlsEMvuE69qao2t7h0SCS')
            .then((result) => {
                console.log(result.text);
                alert('Your Form has been Submitted. Thank You for reaching us.');
            }, (error) => {
                console.log(error.text);
            });
      };

    const services = servicesState.services.map((service) => {
        if(service.features.length === 0){
            return(<OptionElement value={service.name}>{service.name}</OptionElement>);
        }      
    });

    return (
        <ContactContainer>
            {/* <Container> */}
                <ContcatHeading>Contact Me</ContcatHeading>
                <FormElement ref={form} onSubmit={sendEmail}>
                    <Row>
                        <Col lg='12'>
                            <LabelElement>Name*</LabelElement>
                        </Col>
                        <Col lg='12'>
                            <InputElement  type="text" name="name" placeholder='Name' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <LabelElement>Email*</LabelElement>
                        </Col>
                        <Col lg='12'>
                            <InputElement  type="email" name="mail" placeholder='Email' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <LabelElement>Service</LabelElement>
                        </Col>
                        <Col lg='12'>
                            <SelectElement  id="services" name="services" placeholder='Select Service'>
                                {/* <OptionElement value="service1">Service 1</OptionElement>
                                <OptionElement value="service1">Service 2</OptionElement>
                                <OptionElement value="service1">Service 3</OptionElement>
                                <OptionElement value="service1">Service 4</OptionElement> */}
                                {services}
                            </SelectElement>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg='12'>
                            <LabelElement>Enquiry*</LabelElement>
                        </Col>
                        <Col lg='12'>
                            <InputTextArea rows='6' type="text" name="message" placeholder='Message' required />
                        </Col>
                    </Row>
                    <FormSubmitButton>Submit</FormSubmitButton>
                </FormElement>
            {/* </Container> */}
        </ContactContainer>
    )
}

export default Enquiry
