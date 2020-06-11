import React from "react";

import "../css/main.css"

const Button = (props) =>{
        if(props.data.type === "primary"){
            return(
             <div className ="primary-btn">
             <a href={props.data.link}>{props.data.btn}</a>
             <div className="new_arrow lg"><span className="arrow_line"><span></span></span></div>
             </div>
            ) 
         }
         else if(props.data.type === "secondary"){
            return(
                <div className ="secondary-btn">
                <a href={props.data.link}>{props.data.btn}</a>
                <div className="new_arrow lg"><span className="arrow_line"><span></span></span></div>
                </div>
               ) 
         }
   
}
export default Button 