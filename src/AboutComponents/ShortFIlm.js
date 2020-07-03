import React,{Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import TrendyPlanet from './ShortFilm/TrendyPlanet';
import AatkalThevai from './ShortFilm/AatkalThevai';
import Stolen from './ShortFilm/Stolen';



class ShortFilm extends Component {
    render() {
        return (
            <div style={{padding: '20px'}}>
                <Container fluid>
                    <Row>
                        <Col>
                            <TrendyPlanet />
                        </Col>
                    </Row>
                    <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                    <Row>
                        <Col>
                        
                        <AatkalThevai />
                        </Col>
                    </Row>
                    <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                    <Row>
                        <Col>
                        
                        <Stolen />
                        </Col>
                    </Row>
                    <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                    <Row>
                        <Col>
                            <center><b>(OTHER SHORT FILMS COMING SOON....)</b></center>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                </Container>
            </div>
        )
    }
}

export default ShortFilm;