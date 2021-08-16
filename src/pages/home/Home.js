import React from 'react'
import {Link } from "react-router-dom"
import "./Home.css"
function Home() {
    return (
        <div>
            <h1>COVID TRACKING CELL</h1>
            <Link to="/covid_form">GO TO COVID PAGE</Link>
          <div>  <Link to="/signup">LoginPAGE</Link></div>
            <div><Link to="/login">ignup PAGE</Link>
          </div>
            
        </div>
    )
}

export default Home

