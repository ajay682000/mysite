import React, {Component} from 'react';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';



class Internships extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Col sm={4} className="resumeright-leftside">
                        
                        <p>
                            {this.props.internYear} <br></br>
                            {this.props.startMonth} - {this.props.endMonth}
                        </p>
                        </Col>
                        <Col sm={8} className="resumeright-rightside">
                        
                        <h4 style={{marginTop: '8px'}}>{this.props.provider}</h4>
                        
                        <p>{this.props.internshipdesc} </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Internships;