import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Designs.css'
import smallLogo from './images/small-logo.svg'
import dletter from './images/dletter.svg'
import pletter from './images/pletter.svg'
import iletter from './images/iletter.svg'
import leftarrow from './images/arrow-left.svg'
import Home from './Home.js';
import Projects from './Projects.js'
import Info from './Info.js'
import firstimage from './images/skltn.svg'

var images = [];

function importAll(r) {
    let images = [];
    // eslint-disable-next-line
    r.keys().map((item, index) => { images[index] = r(item); })
    return images;
}

function nextImage(e) {
    let index = Number(document.getElementById("image").className);
    if (index === images.length - 1) {
        document.getElementById("image").src = images[0];
        document.getElementById("image").className = 0;
    }
    else {
        document.getElementById("image").src = images[index + 1];
        document.getElementById("image").className = (index + 1);
    }
}

function previousImage(e) {
    let index = Number(document.getElementById("image").className);
    if (index === 0) {
        document.getElementById("image").src = images[images.length - 1];
        document.getElementById("image").className = images.length - 1;
    }
    else {
        document.getElementById("image").src = images[index - 1];
        document.getElementById("image").className = (index - 1);
    }
}

function Designs() {
    useEffect(() => {
        images = importAll(require.context('../../public/images/', false, /\.(png|jpe?g|svg)$/));
    });

    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Home}></Route>
                <Route exact={true} path='/projects' component={Projects}></Route>
                <Route exact={true} path='/info' component={Info}></Route>
                <div className="designpage">
                    <nav id="navbar">
                        <Link to="/"><img id="small-logo" src={smallLogo} alt="" /></Link>
                        <div id="links">
                            <img src={dletter} alt="" id="dletter" />
                            <p id="designslink">Designs</p>
                            <Link to="/projects"><img src={pletter} alt="" id="pletter" /></Link>
                            <Link to="/projects"><p id="projectslink">Projects</p></Link>
                            <Link to="/info"><img src={iletter} alt="" id="iletter" /></Link>
                            <Link to="/info"><p id="infolink">Info</p></Link>
                        </div>
                    </nav>
                    <div id="slideshow">
                        <img src={leftarrow} alt="" onClick={(e) => nextImage(e)} id="arrow-right" />
                        <img src={leftarrow} alt="" onClick={(e) => previousImage(e)} id="arrow-left" />

                        <img src={firstimage} className="1" id="image" alt="" />

                        <div id="spacer"></div>
                        <span id="designstext">These logos/designs were mostly made
                                            with either Figma or Adobe Illustrator.</span>
                    </div>
                </div>
            </Switch>
        </Router>
    )
}

export default Designs
