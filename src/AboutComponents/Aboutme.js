import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
// import Aboutmeleft from './Aboutme/Aboutmeleft';
// import Aboutmeright from './Aboutme/Aboutmeright';
import Aboutnew from './Aboutme/Aboutnew';

class Aboutme extends Component {
    render() {
        return(
            <div>
               <Container fluid>
                   <Row>
                       {/* <Col xs={7}>
                        <Aboutmeleft />
                       </Col>
                       <Col xs={5}>
                        <Aboutmeright />
                       </Col> */}
                       <Col>
                        <Aboutnew />
                       </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}



export default Aboutme;