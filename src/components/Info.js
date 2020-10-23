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
                <div className="infopage">
                    <nav id="navbar" class="fadeIn first">
                        <Link to="/"><img draggable="false" id="small-logo" src={smallLogo} alt="" /></Link>
                        <div id="links">
                            <Link to="/designs"><img draggable="false" src={dletter} alt="" id="dletter" /></Link>
                            <Link to="/designs"><p id="designslink">Designs</p></Link>
                            <Link to="/projects"><img draggable="false" src={pletter} alt="" id="pletter" /></Link>
                            <Link to="/projects"><p id="projectslink">Projects</p></Link>
                            <img src={iletter} alt="" draggable="false" id="iletter" />
                            <p id="infolink">Info</p>
                        </div>
                    </nav>
                    <div id="text" class="fadeIn second">
                        <p id="intro">Hi, my name is Akash Verma.</p>
                        <p id="exp">Starting from making simple programs I soon began to ameliorate my computer skills by creating different tools to help me in some way or another.
                        I enjoy being challenged and engaging
                            in new projects that go beyond my general skillset and require me to be out of my comfort zone, as continuing learning new languages and different problem-solving methods and techniques are important to me. </p>
                    </div>
                    <div id="social" class="fadeIn third">
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/akashverma13"><img draggable="false" src={github} alt="" id="github" /></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/akashverma2000/"><img draggable="false" src={linkedin} alt="" id="linkedin" /></a>
                    </div>
                </div>
            </Switch>
        </Router>
    )
}

export default Info
