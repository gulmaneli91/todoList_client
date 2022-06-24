import React from "react";
import {FaSistrix} from 'react-icons/fa'
import If from "../if";


export default props =>(
    <If test={!props.hide} >
        <button className={"btn btn" + props.style}
            onClick={props.onClick}> 
            <FaSistrix/>
        </button>
    </If>

)
