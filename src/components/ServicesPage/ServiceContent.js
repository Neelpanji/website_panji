import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

import ServiceContentMobile from './ServiceContentMobile';
import { ServiceContainer, ServiceContentConatiner, ServiceDescription, ServiceHeading, ServiceImage, ServiceInternalContainerImg, ServiceInternalContainerContent, ServicePoints, ServiceSection, WavesTop, KnowMoreButton } from './ServicePageElements';
import ScrollAnimation from 'react-animate-on-scroll';
import { useSelector } from 'react-redux';

const tempPricing = ['- $1400 Onwards',
		     '- $500 Onwards',
		     '- $500 Onwards',
		     '- $300/Month Onwards',
		     '- $300/Month Onwards'];

const MainService = (props) => {


	const subServices = props.servicesJson.main_service.sub_services.map((subServices, index) => {

		return (
			<ScrollAnimation key={index} offset={100} animateIn="animate__fadeInLeft" duration="1" animateOnce={true} delay={`${(index + 1) * 200}`}>
				<ServicePoints right={1} >
					{subServices.name.toLocaleUpperCase()} - {subServices.description}
				</ServicePoints>
			</ScrollAnimation>
		);
	});
	return (
		<>
			<ServiceHeading style={{ 'paddingTop': '40px' }}>{props.servicesJson.main_service.name.toLocaleUpperCase()} {tempPricing[0]}</ServiceHeading>
			<ServiceContentConatiner>
				<ServiceInternalContainerContent>
					<ServiceDescription>{props.servicesJson.main_service.description}</ServiceDescription>
					{subServices}
				</ServiceInternalContainerContent>
				<ServiceInternalContainerImg>
					<ServiceImage src={"/assets/images/services/0-1.png"} />
					<ServiceImage src={"/assets/images/services/0-2.png"} />
					<ServiceImage src={"/assets/images/services/0-3.png"} />
				</ServiceInternalContainerImg>
			</ServiceContentConatiner>
			<a href='/contact'><KnowMoreButton right={1}>Know More</KnowMoreButton></a>
		</>
	);
}

const ServiceContent = (props) => {

	const ref = useRef(null);

	const handleScroll = () =>{
		const docHeight = document?.body?.clientHeight;
		const clientHeight = ref?.current?.clientHeight;
		if(docHeight && clientHeight){
			const offset = docHeight - clientHeight;
			const pos = window.pageYOffset;
			const height = clientHeight - window.innerHeight+offset;
			props.setScrollPercentage(pos/height*100);
		}
		// console.log("scrolling done in desktop");
		
	}

	useEffect(() => {
		if(!props.mobileView){
			window.addEventListener('scroll', handleScroll, { passive: true });
	
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}

	}, []);
	

	const servicesState = useSelector(state => state.services);

	const servicesJson = servicesState.services;

	const services = servicesJson.main_service.sub_services.map((subService, index) => {
		const imgRight = index % 2;
		const features = subService.features.map((feature, index) => {
			
			return (<div  key={index}>
				<ScrollAnimation offset={100} animateIn={`animate__fadeIn${imgRight?'Left':'Right'}`} duration="1" animateOnce={true} delay={`${(index + 1) * 200}`}>
					<ServicePoints right={imgRight} >
						{feature}
					</ServicePoints>
				</ScrollAnimation>
			</div>);
		});
		return (
			<div key={index}>
				{imgRight === 0 &&
					<ServiceSection right={imgRight} id={`service${index + 1}`}>
						<WavesTop right={imgRight}>
							<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
								<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
								<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
								<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
							</svg>
						</WavesTop>
						<ServiceHeading>{subService.name.toLocaleUpperCase()} {tempPricing[index+1]}</ServiceHeading>
						<ServiceContentConatiner>
							<ServiceInternalContainerImg >
								<ServiceImage style={{ "width": "70%" }} src={`/assets/images/services/${index + 1}.png`} />
							</ServiceInternalContainerImg>
							<ServiceInternalContainerContent>
								<ServiceDescription>{subService.description}</ServiceDescription>
								{features}
							</ServiceInternalContainerContent>
						</ServiceContentConatiner>
							<a href='/contact'><KnowMoreButton  right={imgRight}>Know More</KnowMoreButton></a>
					</ServiceSection>
				}
				{imgRight === 1 &&
					< ServiceSection right={imgRight} id={`service${index + 1}`}>
						<WavesTop right={imgRight}>
							<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
								<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
								<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
								<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
							</svg>
						</WavesTop>
						<ServiceHeading>{subService.name.toLocaleUpperCase()} {tempPricing[index+1]}</ServiceHeading>
						<ServiceContentConatiner>
							<ServiceInternalContainerContent>
								<ServiceDescription>{subService.description}</ServiceDescription>
								{features}
							</ServiceInternalContainerContent>
							<ServiceInternalContainerImg >
								<ServiceImage style={{ "width": "70%" }} src={`/assets/images/services/${index + 1}.png`} />
							</ServiceInternalContainerImg>
						</ServiceContentConatiner>
						<a href='/contact'><KnowMoreButton right={imgRight}>Know More</KnowMoreButton></a>
					</ServiceSection >
				}

			</div>
		);
	});



	return (
		<>

			<ServiceContainer ref={ref}>
				<ServiceSection  right={1} id="service0">
					<MainService servicesJson={servicesJson} />
				</ServiceSection>
				{services}
			</ServiceContainer>

		</>

	)
}

export default ServiceContent
