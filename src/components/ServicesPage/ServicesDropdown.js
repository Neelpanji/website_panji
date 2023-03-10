import React, { useEffect, useState } from 'react'
import servicesJson from '../../shared/newServices.json';
import { ServiceDropdownContainer, ServiceDropdownOption, ServiceDropdownSelect } from './ServicePageElements';
import Select from 'react-select';


const ServicesDropdown = (props) => {

	const customStyles = {
		option: (defaultStyles, state) => ({
			...defaultStyles,
			color: state.isSelected ? "#70D9B8" : "#fff",
			backgroundColor: "black",
			fontSize: "1.3rem",
			border: state.isFocused ?"4px solid #70D9B8":"2px solid white",
			padding:"2px",
			borderRadius:"0.5rem",
			animation: "fadeIn .7s",
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
			borderRadius:"0.5rem",

		}),
		singleValue: (defaultStyles) => ({
			...defaultStyles, color: "#70D9B8",
		}),
		menu: (defaultStyles) => ({
			...defaultStyles,
			background:"black",
		}),
		menuList: (defaultStyles) => ({
			...defaultStyles,
			padding: "0",
		}),
	};

	const options = servicesJson.main_services.map((mainService, index) => {
		return ({ value: `${index}`, label: `${mainService.name}` });
	});

	const [selectedOption, setSelectedOption] = useState(options[props.mainServiceId])


	useEffect(() => {
		props.selectMainServiceId(selectedOption.value)
	}, [selectedOption]);

	return (
		<>
			<ServiceDropdownContainer>
				<Select
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
					styles={customStyles}
				/>
			</ServiceDropdownContainer>
		</>
	)
}

export default ServicesDropdown