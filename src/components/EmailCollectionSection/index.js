import React from 'react'
import { useState } from 'react';
import { EmailCollectionContainer, FormContainer, FormElement, FormSubmitButton, InputElement, LabelElement } from './EmailSectionElements';

export const EmailCollection = () => {
    const [formSubmited, setFormSubmitted] = useState(false);

    const [email, setEmail] = useState("");

    const sendEmail = (e) => {
        // add api !
        e.preventDefault();
        // mohit - 'service_9pezary', 'template_oa0jgdj', e.target, 'user_H2i5PETnod5gp0FBBylNm'
        // panji - service_hllzzpo , template_6qbrr2s , user_nlsEMvuE69qao2t7h0SCS
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify({
                "service_id": "service_9pezary",
                "template_id": "template_oa0jgdj",
                "user_id": "user_H2i5PETnod5gp0FBBylNm",
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
                // setFormSubmitted(true);
                setEmail("");
                console.log("Response for submitted mail is ", res);
                setFormSubmitted(true);
            })
            .catch((error) => {
                console.log("Form submission has failedwith error - ", error);
            });
    }

    return (
        <EmailCollectionContainer>
        <FormContainer>
            <FormElement onSubmit={sendEmail}>
                <LabelElement>
                    Please give me your email, and we will NOT COLD MAIL YOU .....
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
        </EmailCollectionContainer>
    )
}
