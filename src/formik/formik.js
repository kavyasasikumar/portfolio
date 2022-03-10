import React from 'react';
import {useFormik} from "formik";
import Form from "./Form";
import "./formik.css";
import * as Yup from "yup";
import { useState } from 'react';

export default function Formik() {
    const[successfull,setSuccessfull]=useState("");
    const input=[{
        
        htmlFor:"userName",
        label:"User Name",
        type:"text",
        placeholder:"UserName",
        name:"userName",
        id:"userName"
    },
    {
        name:"email",
        id:"email",
        htmlFor:"email",
        label:"Email",
        type:"email",
        placeholder:"Email"
    },
    {
        name:"birthday",
        id:"birthday",
        htmlFor:"birthday",
        label:"Birthday",
        type:"date",
        placeholder:"DOB"
    },
    {
        name:"password",
        id:"password",
        htmlFor:"password",
        label:"Password",
        type:"password",
        placeholder:"Password"
    },
    {
        name:"confrimPassword",
        id:"confrimPassword",
        htmlFor:"confrimPassword",
        label:"Confrim Password",
        type:"password",
        placeholder:"Confrim Password"
    }];



const formik=useFormik({
        initialValues:{
            userName:"",
            email:"",
           birthday:"",
           password:"",
           confrimPassword:""
},
validationSchema:Yup.object({
userName:Yup.string()
.max(10,"must be 10 characters only")
.required("Required"),

email:Yup.string()
.email("Invalid email address")
.required("Required"),

password:Yup.string()
.required("Required")
.matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,'Need one special character'),
confrimPassword: Yup.string()
.oneOf([Yup.ref("password"),null],"password must be matched")
.required('Password confirm is required'),

}),

onSubmit:(values)=>{
    alert(JSON.stringify(values,null,2));
    setSuccessfull("submit successfull");
    

}
    })
  return (<>
  <p className='succ'>{successfull}</p>
  <form onSubmit={formik.handleSubmit}>
   
    {input.map((data,index)=>(  
    <Form key={index+1}
    id={data.id}
   
    
    label={data.label}
    type={data.type}
    placeholder={data.placeholder}
    {...formik.getFieldProps(data.name)}
    
    error={formik.errors[data.name]}
    touch={formik.touched[data.name]}/>))}
    <button type='submit'>submit</button>

  </form></>);
}
