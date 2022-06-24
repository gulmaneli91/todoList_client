import React from "react";
import {BsPlusSquareFill} from 'react-icons/bs'
import If from "../if";


export default props =>(
    <If test={!props.hide} >
        <button className={"btn btn" + props.style}
            onClick={props.onClick}> 
            <BsPlusSquareFill/>
        </button>
    </If>

)
