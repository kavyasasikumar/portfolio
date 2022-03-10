import React from "react";

 class Car extends React.Component{
    render(){
        return <h1>{this.props.date1}</h1>
    }
}
export default class Value extends React.Component{
    render(){
        const date="12.11.21";
        return <Car date1={date} />
    }
}
Car.defaultProps={date:"21.11.2021"};