import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
    HeroContainer,
    HeroImage,
    HeroHeading,
    HeroRectangle,
    HeroHeadingIn
} from './HeroElements';

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
            <HeroHeading>Let's Make That <br/> Podcast Dream Of Yours <br/> <HeroHeadingIn>A Reality</HeroHeadingIn></HeroHeading>
            {/* <Parallax x={[-100,100]}> */}
            <HeroRectangle/>
            {/* </Parallax> */}
            {/* <ParallaxCache /> */}
            {/* <Parallax x={[-20,20]} y={[20,-20]} > */}
            <HeroImage />
            {/* </Parallax> */}
            {/* <HeroImg /> */}
        </HeroContainer>
    )
}

export default Home
