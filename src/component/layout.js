import React from 'react';
import "./nav.css";
import Nav from "./nav";
import Contact1 from './contact1';

export default function Layout(props) {
  return <div>
      <Nav />
      <main className='main'>{props.children}</main>
      <Contact1 />
     

  </div>;
}
