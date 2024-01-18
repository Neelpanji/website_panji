import React, { useEffect, useState } from 'react'
import { Close, CloseContainer, CloseIcon, FormContainer, FormElement, FormSubmitButton, InputElement, LabelElement, ModalContainer, RelativePosContainer } from './PopupModalElements'

const PopupModal = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(0);

    const [formSubmited, setFormSubmitted] = useState(false);

    const [email, setEmail] = useState("");

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsPopupOpen(!isPopupOpen);
        }, 4500);
        return () => clearTimeout(timer);
    }, [])

    const sendEmail = (e) => {
        // add api !
        e.preventDefault();
        // mohit - 'service_9pezary', 'template_oa0jgdj', e.target, 'user_H2i5PETnod5gp0FBBylNm'
        // panji - service_hllzzpo , template_6qbrr2s , user_nlsEMvuE69qao2t7h0SCS
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify({
                "service_id": "service_hllzzpo",
                "template_id": "template_6qbrr2s",
                "user_id": "user_nlsEMvuE69qao2t7h0SCS",
                "template_params": {
                    "email": email
                }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(res => res.text())
            .then((res) => {
                console.log("sent content had ", email);
                setFormSubmitted(true);
                setEmail("");
                console.log("Response for submitted mail is ", res);
                setFormSubmitted(true);
                setTimeout(() => { setIsPopupOpen(0); }, 2500);
            })
            .catch((error) => {
                console.log("Form submission has failedwith error - ", error);
            });
    }

    if (isPopupOpen) {
        return (
            <RelativePosContainer>
                <ModalContainer>
                    <CloseContainer>
                        <Close onClick={() => setIsPopupOpen(0)}>
                            <CloseIcon src="/assets/images/logos/icons8-close-window-96.png"></CloseIcon>
                        </Close>
                    </CloseContainer>
                    <FormContainer>
                        <FormElement onSubmit={sendEmail}>
                            <LabelElement>
                            Read <span style={{color:'#70D9B8'}}>FREE CASE STUDY OF OUR CLIENT - RESULTS OF PODCASTING WHEN DONE WITH THE RIGHT TEAM </span>
                            <br></br>
                            We ensure your privacy by following a NO-SPAM policy.
                            </LabelElement>
                            <InputElement
                                type="email"
                                name="name"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                required
                            >
                            </InputElement>
                            {
                                !formSubmited &&
                                <FormSubmitButton>Submit</FormSubmitButton>
                            }
                            {
                                formSubmited &&
                                <LabelElement> Thank You </LabelElement>
                            }
                        </FormElement>
                    </FormContainer>
                </ModalContainer>
            </RelativePosContainer>
        )
    } else {
        return (
            <></>
        )
    }

}

export default PopupModal