import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';

import Resumeleft from '../ResumeComponents/Resumeleft';
import ResumeRight from '../ResumeComponents/Resumeright';


class Resume extends Component {
    render() {
        return (
            <div>

            
            <Container fluid>
                   <Row>
                       <Col sm={4} className="resume-leftside">
                            <Resumeleft />
                       </Col>
                       <Col sm={8} className="resume-rightside">
                           <ResumeRight />
                        </Col>
                   </Row>
               
            </Container>
            </div>
        )
    }
}

export default Resume;
