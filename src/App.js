import './App.css';
import Navbar from "./components/navbar"
import Footer from './components/footer';
import Home from "./components/home";
import About from "./components/about";
import Services from './components/services';
import Shop from './components/shop';
import Login from './components/login';
import Signin from './components/signin';
import Logout from './components/logout';
import AddShop from './components/AddShop';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <div className="App">
  <Router>

   <Navbar/>
        <Switch>
     
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
            <Route path="/logout">
            <Logout />
          </Route> 
          <Route path="/addshop">
            <AddShop />
          </Route>
          <Route path="/">
            <Home />
          </Route> 
        </Switch>
    
    </Router>
  <Footer/>
    </div>
  );
}

export default App;
