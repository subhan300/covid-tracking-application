
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
                <Signup />
              </Route>
              <Route exact path="/login" >
                <Login />
              </Route>

              
           </Switch>
       </Router>
        
      
    </div>
  );
}

export default App;
