import React,{Component} from 'react';
import {Row, Col, Container, ListGroup, ProgressBar} from 'react-bootstrap';



class PersonalDetails extends Component{
    render() {
        return(
            <div>
               <Container>
                    <Row>
                        <Col sm={3}>
                          
                               <p style={{fontWeight: 'bold'}}>{this.props.Details}: </p>
                              
                           
                           </Col>
                           <Col sm={9}>
                           
                           <p>{this.props.detailans} </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PersonalDetails;




