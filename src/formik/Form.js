import React from 'react';
import "./form.css"
const Form=(props) =>{
const{common,label,type,id,placeholder,error,touch,...formik}=props;


  return (<div className="form">
  <label htmlFor={common}>{label}</label>
  <input id={id} type={type} placeholder={placeholder} 
 {...formik}
  
  />
  {touch&&error?<p className='error'>* {error} *</p>:null}</div>);
}

export default Form;