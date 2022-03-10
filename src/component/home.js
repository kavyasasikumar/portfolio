import React from 'react';
import "./home.css";
import {Link} from "react-router-dom"

export default function Home() {
  return <div className='logo_head'>
      
    <h1 className='logo-test'>logo</h1>
    <Link to="/about"><button>Read more</button></Link>
  </div>;
}
