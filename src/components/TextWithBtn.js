import React from "react"
import "../css/main.css"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../components/Button"
const TextWithBtn =()=>{
    const JSONData = useStaticQuery(graphql`
    query{
        contentJson(component: {eq: "Text with Btn"}) {
          description
          title
          imageDescription
          imageUrl {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          subtitle
          subdescription
          Buttons {
            btn
            link
            type
          }
        }
      } 
    `);
    return(
        <div className="container-max-width bottom-50">
            <h1>{JSONData.contentJson.title}</h1>
            <p>{JSONData.contentJson.description}</p>
            <hr/>
            <div className="simple-wrapper">
                <img src={JSONData.contentJson.imageUrl.childImageSharp.fluid.src} alt="img"/>
                <p>{JSONData.contentJson.imageDescription}</p>
            </div>
            <hr/>
            <h2>{JSONData.contentJson.subtitle}</h2>
            <p className="bottom-50">{JSONData.contentJson.subdescription}</p>
            <div className="flex">
            {JSONData.contentJson.Buttons.map((data,key)=>{
                return( <Button data={data} key={key}/>)
            })}
                
            </div>
        </div>
    )
 

}
export default TextWithBtn