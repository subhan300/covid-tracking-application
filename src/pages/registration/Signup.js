import React from 'react'
import "./Signup.css"
function Signup() {
    return (
        <div class="SignUp">
           <div class="title">
           <h2  class="titleText"><span>S</span>ign Up</h2>
           </div>
           <div class="inputBox">
           <h4>Username</h4>
           <input type="text"  placeholder="Name"></input>
           </div>
           <div class="inputBox">
           <h4>Password</h4>
           <input type="password"  placeholder="Password"></input>
           </div>
           <div class="inputBox">
           <input type="submit" value="Sign Up"></input>

           </div>
           
        </div>
    )
}

export default Signup

