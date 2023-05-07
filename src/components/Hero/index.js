import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
    HeroContainer,
    HeroHeading,
    HeroRectangle,
    HeroHeadingIn,
    HeroRectangleContainer,
    HeroImage1,
    HeroImage2,
    HeroImageWrapper,
    ButtonHero,
    HeroButtonContainer,
    HeroRectangleContent,
    CustomBr
} from './HeroElements';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
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
    //Crafting your story into a compelling audio experience
    return (
        // <div style={{ background:'#fff'}}>
        //     <img src='/assets/images/mic-v-big-gradiented-green.png' width='100%'></img>
        // </div>
        <HeroContainer>
            {/* <HeroImage ></HeroImage> */}
            <HeroHeading>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration={1} animateOnce="true" delay="500">
                {/* Let's Make That <br/> Podcast Dream Of Yours <br/>  */}
                Crafting Your <HeroHeadingIn>Story</HeroHeadingIn>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration={1.5} animateOnce="true" delay="500">
                {/* Let's Make That <br/> Podcast Dream Of Yours <br/>  */}
                Into A Compelling <HeroHeadingIn>Audio <CustomBr/> Experience</HeroHeadingIn>
                </ScrollAnimation>
                {/* <ScrollAnimation animateIn="animate__fadeInLeft" duration='2' animateOnce="true" delay="500">
                <HeroHeadingIn>Podcast</HeroHeadingIn>
                </ScrollAnimation> */}
            </HeroHeading>

            <HeroImageWrapper>
            {/* <ScrollAnimation animateIn="animate__fadeInRight" duration="2" animateOnce="true" delay="500">
            <HeroImage1 />
            </ScrollAnimation> */}
            <ScrollAnimation animateIn="animate__fadeInRight" duration="1.5" animateOnce="true" delay="500">
            <HeroImage2 />
            </ScrollAnimation>
            </HeroImageWrapper>

            <HeroRectangleContainer>
            <ScrollAnimation animateIn="animate__fadeInLeft" duration='2.5' animateOnce="true" offset="0">
                <HeroRectangle>
                    <ScrollAnimation animateIn="animate__fadeIn" duration='3' animateOnce="true" delay="1000"  offset="0">
                    <HeroRectangleContent to="/#services" scroll={el => scrollWithOffset(el)}>
                    Jump To Services
                    </HeroRectangleContent>
                    </ScrollAnimation>
                </HeroRectangle>
            </ScrollAnimation>
            </HeroRectangleContainer>

            {/* <HeroButtonContainer>
                <ButtonHero>Jump To Services</ButtonHero>
            </HeroButtonContainer> */}

            {/* <ParallaxCache /> */}
            {/* <Parallax x={[-20,20]} y={[20,-20]} > */}
            
            {/* </Parallax> */}
            {/* <HeroImg /> */}
        </HeroContainer>
    )
}

export default Home
