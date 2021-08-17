import React from 'react'
import "./Login.css"
function Login() {
    return (
        
         <div class="Login">
            <div class="title">
            <h2  class="titleText"><span>L</span>ogin</h2>
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
            <input type="submit" value="Login"></input>

            </div>
            
         </div>
        
    )
    }
 
export default Login
