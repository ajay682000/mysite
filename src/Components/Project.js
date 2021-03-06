import React , {Component} from 'react';


import Whatsappbot from '../ProjectComponents/Whatsappbot';
import HumanCar from '../ProjectComponents/HumanCar';
import FaceDetection from '../ProjectComponents/FaceDetection';
import SpeechRecognition from '../ProjectComponents/SpeechRecognition';
import FaceReco from '../ProjectComponents/FaceReco';
import FaceEmotion from '../ProjectComponents/FaceEmotion';
import FingerSign from '../ProjectComponents/FingerSign';
import KnowYourself from '../ProjectComponents/KnowYourself';
import CoronaVirus from '../ProjectComponents/CoronaVIrus';
import VirtualPen from '../ProjectComponents/VirtualPen';
import InvisibleCloth from '../ProjectComponents/InvisibleCloth';
import FaceReco_Transfer from '../ProjectComponents/FaceReco_Transfer';
import Drums_CV from '../ProjectComponents/Drums_CV';
import Con2 from '../Images/Con2.png';
import {Image, Accordion, Card, Container, Row, Col} from 'react-bootstrap'

class Project extends Component {
    render() {
        return (
            <div className="contact-body">
                <div className="project-grid">

                
                 
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                        <Accordion defaultActiveKey="0">
                            <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <center>Whatsapp bot using Python</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body> <Whatsappbot /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <center>Human and Car Detection</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body><HumanCar /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <center>Face Detection</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body><FaceDetection /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                    <center>Speech Recognition</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body><SpeechRecognition /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                    <center>Face Recognition LBPH method</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                    <Card.Body><FaceReco /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                    <center>Face Recognition Transfer Learning Method</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                    <Card.Body><FaceReco_Transfer /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                    <center>Face Emotion Detection</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                    <Card.Body><FaceEmotion /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="7">
                                    <center>Finger Sign Gesture Recognition</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="7">
                                    <Card.Body><FingerSign /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="8">
                                    <center>Know About Yourself App</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="8">
                                    <Card.Body><KnowYourself /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="9">
                                    <center>Corona Virus Recognition</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="9">
                                    <Card.Body><CoronaVirus /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="10">
                                    <center>Virtual Pen</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="10">
                                    <Card.Body><VirtualPen /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="11">
                                    <center>InvisibleCloth</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="11">
                                    <Card.Body><InvisibleCloth /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                <div>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="12">
                                    <center>Virtual Drum</center>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="12">
                                    <Card.Body><Drums_CV /></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </div>
                                </Accordion>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}

export default Project;
