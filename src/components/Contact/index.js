import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'reactstrap';
import { FormElement, ContactHeading, LabelElement, InputElement, ContactContainer, InputTextArea, FormSubmitButton, SubmitConfirmation, ConfirmationImageContainer, ConfirmationContainer, ConfirmationImage, ContactContentContainer, CalendlyContentContainer, CalendlyContent, CalendlyButton, Hr, FormHeading } from './ContactElements'
import { ConversationImage } from '../Conversation/ConversationElements';

const Contact = () => {
    const form = useRef();

    const [formSubmited, setFormSubmitted] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        // // !!!!!!!!!!!!!!!!!!!!!!!!!uncomment when want to test - panji !!!!!!!!!!!!!!!!!!!!!!!!!
        // emailjs.sendForm('service_hllzzpo', 'template_rwenu6d', e.target, 'user_nlsEMvuE69qao2t7h0SCS')
        //     .then((result) => {
        //         console.log(result.text);
        //         alert('Your Form has been Submitted. Thank You for reaching us.');
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        // // !!!!!!!!!!!!!!!!!!!!!!!!!uncomment when want to test - mohit !!!!!!!!!!!!!!!!!!!!!!!!!
        // emailjs.sendForm('service_sgr56di', 'template_hghbgby', e.target, 'user_H2i5PETnod5gp0FBBylNm')
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
                "service_id": "service_sgr56di",
                "template_id": "template_hghbgby",
                "user_id": "user_H2i5PETnod5gp0FBBylNm",
                "template_params": {
                    "name": name,
                    "mail": email,
                    "message": message
                }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.text())
            .then((res) => {
                console.log("sent content had ", name, email, message);
                setFormSubmitted(true);
                setName("");
                setEmail("");
                setMessage("");
                console.log("Response for submitted mail is ", res);
            })
            .catch((error) => {
                console.log("Form submission has failedwith error - ", error);
            });

        // alert('Your Form has been Submitted. Thank You for reaching us.');

        // this.form.reset();
    };

    return (
        <ContactContainer>
            {/* <Container> */}

            {
                <ContactHeading>Contact Me</ContactHeading>
            }

            {
                

                <CalendlyContentContainer>
                    <CalendlyContent>Book a 15 min call (it's free) </CalendlyContent>
                    <a href="https://calendly.com/neelpanji/30min" target={"_blank"}><CalendlyButton>Calendar</CalendlyButton></a>
                </CalendlyContentContainer>
                
            }

            {
                <Hr></Hr>
            }

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

                <ContactContentContainer>
                    <Row>
                        <Col lg='12'>
                            <FormHeading>Reach Me</FormHeading>
                            <FormElement onSubmit={sendEmail}>
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
                                <Col lg='12'>
                                    <LabelElement>Message*</LabelElement>
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
                                <FormSubmitButton>Submit</FormSubmitButton>
                            </FormElement>
                        </Col>
                        
                        {/* <Col lg='12'>
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
                            <LabelElement>Message*</LabelElement>
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
                        </Col> */}
                    </Row>
                </ContactContentContainer>

            }

            {/* </Container> */}


        </ContactContainer>
    )
}

export default Contact
