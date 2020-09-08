import React , {Component} from 'react';
// import {Grid, Cell} from 'react-mdl';
import {ListGroup, Container, Row, Col} from 'react-bootstrap';
// import {List, ListItem} from 'react-mdl';

import Contactno from '../ContactComponents/Contactno';
import ContactEmail from '../ContactComponents/ContactEmail';
import Pic from '../Images/ak.jpeg';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                        <Container  className="contact-grid">
                   <Row className= "justify-content-md-center"> 
                    <Col sm={6} className="left-side">
                        <img src={Pic}
                        alt="Ajay Krishnan" 
                        className="avathar-img"
                        />         
                        <h2>Ajay Krishnan</h2>  
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            {/* Enna pathi naane perumaiya solla onnum illa. Enna pathi ethavathu therinja sollunga. Neenga solluratha vachu inga eluthuren. Matha padi perusa solra alavuku nan worth illa. I am a comedy piece uhh */}
                            An aspiring Enginnering Student who eager to learn many things.
                            
                        </p>             
                    </Col>
                
                    <Col sm={6} className="right-side">
                        <h2 style={{justifyContent:"center", textAlign:"center"}}>Contact</h2>
                        <hr style={{justifyContent:"center", textAlign:"center"}}></hr>
                        <br></br>
                        <div className="contact-list">

                       
                        <ListGroup>
                            <ListGroup.Item variant='dark' style={{fontSize: '20px', color: '#000000'}}>
                           
                                
                                <Contactno 
                                    Contact="Contact No:"
                                    no1="+918489154492"
                                    no2="+917010668291"
                                />
                                
                                
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" style={{fontSize: '20px', color: '#000000'}}>
                            
                            <ContactEmail 
                                    Email="Email:"
                                    email="ajaykrishnan682000.ak @gmail.com"
                                    
                                />
                            </ListGroup.Item>
                            {/* <ListGroup.Item variant="dark">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item variant="dark">Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item variant="dark">Vestibulum at eros</ListGroup.Item> */}
                        </ListGroup>
                        </div>
                    </Col>
                    </Row>
                </Container>
                        </Col>
                    </Row>
                </Container>
                
                
            </div>
        )
    }
}

export default Contact;
