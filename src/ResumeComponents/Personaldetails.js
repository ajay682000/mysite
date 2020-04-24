import React,{Component} from 'react';
import {Row, Col, Container, ListGroup, ProgressBar} from 'react-bootstrap';



class PersonalDetails extends Component{
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}>                   
                        <p style={{fontWeight: 'bold'}}>Father Name:</p>
                        <p style={{fontWeight: 'bold'}}>Mother Name:</p>
                        <p style={{fontWeight: 'bold'}}>Date of Birth:</p>
                        <p style={{fontWeight: 'bold'}}>Gender:</p>
                        <p style={{fontWeight: 'bold'}}>Nationality:</p>
                        <p style={{fontWeight: 'bold'}}>Marital Status:</p>
                        <p style={{fontWeight: 'bold'}}>Hobby:</p>
                         </Col>
                           <Col sm={9}>
                            <p>Pasupathi Ramanathan R</p>
                            <p>Punithavalli P</p>
                            <p>06-08-2000</p>
                            <p>Male</p>
                            <p>Indian</p>
                            <p>Unmarried</p>
                            <p>Self-Learning</p>
                            </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PersonalDetails;