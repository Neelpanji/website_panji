import React from 'react'

import servicesJson from '../../shared/newServices.json';

const ServiceContent = (props) => {

	const mainServices = servicesJson.main_services[props.mainServiceId];

	console.log(mainServices);

	const services = mainServices.services.map((service,index)=>{

		const subService = service.sub_services.map((subService,index)=>{

			const features = subService.features.map((feature,index)=>{
				return(
					<div>* {feature}</div>
				);
			});

			return(
				<>
					<h3>{subService.name}</h3>
					<div>Following are features</div>
					{features}
				</>
			);
		});

		return(
			<div>
				<h2>{service.name}</h2>
				<div>Following are sub services</div>
				{subService}
				<div> ------------ </div>
			</div>
		);
	})

	return (
		<>
			<div>ServiceContent</div>
			<h1>{mainServices.name}</h1>
			{services}
		</>

	)
}

export default ServiceContent