
import './App.css';
import Home from "./pages/home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Covid_form from './pages/covid-form/Covid_form.js';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import Admin from './pages/adminPannel/Admin';
import UserAccount from './pages/user_account/UserAccount';

function App() {
  return (
    <div >
       <Router>
           <Switch>
               <Route exact path="/"  >
                 <Home />
              
              </Route>
               <Route exact path="/covid_form" >
                <Covid_form />        
              </Route>

              <Route exact path="/signup" >
                <Signup  />
              </Route>
              
              <Route exact path="/login" >
                <Login />
              </Route>
              <Route exact path="/admin" >
                <Admin />
              </Route>
              <Route exact path="/userAccount" >
                <UserAccount />
              </Route>

              
           </Switch>
       </Router>
        
      
    </div>
  );
}

export default App;
