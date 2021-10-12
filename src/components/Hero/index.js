import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
    HeroContainer,
    HeroImage,
    HeroHeading,
    HeroRectangle,
    HeroHeadingIn
} from './HeroElements';

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
            <Parallax x={[-20,20]} y={[20,-20]} >
            <HeroImage />
            </Parallax>
        </HeroContainer>
    )
}

export default Home
