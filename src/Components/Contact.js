import React , {Component} from 'react';
// import {Grid, Cell} from 'react-mdl';
import {ListGroup, Container, Row, Col} from 'react-bootstrap';
// import {List, ListItem} from 'react-mdl';


import Pic from '../Images/ak.jpeg';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Container  className="contact-grid">
                   <Row> 
                    <Col className="left-side">
                        <img src={Pic}
                        alt="Ajay Krishnan" 
                        className="avathar-img"
                        />         
                        <h2>Ajay Krishnan</h2>  
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Enna pathi naane perumaiya solla onnum illa. Enna pathi ethavathu therinja sollunga. Neenga solluratha vachu inga eluthuren. Matha padi perusa solra alavuku nan worth illa. I am a comedy piece uhh
                            
                        </p>             
                    </Col>
                    <Col className="right-side">
                        <h2 style={{justifyContent:"center", textAlign:"center"}}>Contact</h2>
                        <hr style={{justifyContent:"center", textAlign:"center"}}></hr>
                        <br></br>
                        <div className="contact-list">

                       
                        <ListGroup>
                            <ListGroup.Item variant="dark" style={{fontSize: '20px'}}>
                            <i className="fa fa-phone"  aria-hidden="true" />
                                Contact No: <br></br>
                                <div style={{paddingLeft: '12px'}}>
                                +918489154492 <br></br>+917010668291
                                
                                {/* +919876543210 <br></br>+919632587410 */}
                                
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item variant="dark" style={{fontSize: '20px'}}>
                            <i className="fa fa-envelope"  aria-hidden="true" />
                                Email : <br></br>
                                <div style={{paddingLeft: '12px'}}>
                                    ajaykrishnan682000.ak@gmail.com
                                    {/* ethoorucompany@anthacompany.com */}
                                </div>
                            </ListGroup.Item>
                            {/* <ListGroup.Item variant="dark">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item variant="dark">Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item variant="dark">Vestibulum at eros</ListGroup.Item> */}
                        </ListGroup>
                        </div>
                    </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default Contact;
