import React, {Component} from 'react';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';



class Contactno extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                    <Col sm={1}>
                    <i className="fa fa-phone"  aria-hidden="true" />
                        </Col>
                        <Col sm={3}>
                        <p><b>{this.props.Contact}</b></p>
                        </Col>
                        <Col sm={8} >
                        <p>
                            {this.props.no1} <br></br> 
                            {this.props.no2}
                        </p>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Contactno;