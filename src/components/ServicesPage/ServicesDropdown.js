import React, { useEffect, useState } from 'react'
import { ServiceDropdownContainer, ServiceDropdownOption, ServiceDropdownSelect } from './ServicePageElements';
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateSelectedService } from '../../redux/ActionCreators';

const getOptions = (servicesJson) => {
	
	const navbarElements = [];
	navbarElements.push(servicesJson.main_service.name);
	navbarElements.push.apply(navbarElements, servicesJson.main_service.sub_services.map((sub_service) => {
		return (
			sub_service.name
		);
	}))
	const options = navbarElements.map((subService, index) => {
		return ({ value: `${index}`, label: `${subService}` });
	});

	return { options, navbarElements };
};

const ServicesDropdown = (props) => {

	const dispatch = useDispatch();

	const servicesState = useSelector(state => state.services);
	const selectedServiceGlobal = useSelector(state => state.ui.selectedService);
	const servicesJson = servicesState.services;

	const customStyles = {
		option: (defaultStyles, state) => ({
			...defaultStyles,
			color: state.isSelected ? "#70D9B8" : "#fff",
			backgroundColor: "black",
			fontSize: "1.3rem",
			border: state.isSelected ? "4px solid #70D9B8" : "2px solid white",
			padding: "4px",
			borderRadius: "0.5rem",
			animation: "fadeIn .7s",
			marginTop: "5px"
		}),

		control: (defaultStyles, state) => ({
			...defaultStyles,
			backgroundColor: "black",
			color: "#70D9B8",
			fontSize: "1.3rem",
			padding: "3px",
			margin: "0",
			border: "4px solid white",
			boxShadow: "none",
			borderRadius: "0.5rem",

		}),
		singleValue: (defaultStyles) => ({
			...defaultStyles, color: "#70D9B8",
		}),
		menu: (defaultStyles) => ({
			...defaultStyles,
			background: "black",

		}),
		menuList: (defaultStyles) => ({
			...defaultStyles,
			padding: "0",
		}),
	};

	let { options, navbarElements} = getOptions(servicesJson);



	// console.log(navbarElements.length);

	const [selectedOptionLocal, setSelectedOptionLocal] = useState(options[selectedServiceGlobal])

	useEffect(() => {
		// console.log(selectedOption.value);
		dispatch(updateSelectedService(parseInt(selectedOptionLocal.value)));

		let correction = -120;
		const elem = document.getElementById(`service${selectedOptionLocal.value}`);
		const rect = elem.getBoundingClientRect();
		setTimeout(function() {window.scrollTo({ top: window.pageYOffset+ rect.y + correction, behavior: 'smooth' });},50)
		// window.scrollTo({ top: window.pageYOffset+ rect.y + correction, behavior: 'smooth' });
		// console.log("selected option detected is ",selectedOption);
		// console.log("scrolling to ",window.pageYOffset+ rect.y + correction);
	}, [selectedOptionLocal]);

	useEffect(()=>{
		window.scrollTo({top:0, behavior:'smooth'});
	},[]);

	return (
		<>
			<ServiceDropdownContainer>
				<ServiceDropdownSelect
					defaultValue={selectedOptionLocal}
					onChange={setSelectedOptionLocal}
					options={options}
					styles={customStyles}
					isSearchable={false}
				/>
			</ServiceDropdownContainer>
		</>
	)
}

export default ServicesDropdown;