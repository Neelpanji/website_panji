import React,{useState} from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Hero from '../Hero';
import Services from '../Services';
import Clients from '../Clients';
import Conversation from '../Conversation';

const Home = () => {
    return (
        <div>
            <section id="hero">
            <Element name="hero" className="element">
                <Hero id='hero'/>
            </Element>
            </section>
            <section id="conversation">
                <Conversation />
            </section>
            <section id="services">
            <Element name="services" className="element">
                <Services />
            </Element>
            </section>
            <services id="clients">
            <Element name="clients" className="element">
                <Clients />
            </Element>
            </services>
        </div>
    )
}

export default Home
