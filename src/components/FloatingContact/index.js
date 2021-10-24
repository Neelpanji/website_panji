import React from 'react';
import { FloatingContactContainer, FloatingContactLink, FloatingIcon } from './FloatingContactElements';
const FloatingContact = () => {
    return (
        // <FloatingContactLink href="#">
        <FloatingContactContainer>
            <a target="_blank" href="https://www.instagram.com/neelpanji/"><FloatingIcon src="/assets/images/logos/instagram.png"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/neelpanji/"><FloatingIcon src="/assets/images/logos/linkedin-3-48.png"></FloatingIcon></a>
            <a target="_blank" href="https://www.facebook.com/neel.panji"><FloatingIcon src="/assets/images/logos/facebook-3-48.png"></FloatingIcon></a>
            <a target="_blank" href="#"><FloatingIcon src="/assets/images/logos/messenger (1).png"></FloatingIcon></a>
            <a target="_blank" href="mailto: neelpanji@gmail.com"><FloatingIcon src="/assets/images/logos/black-back-closed-envelope-shape.png"></FloatingIcon></a>
        </FloatingContactContainer>
        // </FloatingContactLink>
    )
}

export default FloatingContact
