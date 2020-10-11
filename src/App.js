import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Designs from './components/Designs.js'
import Projects from './components/Projects.js'
import Info from './components/Info.js'

function App() {
  return (
    <Router>
    <div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/designs' component={Designs}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/info' component={Info}></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
