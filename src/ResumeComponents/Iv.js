import React, {Component} from 'react';
import {Row, Col, Container, ListGroup, ProgressBar} from 'react-bootstrap';



class IV extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={4}>
                          
                               <p>{this.props.date} - {this.props.month} - {this.props.year} </p>
                              
                           
                           </Col>
                           <Col sm={8}>
                                <h5>{this.props.companyname} </h5>
                       
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default IV;