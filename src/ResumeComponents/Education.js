import React, {Component} from 'react';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';



class Education extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={4} className="resumeright-leftside">
                        <p>{this.props.startYear} - {this.props.endYear} </p>
                        </Col>
                        <Col sm={8} className="resumeright-rightside">
                        <h4 style={{marginTop: '8px'}}>{this.props.schoolName}</h4>
                        <p>{this.props.schoolDesc} </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Education;