import React, {Component} from 'react';

import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import { Code, Label, Switch } from "@blueprintjs/core";
// import { CheckboxExample } from "./checkboxExample";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class PgHeader extends Component {
    constructor(){
        super()
        if(localStorage.getItem("DarkMode") === null){
            localStorage.setItem("DarkMode", "no");
        }
        this.state = {
            darkMode:localStorage.getItem("DarkMode") === 'yes',
          
        };
        this.switchTriggered = this.switchTriggered.bind(this)
        
    }
    switchTriggered(){
        // evt.preventDefault();
        localStorage.setItem("DarkMode", (!this.state.darkMode)?"yes":"no");
            this.setState({darkMode:!this.state.darkMode});
        // var element = document.body;
        // element.classList.toggle("dark-mode")
        }
    render() {
        document.body.className = ((this.state.darkMode)?"dark-mode":"body");
        console.log("Darkmode:", ((this.state.darkMode)?"dark-mode":"body"), "state is", this.state.darkMode, "from LS", localStorage.getItem("DarkMode"));
        return (
            <div >
                {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
                <Navbar className="header-color" collapseOnSelect expand="lg" bg="dark" variant="dark" >  
                    {/* <Navbar.Brand>
                    <Link to="/" style={{color:'#ffffff',paddingRight:'30px'}}>Ajay Krishnan P</Link>
                    </Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav"> 
                                <Nav className="mr-auto" />                             
                                    <Nav>
                                        <Nav.Link>
                                            <Link to="/" className="pgheader1" >Home</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/about" className="pgheader1">My Blog</Link> 
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/contact" className="pgheader1" >Contact</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/projects" className="pgheader1">Projects</Link>
                                                     </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/resume" className="pgheaderlast" >Resume</Link>
                                        </Nav.Link>
                                        
                                        <Switch style ={{color: 'white'}} checked={this.state.darkMode} innerLabelChecked="Dark Mode on" innerLabel="Dark Mode off" onChange={this.switchTriggered}/>
                                                                                
                                    {/* <Link to="/" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>Home</Link>
                                    <Link to="/about" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>About</Link> 
                                    <Link to="/contact" style={{color:'#ffffff', paddingRight:'30px', fontWeight:'bold'}}>Contact</Link>
                                    <Link to="/projects" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>Projects</Link>
                                    <Link to="/resume" style={{color:'#ffffff',paddingRight:'750px', fontWeight:'bold'}}>Resume</Link> */}
                                    
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
            </div>
        )
    }
}

export default PgHeader;