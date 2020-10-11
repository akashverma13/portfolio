import React from 'react'
import './Info.css'
import smallLogo from './images/small-logo.svg'
import dletter from './images/dletter.svg'
import pletter from './images/pletter.svg'
import iletter from './images/iletter.svg'
import github from './images/github.svg'
import linkedin from './images/linkedin.svg'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.js';
import Designs from './Designs.js'
import Projects from './Projects.js'

function Info() {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Home}></Route>
                <Route exact={true} path='/designs' component={Designs}></Route>
                <Route exact={true} path='/projects' component={Projects}></Route>
                <Route path='/github' component={() => {
                    window.location.replace('https://github.com/akashverma13');
                    return null;
                }} />
                <Route path='/linkedin' component={() => {
                    window.location.replace('https://www.linkedin.com/in/akashverma2000/');
                    return null;
                }} />
                <div className="infopage">
                    <nav id="navbar">
                        <Link to="/"><img id="small-logo" src={smallLogo} alt="" /></Link>
                        <div id="links">
                            <Link to="/designs"><img src={dletter} alt="" id="dletter" /></Link>
                            <Link to="/designs"><p id="designslink">Designs</p></Link>
                            <Link to="/projects"><img src={pletter} alt="" id="pletter" /></Link>
                            <Link to="/projects"><p id="projectslink">Projects</p></Link>
                            <img src={iletter} alt="" id="iletter" />
                            <p id="infolink">Info</p>
                        </div>
                    </nav>
                    <div id="text">
                        <p id="intro">Hi, my name is Akash Verma.</p>
                        <p id="exp">Starting from making simple programs I soon began to ameliorate my computer skills by creating different tools to help me in some way or another.
                        I enjoy being challenged and engaging
                            in new projects that go beyond my general skillset and require me to be out of my comfort zone, as continuing learning new languages and different problem-solving methods and techniques are important to me. </p>
                    </div>
                    <div id="social">
                    <Link to="/github"><img src={github} alt="" id="github" /></Link>
                    <Link to="/linkedin"><img src={linkedin} alt="" id="linkedin" /></Link>
                    </div>
                </div>
            </Switch>
        </Router>
    )
}

export default Info
