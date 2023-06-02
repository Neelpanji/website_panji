import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Loading } from '../Loading/LoadingComponent';
import { ServiceMainHeading, ServicesMainContainer } from './ServicePageElements';

import SelectService from './SelectService';
import { useState } from 'react';
import ServiceContent from './ServiceContent';

const Services = () => {
    const servicesState = useSelector(state => state.services);

    // to manage resizes
    const [mobileView, setMobileView] = useState(false);


    const [scrollPercentage,setScrollPercentage] = useState(0);
    

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
            <ServicesMainContainer>
                <SelectService scrollPercentage={scrollPercentage} mobileView={mobileView}/>
                <ServiceMainHeading>Services</ServiceMainHeading>
                <ServiceContent setScrollPercentage={setScrollPercentage} mobileView={mobileView}/>

            </ServicesMainContainer>
            
        );
    }
}

export default Services