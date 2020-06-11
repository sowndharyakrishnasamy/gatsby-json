import React from "react";

import { Link } from "gatsby"

const LinkButton = (props)=>{
    return(
        <div className="link">
        <Link to ={props.data.link}>{props.data.text}</Link>
        <div className="new_arrow lg"><span className="arrow_line"><span></span></span></div> 
        </div>
    )
}
export default LinkButton