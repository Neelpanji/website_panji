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
                        <Col md='3' xs='12'><FooterLink to={process.env.PUBLIC_URL+'/'} className='link-footer'>Home</FooterLink></Col>
                        <Col md='3' xs='12'><FooterLink to={process.env.PUBLIC_URL+'/aboutus'} className='link-footer'>About Us</FooterLink></Col>
                        <Col md='3' xs='12'><FooterLink to={process.env.PUBLIC_URL+'/products'} className='link-footer'>Products</FooterLink></Col>
                        <Col md='3' xs='12'><FooterLink to={process.env.PUBLIC_URL+'/contact'} className='link-footer'>Contact Us</FooterLink></Col>
                        
                    </FooterRow>
                    
                </Col>
                <Col md='4' xs='6'>
                    {/* <a className='link-footer' href="tel:+91-07922942339"> <FaPhone/> (079) 22942339</a>
                    <br/>
                    <a className='link-footer' href="tel:+91-9825029182"> <FaMobile/> +91 9825029182</a>
                    <br/> */}
                    <FooterMail className='link-footer' href="mailto: sample@gmail.com"><FaEnvelope /><div style={{paddingLeft: "5px"}}/> panjiKaMal@gmail.com</FooterMail> 
                </Col>
                
                <Col>
                    <FooterCopyright>
                    © Copyright 2021. ABC Power Systems. All Rights Reserved.
                    </FooterCopyright>
                </Col>
            </FooterRow>
        </Container>
        </FooterContainer>
    </div>
    )
}

export default Footer
