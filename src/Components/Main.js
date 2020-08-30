import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
// import About from './About';
import Contact from './Contact';
import About from './AboutRedesign';

import Resume from './resume';
// import Project from './Project';
import Project from './Projectnewdesign';


const Main = () => { 
    return(
        <Switch>
            {/* Home Page */}
            <Route exact path = "/" component = {LandingPage} /> 
            {/* Blog Page */}
            <Route path = "/about" component = {About} />
            {/* Contact Page */}
            <Route path = "/contact" component = {Contact} />
            {/* Project Page */}
            <Route path = "/projects" component = {Project} />
            {/* Resume Page */}
            <Route path = "/resume" component = {Resume} />
        </Switch>
    )
    
}


export default Main;