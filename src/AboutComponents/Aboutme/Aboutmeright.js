import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pic from '../../Images/ajay.jpeg';


class Aboutmeright extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                        <img src={Pic}
                                alt="Ajay Krishnan" 
                                width='100%'
                                height="100%"
                                
                                /> 
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default Aboutmeright;