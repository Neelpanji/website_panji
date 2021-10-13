import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
    HeroContainer,
    HeroImage,
    HeroHeading,
    HeroRectangle,
    HeroHeadingIn,
    HeroRectangleContainer
} from './HeroElements';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

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
    return (
        // <div style={{ background:'#fff'}}>
        //     <img src='/assets/images/mic-v-big-gradiented-green.png' width='100%'></img>
        // </div>
        <HeroContainer>
            {/* <HeroImage ></HeroImage> */}
            <HeroHeading>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="1.5" animateOnce="true" delay="500">
                Let's Make That <br/> Podcast Dream Of Yours <br/> 
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration='2' animateOnce="true" delay="500">
                <HeroHeadingIn>A Reality</HeroHeadingIn>
                </ScrollAnimation>
            </HeroHeading>

            <HeroImage />

            <HeroRectangleContainer>
            <ScrollAnimation animateIn="animate__fadeInLeft" duration='4' animateOnce="true">
                <HeroRectangle/>
            </ScrollAnimation>
            </HeroRectangleContainer>
            {/* <ParallaxCache /> */}
            {/* <Parallax x={[-20,20]} y={[20,-20]} > */}
            
            {/* </Parallax> */}
            {/* <HeroImg /> */}
        </HeroContainer>
    )
}

export default Home
