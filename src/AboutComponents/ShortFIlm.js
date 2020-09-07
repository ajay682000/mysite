import React,{Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TrendyPlanet from './ShortFilm/TrendyPlanet';
import AatkalThevai from './ShortFilm/AatkalThevai';
import Stolen from './ShortFilm/Stolen';



class ShortFilm extends Component {
    render() {
        return (
            <div className="shortfilm" style={{padding: '20px'}}>
                <Container fluid>
                    <Row>
                        <Col>
                            <TrendyPlanet />
                        </Col>
                    </Row>
                    <hr className="hr" ></hr>
                    <Row>
                        <Col>
                        
                        <AatkalThevai />
                        </Col>
                    </Row>
                    <hr className="hr" ></hr>
                    <Row>
                        <Col>
                        
                        <Stolen />
                        </Col>
                    </Row>
                    <hr className="hr"></hr>
                    <Row>
                        <Col>
                            <center><b className="shortfilm-b">(OTHER SHORT FILMS COMING SOON....)</b></center>
                        </Col>
                    </Row>
                    <hr className="hr"></hr>
                </Container>
            </div>
        )
    }
}

export default ShortFilm;