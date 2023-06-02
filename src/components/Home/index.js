import React,{useState} from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Hero from '../Hero';
import Services from '../Services';
import Clients from '../Clients';
import Conversation from '../Conversation';
import Testimonials from '../Testimonials';

// import { useController } from 'react-scroll-parallax';
// import { useLayoutEffect } from 'react';


// const ParallaxCache = () => {
//   const { parallaxController } = useController();

//   useLayoutEffect(() => {
//       const handler = () => parallaxController.update();
//       window.addEventListener('load', handler);
//       return () => window.removeEventListener('load', handler);
//   }, [parallaxController]);

//   return null;
// };

const Home = () => {


    const ServicesComponent = () => {
        return(
            <Services />
        );
    }

    const ClientsComponent = () => {
        return(
            <Clients />
        );
    }

    return (
        <div style={{backgroundColor: "black"}}>
            <section id="hero">
            <Element name="hero" className="element">
                <Hero id='hero'/>
            </Element>
            </section>
            {/* <EmailCollection></EmailCollection> */}
            <section id="conversation">
                <Conversation />
            </section>
            <section id="services">
            <Element name="services" className="element">
                {/* <Services /> */}
                <ServicesComponent />
            </Element>
            </section>
            <Element>
                <Testimonials />
            </Element>
            <section id="clients">
            <Element name="clients" className="element">
                <ClientsComponent />
            </Element>
            </section>
        </div>
    )
}

export default Home
