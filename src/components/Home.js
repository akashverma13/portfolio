import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Home.css'
import biglogo from './images/biglogo.svg'
import button from './images/button.svg'
import Designs from './Designs.js'
import Projects from './Projects.js'
import Info from './Info.js'

function Home() {
    return (
        <Router>
            <Switch>
                <Route exact path='/designs' component={Designs}></Route>
                <Route path='/projects' exact component={Projects}></Route>
                <Route path='/info' exact component={Info}></Route>
                <div className="homepage">
                    <img id="biglogo" src={biglogo} alt="" />
                    <span id="hometext">
                        Welcome to my portfolio.<br />
                    I'm a 20-year-old student currently studying<br />
                    in Austria for his bachelor's degree in Creative Computing.
                </span>
                    <Link to="/designs"><img id="homebutton" src={button} alt="" /></Link>
                </div>
            </Switch>
        </Router>
    )
}

export default Home