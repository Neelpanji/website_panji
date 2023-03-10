import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Loading } from '../Loading/LoadingComponent';
import { ServiceHeading, ServicesContainer } from './ServicePageElements';

import servicesJson from '../../shared/newServices.json';
import SelectService from './SelectService';
import { useState } from 'react';
import ServiceContent from './ServiceContent';

const Services = () => {
    const servicesState = useSelector(state => state.services);

    // console.log(servicesJson.main_service);
    // console.log(servicesJson.main_service[0]);
    // console.log(servicesJson.main_service[0].name);
    // console.log(servicesJson.main_service[0].services);
    // console.log(servicesJson.main_service[0].services[0].name);
    // console.log(servicesJson.main_service[0].services[0].sub_services);

    const [mainServiceId, selectMainServiceId] = useState(0);

    // to manage resizes
    const [mobileView, setMobileView] = useState(false);

    useEffect(()=>{
        setMobileView(window.innerWidth<=768);
    },[]);

    React.useEffect(() => {
        function handleResize() {
            setMobileView(window.innerWidth<=768);
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });
    
    if(servicesState.isLoading)
    {
      return(
        <Loading />
      );
    }
    else if(servicesState.errMess)
    {
      return(<h4>{servicesState.errMess}</h4>);
    }
    else{
        return(
            <ServicesContainer>
                <ServiceHeading>Services</ServiceHeading>

                <SelectService mainServiceId={mainServiceId} selectMainServiceId = {selectMainServiceId} mobileView={mobileView}/>
                
                <ServiceContent mainServiceId={mainServiceId}/>

            </ServicesContainer>
            
        );
    }
}

export default Services