import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
// import About from './About';
import Contact from './Contact';
import About from './AboutRedesign';

import Resume from './resume';
import Project from './Project';
import Project1 from './Projectnewdesign';


const Main = () => { 
    return(
        <Switch>
            <Route exact path = "/" component = {LandingPage} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/projects" component = {Project1} />
            <Route path = "/resume" component = {Resume} />
        </Switch>
    )
    
}


export default Main;