import React from "react"


import { useStaticQuery, graphql } from "gatsby"
import Button from "../components/Button"

const IconColumn = () => {
    const JSONData = useStaticQuery(graphql`
    query{
        contentJson(component: {eq: "Icon Three Column"}) {
          title
          cards {
            imageUrl {
                childImageSharp {
                    fluid {
                    src
                  }
                }
              }
            heading
            description
          }
          Buttons {
            btn
            link
            type
          }
        }
      }`
    )
    return (
        <div className="container-max-width bottom-50">
            <h2>{JSONData.contentJson.title}</h2>
            <div className="three-column">
                {JSONData.contentJson.cards.map((data,key)=>{
                   return( <div key={key}>
                        <img src={data.imageUrl.childImageSharp.fluid.src} alt="imagealt"/>
                        <h4>{data.heading}</h4>
                        <p>{data.description}</p>
                     </div>
                   )
                })}
            </div>
            <div className="flex">
            {JSONData.contentJson.Buttons.map((data,key)=>{
                  return (<Button data={data} key={key}/>)
                })}
            </div>
        </div>
    )
}
export default IconColumn