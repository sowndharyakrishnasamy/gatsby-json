import React from "react"
import JSONData from "../content/Home-footer-banner.json";
import Button from "../components/Button";

const HomeFooterBanner = () =>{
    return(
        <div className="footer-banner">
          <div className="container-max-width">
            <h1>{JSONData.title}</h1>  
            <div className="flex">
            {JSONData.Buttons.map((data,key)=>{
                return(<Button data={data} key={key}/>)
            })} 
            </div>
          </div>
        </div>
    )
}
export default HomeFooterBanner