import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'reactstrap';
import { FormElement, ContcatHeading, LabelElement, InputElement, ContactContainer, InputTextArea, FormSubmitButton, SelectElement, OptionElement, ConfirmationContainer, SubmitConfirmation, ConfirmationImageContainer, ConfirmationImage } from './EnquiryElements'
import { useSelector } from 'react-redux';

const Enquiry = () => {

    const servicesState = useSelector(state => state.services);

    const [formSubmited, setFormSubmitted] = useState(false);



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("Podcast Post Production");
    const [message, setMessage] = useState("");

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        // // // !!!!!!!!!!!!!!!!!!!!!!!!!uncomment when want to test !!!!!!!!!!!!!!!!!!!!!!!!!
        // emailjs.sendForm('service_hllzzpo', 'template_6qbrr2s', e.target, 'user_nlsEMvuE69qao2t7h0SCS')
        //     .then((result) => {
        //         console.log(result.text);
        //         alert('Your Form has been Submitted. Thank You for reaching us.');
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        // API - checked
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify({
                "service_id": "service_hllzzpo",
                "template_id": "template_6qbrr2s",
                "user_id": "user_nlsEMvuE69qao2t7h0SCS",
                "template_params": {
                    "name": name,
                    "mail": email,
                    "services": service,
                    "message": message
                }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.text())
            .then((res) => {
                console.log("sent content had ", name, email,service, message);
                setFormSubmitted(true);
                setName("");
                setEmail("");
                setService("Podcast Post Production");
                setMessage("");
                console.log("Response for submitted mail is ", res);
            })
            .catch((error) => {
                console.log("Form submission has failedwith error - ", error);
            });

        // console.log("content is ", name, email, service, message);
    };

    // console.log(servicesState.services[0].name);

    const services = servicesState.services.map((service) => {
        if (service.features.length === 0) {
            return (<OptionElement value={service.name}>{service.name}</OptionElement>);
        }
    });

    return (
        <ContactContainer>
            {/* <Container> */}
            <ContcatHeading>Contact Me</ContcatHeading>
            {
                formSubmited &&
                <ConfirmationContainer>
                    <SubmitConfirmation >
                        Thank You for contacting me. I will reach out to you soon.
                    </SubmitConfirmation>
                    <ConfirmationImageContainer><ConfirmationImage src='assets/images/bitmoji/2.2.png'></ConfirmationImage></ConfirmationImageContainer>
                </ConfirmationContainer>
            }
            {
                !formSubmited &&
                <FormElement onSubmit={sendEmail}>
                    <Row>
                        <Col lg='12'>
                            <LabelElement>Name*</LabelElement>
                        </Col>
                        <Col lg='12'>
                            <InputElement
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <LabelElement>Email*</LabelElement>
                        </Col>
                        <Col lg='12'>
                            <InputElement
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <LabelElement>Service</LabelElement>
                        </Col>
                        <Col lg='12'>
                            <SelectElement
                                id="services"
                                name="services"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                placeholder='Select Service'>
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
                            <InputTextArea
                                rows='6'
                                type="text"
                                name="message"
                                value={message}
                                onChange={(e) => { setMessage(e.target.value) }}
                                placeholder='Message'
                                required
                            />
                        </Col>
                    </Row>
                    <FormSubmitButton>Submit</FormSubmitButton>
                </FormElement>
            }
            {/* </Container> */}
        </ContactContainer>
    )
}

export default Enquiry
