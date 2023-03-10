import React from 'react'
import { useState } from 'react';
import ServicesDropdown from './ServicesDropdown';
import ServicesNavbar from './ServicesNavbar'

const SelectService = (props) => {

    return (
        <div>
            {!props.mobileView && <ServicesNavbar mainServiceId={props.mainServiceId} selectMainServiceId = {props.selectMainServiceId}/>}

            {props.mobileView && <ServicesDropdown mainServiceId={props.mainServiceId} selectMainServiceId = {props.selectMainServiceId} />}
            
        </div>
    )
}

export default SelectService