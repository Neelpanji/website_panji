import React,{useState} from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Hero from '../Hero';
import Services from '../Services';
import Clients from '../Clients';
import Conversation from '../Conversation';

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

const Home = (props) => {

    console.log(props);

    const ServicesComponent = () => {
        return(
            <Services services={props.servicesProps.services}
            servicesLoading={props.servicesProps.isLoading}
            servicesErrMess={props.servicesProps.errMess}
            />
        );
    }

    const ClientsComponent = () => {
        return(
            <Clients clients={props.clientsProps.clients}
            clientsLoading={props.clientsProps.isLoading}
            clientsErrMess={props.clientsProps.errMess}
            />
        );
    }

    return (
        <div style={{backgroundColor: "black"}}>
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
                {/* <Services /> */}
                <ServicesComponent />
            </Element>
            </section>
            <section id="clients">
            <Element name="clients" className="element">
                <ClientsComponent />
            </Element>
            </section>
        </div>
    )
}

export default Home
