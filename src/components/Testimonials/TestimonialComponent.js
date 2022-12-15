import React from 'react';
import { TestimonialContent, TestimonialContentContainer, TestimonialContentHeading, TestimonialHeading, TestimonialHr, TestimonialImage, TestimonialImageContainer, TestimonialVideo, TestimonialVideoContainer, TestimonialVideoEmbed, TestimonialWholeContentContainer } from './TestimonialsElements';


const TestimonialComponent = ({ testimonial }) => {
    return (
        <>
            <TestimonialHr />

            <TestimonialVideoContainer>
                <TestimonialVideo >
                    <TestimonialVideoEmbed width="560" height="315" src={testimonial['video-embedded-link']} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </TestimonialVideo>
            </TestimonialVideoContainer>

            <TestimonialWholeContentContainer>
                <TestimonialImageContainer >
                    <TestimonialImage >
                        <img width={"100%"} src={testimonial['image-url']}></img>
                    </TestimonialImage>
                </TestimonialImageContainer>
                <TestimonialContentContainer>
                    <TestimonialContentHeading>{testimonial.name}</TestimonialContentHeading>
                    <TestimonialContent>{testimonial.testimonial}</TestimonialContent>
                </TestimonialContentContainer>
            </TestimonialWholeContentContainer>

            <TestimonialHr />
        </>
    )
}

export default TestimonialComponent