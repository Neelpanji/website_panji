import React ,{useRef} from 'react';
import emailjs from 'emailjs-com';
import { Container, Row,Col } from 'reactstrap';
import { FormElement,ContcatHeading, LabelElement, InputElement, ContactContainer, InputTextArea, FormSubmitButton } from './ContactElements'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        // // !!!!!!!!!!!!!!!!!!!!!!!!!uncomment when want to test !!!!!!!!!!!!!!!!!!!!!!!!!
        // emailjs.sendForm('service_nc6j9ut', 'template_oa0jgdj', e.target, 'user_H2i5PETnod5gp0FBBylNm')
        //     .then((result) => {
        //         console.log(result.text);
        //         alert('Your Form has been Submitted. Thank You for reaching us.');
        //     }, (error) => {
        //         console.log(error.text);
        //     });
      };

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
                            <LabelElement>Message*</LabelElement>
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

export default Contact
