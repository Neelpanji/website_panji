import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import {FaPhone, FaMobile, FaEnvelope} from "react-icons/fa";
import { FooterContainer, FooterCopyright, FooterLink, FooterLinks,FooterMail,FooterRow,FooterRectangle } from './FooterElements';

const Footer = () => {
    return (
        <div>
        <FooterRectangle/>
        <FooterContainer>
        
        {/* <FooterLinks>
            <FooterLink to={process.env.PUBLIC_URL+'/'} >Home</FooterLink>
            <FooterLink to={process.env.PUBLIC_URL+'/aboutus'} >About Us</FooterLink>
            <FooterLink to={process.env.PUBLIC_URL+'/products'} >Products</FooterLink>
            <FooterLink to={process.env.PUBLIC_URL+'/contact'} >Contact Us</FooterLink>
            <FooterMail href="mailto: panjiKaMal@gmail.com"><FaEnvelope /> <div style={{paddingLeft: "5px"}}/>sarthi_abc@yahoo.com</FooterMail>
        </FooterLinks>
        <FooterCopyright>
            © Copyright 2021. ABC Power Systems. All Rights Reserved.
        </FooterCopyright>
    </FooterContainer> */}
        <Container>
            <FooterRow>
                <Col md='8' xs='6'>
                    
                    <FooterRow>
                        <Col md='3' xs='12'><FooterLink to="/#hero" >Home</FooterLink></Col>
                        <Col md='3' xs='12'><FooterLink to="/about#top" >About Us</FooterLink></Col>
                        <Col md='3' xs='12'><FooterLink to="/services#top" >Services</FooterLink></Col>
                        <Col md='3' xs='12'><FooterLink to="/contact#top" >Contact</FooterLink></Col>
                        
                    </FooterRow>
                    
                </Col>
                <Col md='4' xs='6'>
                    {/* <a className='link-footer' href="tel:+91-07922942339"> <FaPhone/> (079) 22942339</a>
                    <br/>
                    <a className='link-footer' href="tel:+91-9825029182"> <FaMobile/> +91 9825029182</a>
                    <br/> */}
                    <FooterMail className='link-footer' href="mailto: neel@podleafproductions.com"><FaEnvelope /><div style={{paddingLeft: "5px"}}/> neel@podleafproductions.com</FooterMail> 
                </Col>
                
                <Col>
                    <FooterCopyright>
                    © Copyright {new Date().getFullYear()}. Neel Panji. All Rights Reserved.
                    </FooterCopyright>
                    <FooterCopyright>
                        <FooterMail target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohitgidwani13">Made by Mohit</FooterMail>
                    </FooterCopyright>
                </Col>
            </FooterRow>
        </Container>
        </FooterContainer>
    </div>
    )
}

export default Footer
