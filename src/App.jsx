import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contacts'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="/Contacts" component={Contact}/>
        </Switch>
    </div>
  );
}

export default App;
