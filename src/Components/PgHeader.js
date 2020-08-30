import React, {Component} from 'react';

import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class PgHeader extends Component {
    render() {
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
                                            <Link to="/" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>Home</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/about" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>My Blog</Link> 
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/contact" style={{color:'#ffffff', paddingRight:'30px', fontWeight:'bold'}}>Contact</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/projects" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>Projects</Link>
                                                     </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/resume" style={{color:'#ffffff',paddingRight:'750px', fontWeight:'bold'}}>Resume</Link>
                                        </Nav.Link>
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