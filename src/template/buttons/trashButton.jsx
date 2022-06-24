import React from "react";

import If from "../if";
import {FaTrashAlt}from 'react-icons/fa'


export default props =>(
    <If test={!props.hide} >
        <button className={"btn btn" + props.style}
            onClick={props.onClick}> 
            <FaTrashAlt/>
        </button>
    </If>

)