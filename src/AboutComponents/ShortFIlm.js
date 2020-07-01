import React,{Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Col2 from './ShortFilm/Col2';
import Col3 from './ShortFilm/Col3';



class ShortFilm extends Component {
    render() {
        return (
            <div style={{padding: '20px'}}>
                <Container>
                    <Row>
                        <Col>
                            <h5>Trendy Planet Production</h5>
                        </Col>
                    </Row>
                    <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                    <Row>
                        <Col>
                        <h5> First Short Film</h5>
                        <Col2 />
                        </Col>
                    </Row>
                    <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                    <Row>
                        <Col>
                        <h5>Second Short film</h5>
                        <Col3 />
                        </Col>
                    </Row>
                    <hr style={{borderTop: '3px solid #833fb2'}}></hr>
                </Container>
            </div>
        )
    }
}

export default ShortFilm;