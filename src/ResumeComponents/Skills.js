import React, {Component} from 'react';
import {Row, Col, Container, ListGroup, ProgressBar} from 'react-bootstrap';



class Skills extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={3}>
                           {/* <div style={{display: 'flex'}}> */}
                               <p>{this.props.skill} </p>
                              
                           {/* </div> */}
                           </Col>
                           <Col sm={9}>
                           
                           <ProgressBar style={{margin: 'auto', width:'75%'}} animated now={this.props.progress}
                               label={`${this.props.progress}`}/> 
                       
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Skills;