import React from 'react'
import {Link } from "react-router-dom"
import "./home.css"
import Header from "./header.js";
import Navbar from "./Navbar"
function home({Token}) {
  console.log(Token,'App.js')
    return (
        <div>
           {/* <Navbar /> */}
          
          <div>
              < Header Token={Token} />
          </div>
        </div>
          
            
    )
}

export default home

/*
 <Link to="/covid_form">GO TO COVID PAGE</Link>
          <div>  <Link to="/signup">LoginPAGE</Link></div>
            <div><Link to="/login">ignup PAGE</Link>
          </div>
          
          
          */
