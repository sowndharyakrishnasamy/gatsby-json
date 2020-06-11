import React from "react"
import JSONData from "../content/Home-header.json";

class HomeHeader extends React.Component{
    render(){
        const limit = JSONData.descriptionlink.linkPosition.split(",");
        const start = limit[0];
        const end = limit[1];
        return(
            <div className="home-banner bottom-50">
                <div className="container-max-width">
                    <div>
                        <h1>{JSONData.title}</h1>
                        <h4>{JSONData.descriptionlink.content.substr(0,start)}
                            {<a href={JSONData.descriptionlink.link}>{JSONData.descriptionlink.content.substr(start,end)}</a>}
                            {JSONData.descriptionlink.content.substr(end,JSONData.descriptionlink.content.length)}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeHeader