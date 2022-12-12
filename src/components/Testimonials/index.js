import React from 'react'
import TestimonialComponent from './TestimonialComponent'
import {  TestimonialHeading } from './TestimonialsElements'
import Carousel from "react-multi-carousel";
import { useSelector } from 'react-redux';
import { Loading } from '../Loading/LoadingComponent';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 560 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 560, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Testimonials = () => {

    const testimonialsState = useSelector(state => state.testimonials);


    const testimonials_section = testimonialsState.testimonials.map((testimonial, index) => {
        // console.log(client, index);
        return (<div><TestimonialComponent testimonial={testimonial}></TestimonialComponent></div>);
    });

    if (testimonialsState.isLoading) {
		return (
			<Loading />
		);
	}
	else if (testimonialsState.errMess) {
		return (<h4>{testimonialsState.errMess}</h4>);
	}
	else {
    return (
        <>
            <TestimonialHeading>Testimonials</TestimonialHeading>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3500}
                keyBoardControl={true}
                customTransition="all .7s"
                transitionDuration={700}
                containerClass="carousel-container"
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                {testimonials_section}
            </Carousel>
        </>


    )
    }
}

export default Testimonials