import React, { useEffect } from 'react'
import { SerivceContent } from '../Services/ServicesElements';
import { ServiceNavbarButton, ServiceNavbarButtonContainer, ServiceNavbarButtonLink, ServiceNavbarContainer, ServiceSlider, ServiceSliderContainer, SliderButton } from './ServicePageElements';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedService } from '../../redux/ActionCreators';

// const scrollWithOffset = (el) => {
//     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//     let yOffset = -220;
//     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
// }

const ServicesNavbar = (props) => {
    const servicesState = useSelector(state => state.services);
	const servicesJson = servicesState.services;

    const selectedServiceGlobal = useSelector(state => state.ui.selectedService);

    useEffect(()=>{
        let correction = -180;
		const elem = document.getElementById(`service${selectedServiceGlobal}`);
		const rect = elem.getBoundingClientRect();
		setTimeout(function() {window.scrollTo({ top: window.pageYOffset+ rect.y + correction, behavior: 'smooth' });},50)
    },[selectedServiceGlobal]);

    const dispatch = useDispatch();

	const setSelectedServiceGlobal = (idx) => {
		dispatch(updateSelectedService(idx));

        let correction = -180;
		const elem = document.getElementById(`service${idx}`);
		const rect = elem.getBoundingClientRect();
		setTimeout(function() {window.scrollTo({ top: window.pageYOffset+ rect.y + correction, behavior: 'smooth' });},50)
	}

    const navbarElements = [];
    navbarElements.push(servicesJson.main_service.name);

    navbarElements.push.apply(navbarElements, servicesJson.main_service.sub_services.map((sub_service) => {
        return (
            sub_service.name
        );
    }))

    // console.log(navbarElements);

    const [pos,setPose] = useState(0);

    useEffect(()=>{
        setPose(props.scrollPercentage*0.9+5);
    },[props.scrollPercentage]);

    const mainServices = navbarElements.map((subService, index) => {
        return (
            <ServiceNavbarButtonLink smooth
                to={`/services#service${index}`}
                // scroll={el => scrollWithOffset(el)}
                onClick={() => {setSelectedServiceGlobal(index)}}
                >
                    <ServiceNavbarButton>
                {subService}
                </ServiceNavbarButton>

            </ServiceNavbarButtonLink>
            
            );

    });



    return (
        <>            
        <ServiceNavbarContainer>
            <ServiceSliderContainer>
                <SliderButton pos={pos}></SliderButton>
                <ServiceSlider></ServiceSlider>
            </ServiceSliderContainer>
            <ServiceNavbarButtonContainer>
                {mainServices}
            </ServiceNavbarButtonContainer>
            </ServiceNavbarContainer>
        </>

    )
}

export default ServicesNavbar