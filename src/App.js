import React ,{useState} from "react"
import './App.css';
import Home from "./pages/home/home.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";
import Covid_form from './pages/covid-form/Covid_form.js';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';

import UserAccount from './pages/user_account/UserAccount';

function App() {
let currentToken=useState("subhan tokrn")
// console.log(currentToken[1))
  return (
    <div >
       <Router>
           <Switch>
               <Route exact path="/"  >
                 <Home Token={currentToken[0]} />
              
              </Route>
               <Route exact path="/covid_form" >
                <Covid_form />        
              </Route>

              <Route exact path="/signup" >
                <Signup   />
              </Route>
              
              <Route exact path="/login" >
                <Login  Token={currentToken} />
              </Route>
             
              <Route exact path="/userAccount" >
                <UserAccount Token={currentToken[0]} />
              </Route>

              
           </Switch>
       </Router>
        
      
    </div>
  );
}

export default App;
