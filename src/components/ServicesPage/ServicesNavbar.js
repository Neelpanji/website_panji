import React from 'react'
import servicesJson from '../../shared/newServices.json';
import { SerivceContent } from '../Services/ServicesElements';

const ServicesNavbar = (props) => {

    const handleOnclick = (index)=>{
        props.selectMainServiceId(index);
    }


    const mainServices = servicesJson.main_services.map((mainService,index)=>{
        return (<button onClick={()=>handleOnclick(index)}>{mainService.name} -{index}- </button>)

    });

    return (
        <>
            <div>ServicesNavbar</div>
            {mainServices}
            {props.mainServiceId} is selected.
        </>
        
    )
}

export default ServicesNavbar