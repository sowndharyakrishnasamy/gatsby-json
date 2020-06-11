import React from "react"
import JSONData from "../content/Footer.json"
import "../css/main.css"
import { Link } from "gatsby"
import linkedin from "../images/linked-in.png";
import footerLogo from "../images/footer_logo.png"
class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="container-max-width">
                    <div>
                        <p>
                        <img src={footerLogo} alt="logo"/>
                        <Link to="#"><img src={linkedin} alt="linked in"/>{JSONData.linkedin}</Link>
                        </p>
                        <p className="copyright">{JSONData.copyright}</p>
                    </div>
                    <div className="footer-menu">
                    <nav>
                        <ul>
                            {JSONData.footer1.map((data,index)=>{
                                return <li key={index}><Link to={data.link}>{data.text}</Link></li>
                            })}
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            {JSONData.footer2.map((data,index)=>{
                                return <li key={index}><Link to={data.link}>{data.text}</Link></li>
                            })}
                        </ul>
                    </nav>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer