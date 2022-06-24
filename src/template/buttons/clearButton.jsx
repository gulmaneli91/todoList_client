import React from "react";
import {AiOutlineClear} from 'react-icons/ai'
import If from "../if";


export default props =>(
    <If test={!props.hide} >
        <button className={"btn btn" + props.style}
            onClick={props.onClick}> 
            <AiOutlineClear/>
        </button>
    </If>

)