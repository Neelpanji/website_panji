import React from 'react'
import ServicesDropdown from './ServicesDropdown';
import ServicesNavbar from './ServicesNavbar'

const SelectService = (props) => {

    return (
        <>
            {!props.mobileView && <ServicesNavbar scrollPercentage={props.scrollPercentage}/>}

            {props.mobileView && <ServicesDropdown  />}
            
        </>
    )
}

export default SelectService