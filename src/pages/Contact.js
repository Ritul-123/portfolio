
import React from "react";
import "./form.css";
import {useState} from 'react';
const  Contact = () =>{
  const[data,SetData] = useState({name:"",email:"",phone:"",message:""});
  const handleChange = (e)=>{
     const name = e.target.name;
     const value = e.target.value;
     SetData({...data , [name]:value});
  };
  const handleSubmit=(e)=>{
   e.preventDefault();
   SetData({
    name:'',
    email:'',
    phone:'',
    message:'',
   });
   const senderName = data.name;


alert(`Form submitted by ${senderName}`);

  };
  return (
  <form method='post' onSubmit={handleSubmit}>
    <h1>Contact <span>Here</span></h1>
    <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter name"/>
    <input type="email" name="email" id=""onChange={handleChange} value={data.email}  placeholder="abc@email.com"/>
    <input type="phone" name="phone" id=""onChange={handleChange} value={data.phone}  placeholder="+91"/>
    <textarea name="message"  id="" rows="10" cols="30"onChange={handleChange} value={data.message}  placeholder="Message here"></textarea>
    <button type="submit">send</button>
    {/* <p>{data.name},{data.email},{data.phone},{data.message}</p> */}
  </form>
  )
  }
export default Contact 