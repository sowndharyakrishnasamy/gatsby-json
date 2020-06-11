import React from "react";
import JSONData from "../content/Text-with-2-btn.json"
import "../css/main.css"
import Button from "../components/Button";
class TextWith2Btn extends React.Component{
    render(){
        const limit = JSONData.descriptionlink.linkPosition.split(",");
        const start = limit[0];
        const end = limit[1];
        return(
            <div className="container-max-width contact-wrapper">
            <hr/>
            {JSONData.content.map((data,index)=>{
                return(
                    <p key={index}>{data}</p>
                )
            })}
            <hr/>
            <h2>{JSONData.title}</h2>
            <p>{JSONData.descriptionlink.content.substr(0,start)}
            {<a href={JSONData.descriptionlink.link}>{JSONData.descriptionlink.content.substr(start,end)}</a>}
            {JSONData.descriptionlink.content.substr(end,JSONData.descriptionlink.content.length)}</p>
            <div className="btn-wrapper">
                {JSONData.Buttons.map((data,index)=>{
                    return(<Button data={data} key={index}/>)
                })}
            </div>
            <hr/>
            </div>
            
        )

    }
}
export default TextWith2Btn