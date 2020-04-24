import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      
     <div>

      
      <div>
                {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
                <Navbar className="header-color" collapseOnSelect expand="lg" bg="dark" variant="dark">  
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
                                            <Link to="/about" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>About</Link> 
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
            {/* <div style={{height: '300px', position: 'relative'}}> */}
          <div>
          <Layout fixedHeader>
              {/* <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Drawer> */}
              <Content>
                <div className="page-content"></div>
                <Main />
              </Content>
          </Layout>
      </div>
      </div>
    );
  }
  
}

export default App;
