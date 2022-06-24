import React from "react";

import If from "../if";
import {FaUndo} from 'react-icons/fa'

export default props =>(
    <If test={!props.hide} >
        <button className={"btn btn" + props.style}
            onClick={props.onClick}> 
            <FaUndo/>
        </button>
    </If>

)