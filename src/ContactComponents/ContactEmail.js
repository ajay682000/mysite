import React, {Component} from 'react';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';



class ContactEmail extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                    <Col sm={1}>
                    <i className="fa fa-envelope"  aria-hidden="true" />
                        </Col>
                        <Col sm={3}>
                        <p><b>{this.props.Email}</b></p>
                        </Col>
                        <Col sm={8} >
                        <p>
                            {this.props.email} <br></br> 
                            
                        </p>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default ContactEmail;