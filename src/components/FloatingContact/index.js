import React from 'react';
import { FloatingContactContainer, FloatingContactLink, FloatingIcon } from './FloatingContactElements';
const FloatingContact = () => {
    return (
        // <FloatingContactLink href="#">
        <FloatingContactContainer>
            <a href="#"><FloatingIcon src="/assets/images/logos/instagram.png"/></a>
            <a href="#"><FloatingIcon src="/assets/images/logos/linkedin-3-48.png"></FloatingIcon></a>
            <a href="#"><FloatingIcon src="/assets/images/logos/facebook-3-48.png"></FloatingIcon></a>
            <a href="#"><FloatingIcon src="/assets/images/logos/messenger (1).png"></FloatingIcon></a>
            <a href="#"><FloatingIcon src="/assets/images/logos/black-back-closed-envelope-shape.png"></FloatingIcon></a>
        </FloatingContactContainer>
        // </FloatingContactLink>
    )
}

export default FloatingContact
