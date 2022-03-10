import React from "react";
import "./styles.css"
export default class Card extends React.Component{
    render(){
        const msg=()=>{
        alert(this.props.product+" is deleted");
        }
        return (
               <section className="container">
                    <p>to buy {this.props.product}</p>
                    <button onClick={msg}>delete</button>
                </section>
            );
    }
}