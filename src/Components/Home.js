import React, {Component} from 'react';
// import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import {Navbar, Nav} from 'react-bootstrap';


class Home extends Component {
    render() {
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">                              
                                <Nav>
                                <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                    <Nav.Link href="#deets">More deets</Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        Dank memes
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
            </div>
        )
    }
}

export default Home;