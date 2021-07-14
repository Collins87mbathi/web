import React from 'react'
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Rooms from './components/pages/Rooms';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <div className="container">
   <Router>
     <Navbar/>
     <Switch>
       <Route exact path='/'><Home/></Route>
       <Route  path='/Services'><Services/></Route>
       <Route  path='/Rooms'><Rooms/></Route>
       <Route  path='/Contact'><Contact/></Route>
     </Switch>
   </Router>
   </div>
  )
}

export default App

