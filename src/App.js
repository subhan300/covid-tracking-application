
import './App.css';
import Home from "./pages/home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Covid_form from './pages/covid-form/Covid_form.js';
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

              
           </Switch>
       </Router>
        
      
    </div>
  );
}

export default App;
