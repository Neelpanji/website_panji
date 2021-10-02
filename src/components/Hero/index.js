import React from 'react';
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
            <HeroRectangle/>
            <HeroImage />
        </HeroContainer>
    )
}

export default Home
