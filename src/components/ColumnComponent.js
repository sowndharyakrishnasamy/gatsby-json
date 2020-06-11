import React from "react"

import "../css/main.css"

class ColumnComponent extends React.Component{
    render(){
        return(
            <div className="container-max-width">
                <h2>{this.props.data.title}</h2>
                <div className="card-container">
                {this.props.data.cards.map((val,index)=>{
                    if(val.email !== "" && val.phonenumber !== ""){
                        return (
                            <div className="card" key={index}>
                                <h5>{val.title}</h5>
                                <p>{val.phonenumber}</p>
                                <a href={val.email}>{val.email}</a>
                            </div>
                        )
                    }
                    else {
                        return(
                            <div className="card" key={index}>
                                <h5>{val.title}</h5>
                                {val.descriptionArray.map((para,index)=>{
                                    return(
                                        <p key={index}>{para}</p>
                                    )
                                })}
                            </div>

                        )
                    }
                })}
                  
                </div>
         </div>
        )
    }
}
export default ColumnComponent