import React from "react"


import { useStaticQuery, graphql } from "gatsby"
import LinkButton from "./LinkButton";


const BgColumnComponent =()=>{
    const JSONData = useStaticQuery(graphql`
    query{
        contentJson(component: {eq: "Bg component"}) {
          title
          description
          cards {
            title
            description
            imageUrl {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
             linkbutton {
              link
              text
            }
          }
        }
      }
      `);
    
    return(
        <div className="investment-wrapper padding-50 bottom-50">
          <div className="container-max-width">
            <h3>{JSONData.contentJson.title}</h3>
            <p>{JSONData.contentJson.description}</p>
            <div className="card-wrapper">
            {JSONData.contentJson.cards.map((data,key)=>{
                return(<div key={key}>
                    <img src={data.imageUrl.childImageSharp.fluid.src} alt="card images"/>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <LinkButton data={data.linkbutton}/>
                </div>)
            })}
            </div>
          </div>
        </div>
    )
}
export default BgColumnComponent