import React ,{Component} from 'react'
import {Row, Col, Container} from 'react-bootstrap';



class Pdabout extends Component {
    render() {
        return(
            <Container>
                    <Row>
                        <Col sm={5}>
                          
                               <p style={{fontWeight: 'bold'}}>{this.props.Details}: </p>
                              
                           
                           </Col>
                           <Col sm={7}>
                           
                           <p>{this.props.detailans} </p>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default Pdabout;