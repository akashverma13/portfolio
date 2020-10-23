import React from 'react'
import './Projects.css'
import smallLogo from './images/small-logo.svg'
import dletter from './images/dletter.svg'
import pletter from './images/pletter.svg'
import iletter from './images/iletter.svg'
import circle from './images/circle.svg'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.js';
import Designs from './Designs.js'
import Info from './Info.js'

function Projects() {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Home}></Route>
                <Route exact={true} path='/designs' component={Designs}></Route>
                <Route exact={true} path='/info' component={Info}></Route>
                <div className="projectspage">
                    <nav id="navbar" class="fadeIn first">
                        <Link to="/"><img id="small-logo" draggable="false" src={smallLogo} alt="" /></Link>
                        <div id="links">
                            <Link to="/designs"><img draggable="false" src={dletter} alt="" id="dletter" /></Link>
                            <Link to="/designs"><p id="designslink">Designs</p></Link>
                            <img src={pletter} draggable="false" alt="" id="pletter" />
                            <p id="projectslink">Projects</p>
                            <Link to="/info"><img draggable="false" src={iletter} alt="" id="iletter" /></Link>
                            <Link to="/info"><p id="infolink">Info</p></Link>
                        </div>
                    </nav>
                    <div id="spacer"></div>
                    <div id="projectstext">
                        <p id="projectlanguage" class="fadeIn second">Javascript</p>
                        <div class="fadeIn third">
                        <a id="projectlink" rel="noopener noreferrer" target="_blank" href="https://github.com/akashverma13/News-App"><p id="projectname">
                            News App
                        </p></a></div>
                        <p id="projectdescr" class="fadeIn third">
                            A search engine for
                            news using ReactJS
                            and an external
                            API made by me
                </p>
                <div class="fadeIn fourth">
                        <img src={circle} draggable="false" alt=""onClick={(e) => {
                            document.getElementById("projectname").innerHTML = "News App"
                            document.getElementById("projectdescr").innerHTML = "A search engine for news using ReactJS and an external API made by me"
                            document.getElementById(e.target.id).style = "opacity: 100%"
                            document.getElementById("circle2").style = "opacity: 50%"
                            document.getElementById("circle3").style = "opacity: 50%"
                            document.getElementById("circle4").style = "opacity: 50%"
                            document.getElementById("circle5").style = "opacity: 50%"
                            document.getElementById("projectlink").href = "https://github.com/akashverma13/News-App"
                            document.getElementById("projectlink").target = "_blank"

                        }} id="circle1" />
                        <img src={circle} draggable="false" alt="" onClick={(e) => {
                            document.getElementById("projectname").innerHTML = "User Login"
                            document.getElementById("projectdescr").innerHTML = "A simple login and register page made with MongoDB and NodeJS"
                            document.getElementById(e.target.id).style = "opacity: 100%"
                            document.getElementById("circle1").style = "opacity: 50%"
                            document.getElementById("circle3").style = "opacity: 50%"
                            document.getElementById("circle4").style = "opacity: 50%"
                            document.getElementById("circle5").style = "opacity: 50%"
                            document.getElementById("projectlink").href = "https://github.com/akashverma13/User-Login"
                            document.getElementById("projectlink").target = "_blank"
                        }} id="circle2" />
                        <img src={circle} draggable="false" alt="" onClick={(e) => {
                            document.getElementById("projectname").innerHTML = "GViva"
                            document.getElementById("projectdescr").innerHTML = "A student's portal made with ReactJS and NodeJS"
                            document.getElementById(e.target.id).style = "opacity: 100%"
                            document.getElementById("circle1").style = "opacity: 50%"
                            document.getElementById("circle2").style = "opacity: 50%"
                            document.getElementById("circle4").style = "opacity: 50%"
                            document.getElementById("circle5").style = "opacity: 50%"
                            document.getElementById("projectlink").href = ""
                            document.getElementById("projectlink").target = ""
                        }} id="circle3" />
                        <img src={circle} draggable="false" alt="" onClick={(e) => {
                            document.getElementById("projectlanguage").innerHTML = "Python"
                            document.getElementById("projectname").innerHTML = "speedPi"
                            document.getElementById("projectdescr").innerHTML = "A tool that lets you test your internet connection with just a push of a button";
                            document.getElementById(e.target.id).style = "opacity: 100%"
                            document.getElementById("circle1").style = "opacity: 50%"
                            document.getElementById("circle2").style = "opacity: 50%"
                            document.getElementById("circle3").style = "opacity: 50%"
                            document.getElementById("circle5").style = "opacity: 50%"
                            document.getElementById("projectlink").href = "https://github.com/akashverma13/speedPI"
                            document.getElementById("projectlink").target = "_blank"
                        }} id="circle4" />
                        <img src={circle} draggable="false" alt=""  onClick={(e) => {
                            document.getElementById("projectlanguage").innerHTML = "C#"
                            document.getElementById("projectname").innerHTML = "rgbPicker"
                            document.getElementById("projectdescr").innerHTML = "A simple rgb color picker written in C#";
                            document.getElementById(e.target.id).style = "opacity: 100%"
                            document.getElementById("circle1").style = "opacity: 50%"
                            document.getElementById("circle3").style = "opacity: 50%"
                            document.getElementById("circle4").style = "opacity: 50%"
                            document.getElementById("circle2").style = "opacity: 50%"
                            document.getElementById("projectlink").href = "https://github.com/akashverma13/rgbPicker"
                            document.getElementById("projectlink").target = "_blank"
                        }} id="circle5" />
                        </div>
                    </div>
                </div>
            </Switch>
        </Router>
    )
}

export default Projects
