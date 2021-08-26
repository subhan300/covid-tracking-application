import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import "./home.css"
import {useHistory} from "react-router-dom"


// onClick={()=>{setCurrentToken(localStorage.removeItem("token"))}}
function Navbar({Token}) {
    const history=useHistory()
    // console.log(Token,"navbar")
    // Token?console.log("yes"):console.log("no")
    const RemoveToken=()=>{
        localStorage.removeItem("token")
      
        alert("signout successfully")
        history.push("/")
      
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand px-3" href="#" style={{color:'orangered'}}>Creative Chaos</a>
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar" id="navbarNavDropdown">
      <ul class="navbar-nav  navbar_ul" >
        <li class="nav-item">
          <Link class="nav-link active" style={{color:"white"}} a to="/">Home</Link>
        </li>
        <li class="nav-item">
             <Link class="nav-link" style={{color:"white"}} to="/userAccount" >Check Result</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link"  style={{color:"white"}} onClick={()=>RemoveToken()}>Sign Out</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
