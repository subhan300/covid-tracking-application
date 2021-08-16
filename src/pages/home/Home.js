import React from 'react'
import {Link } from "react-router-dom"
import "./Home.css"
function Home() {
    return (
        <div>
            <h1>COVID TRACKING CELL</h1>
            <Link to="/covid_form">GO TO COVID PAGE</Link>
            
        </div>
    )
}

export default Home

