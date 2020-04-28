import React , {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

import {Row, Col, Container, ListGroup} from 'react-bootstrap';

import Pic from '../Images/ak.jpeg';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
               
               <Container fluid className="landing-grid">
                   <Row>
                   <Col sm = {12}> 
                    <img src={Pic}
                    alt="Ajay Krishnan" 
                    className="avathar-img"
                    />

                    <div className="banner-text">
                        <h2> <center>Ajay Krishnan P</center></h2>
                        {/* <h3><center>Computer Science Engineer</center></h3> */}
                        
                    <hr />
                    
                    {/* <p><center>Python | React | React Native</center></p> */}
                    {/* <p><center>II year student</center></p> */}
                    <p><center>Computer Science Engineer</center></p>
                    <center>
                    <div className="social-links">
                        
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/ajay-krishnan-7a8633b1/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin"  aria-hidden="true" />
                        </a>
                        {/* Github */}
                        <a href="https://github.com/ajay682000" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github"  aria-hidden="true" />
                        </a>
                        {/* GitLab */}
                        <a href="https://gitlab.com/ajay_682000" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-gitlab"  aria-hidden="true" />
                        </a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/ajay.pasupathiramanathan" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook"  aria-hidden="true" />
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/ajay_682000/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram"  aria-hidden="true" />
                        </a>
                        {/* Whatsapp */}
                        <a href="https://api.whatsapp.com/send?phone=+918489154492" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-whatsapp"  aria-hidden="true" />
                        </a>
                        {/* Twitter */}
                        <a href="https://twitter.com/ajay_682000" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter"  aria-hidden="true" />
                        </a>
                        
                        
                    </div>
                    </center>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="banner-text1">
                        <p><center>
                            I don't want to become next Einstein or BillGates.<br></br>
                            I just want to become first Ajay Krishnan<br></br>
                             
                            
                        </center></p>
                    </div>
                   </Col>


                   </Row>
                   
               </Container>
            </div>
        )
    }
}

export default LandingPage;
