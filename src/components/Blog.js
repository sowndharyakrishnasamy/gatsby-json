import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import LinkButton from "./LinkButton";

const Blog =()=>{
    const JSONData = useStaticQuery(graphql`
    query{
        contentJson(component: {eq: "Blog"}) {
          title
          linkbutton {
            link
            text
          }
          cards {
            heading
            title
            link
            imageUrl {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
          }
        }
      }
      `);
      // if(JSONData.contentJson){
          return(
          <div className="container-max-width blog">
              <div>
                  <h2>{JSONData.contentJson.title}</h2>
                  <LinkButton data={JSONData.contentJson.linkbutton}/>
              </div>
              <div className="blog-wrapper">
              {JSONData.contentJson.cards.map((data,key)=>{
                  return(
                  <div key={key}>
                      <Link to={data.link}><img src={data.imageUrl.childImageSharp.fluid.src} alt="blog"/></Link>
                      <div>
                          <h5>{data.heading}</h5>
                          <h4>{data.title}</h4>
                      </div>
                  </div>
                  )
              })}
              </div>
            </div>
          )
      // }
      // else{
      //   return (<h1 style={{color:'red'}}>Something went wrong in rendering Data</h1>)
      // }
}
export default Blog