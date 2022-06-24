import React from "react";

import If from "../if";
import {MdDone} from'react-icons/md'


export default props =>(
    <If test={!props.hide} >
        <button className={"btn btn" + props.style}
            onClick={props.onClick}> 
                <MdDone/>
        </button>
    </If>

)