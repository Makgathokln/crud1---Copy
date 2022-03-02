import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
//import About from "./components/About";
//import Profile from "./components/Profile";
import UserDetails from './components/UserDetails';
import NavBar from "./components/NavBar";
import Userform from "./components/Userform"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateDetails from "./components/UpdateDetails";
//import ApiData from './components/apiData';
//import Article from './components/article';


function App() {
  return (



      <Router>
    <div className="App" style={{backgroundImage:"url(/back.jpg)",
        backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%"}}>

        <NavBar/>


        <Switch>

            <Route exact path={'/UserDetails'}  render={(props) => <UserDetails{...props}/>}  />
            <Route exact path={'/AddUser'}  render={(props) => <Userform{...props}/>}  />
            <Route exact path={'/UpdateDetails'}  render={(props) => <UpdateDetails{...props}/>}  />
        </Switch>

    </div>
      </Router>
  );
}

export default App;