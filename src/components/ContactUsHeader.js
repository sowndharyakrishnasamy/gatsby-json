import React from "react"
import JSONData from "../content/Contact-us-header.json";

import "../css/main.css";

const ContactUsHeader = () =>(
    <div className="header-container">
            <div className="container-max-width">
                <div className="bg-wrapper">
                    <ul>
                        {JSONData.breadcrumb.map((data,index) => {
                            if(data.link !== ""){
                                return (
                                    <li key={index}>
                                    <a href={data.link}>{data.content}</a>
                                    </li>
                                )
                            }
                            else{
                            return <li key={data}>{data.content}</li>
                                }
                        })}
                    </ul>
                    <h1>{JSONData.title}</h1>
                    <p>{JSONData.description}</p>
                </div>
            </div>
         </div>
)
export default ContactUsHeader