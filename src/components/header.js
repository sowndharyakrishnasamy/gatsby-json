import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import search from "../images/search.png"

const Header =()=>{
  const JSONData = useStaticQuery(graphql`
  query MyQuery {
    contentJson(component: {eq: "Header"}) {
      topnav {
        link
        text
      }
      iconheader {
        alt
        imageUrl {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        link
        text
      }
      logo {
        link
        imageUrl {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      mainnav {
        link
        text
        submenu {
          link
          text
          subnav {
            link
            text
            childnav {
              link
              text
            }
          }
        }
      }
    }
  }  
  `);
    return(
      <header>
        <div>
          <div className="top-header">
            <div className="container-max-width">
              <nav>
                <ul>
                  {JSONData.contentJson.topnav.map((data,index)=>{
                    return(
                      <li key={index}><Link to={data.link}>{data.text}</Link></li>
                    )
                  })}
                </ul>
              </nav>
              <div className="icon-header">
                 <ul>
                   {JSONData.contentJson.iconheader.map((data,index)=>{
                     return(
                       <li key={index}><Link to="#"><img src={data.imageUrl.childImageSharp.fluid.src} alt={data.alt}></img><p>{data.text}</p></Link></li>
                     )
                   })}
                 </ul>
              </div>
            </div>
          </div>
      
          <div className="menu-header">
          <div className="container-max-width">
             <div className="logo-div">
                <Link to={JSONData.contentJson.logo.link}><img src={JSONData.contentJson.logo.imageUrl.childImageSharp.fluid.src} alt="Logo"></img></Link>
             </div>
             <div className="main-menu">
               <div>
                 <nav className="main-nav">
                   <ul>
                   {JSONData.contentJson.mainnav.map((data,index)=>{
                     return(<li key={index}><Link to={data.link}>{data.text}</Link><ol>
                     {
                       data.submenu.map((val,key)=>{
                         if(val.subnav !== null){
                          return(<li key={key}><Link to={val.link}>{val.text}</Link><ol>{
                              val.subnav.map((data,k)=>{
                                if(data.childnav !== null){
                                return (<li key={k}><Link to={data.link}>{data.text}</Link><ul>{
                                   data.childnav.map((t,k)=>{
                                     return ( <li key={k}><Link to={t.link}>{t.text}</Link></li>)
                                   })
                                }</ul></li>)
                               }
                               else{
                                return (<li key={k}><Link to={data.link}>{data.text}</Link></li>)
                               }
                               })
                          }</ol></li>)
                         }
                         else{
                          return(<li key={key}><Link to={val.link}>{val.text}</Link></li>)
                         }
                       })
                     }</ol></li>)
                      
                    
                   })}
                   </ul>
                </nav>
               </div>
                <div>
                  <img src={search} alt="search"/>
                </div>
                <div className="float-right" id="mobile-hamburger">
                  <p className="hamburger"></p>
                  <p className="hamburger"></p>
                  <p className="hamburger"></p>
                </div>
             </div>
          </div>
        </div>
        </div>
     
      </header>
    )
  }



export default Header
