import React from 'react';
import "./nav.css";
import {Link} from "react-router-dom";

export default function Nav() {
  return <div className='nav'>
    <h1 className='logo'>logo</h1>
    <ul className='test'>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
    </ul>
  
  </div>;
}



