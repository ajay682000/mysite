import React, {Component, useState} from 'react';


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
import {Image, Accordion, Container, Row, Col, Button} from 'react-bootstrap'
import {  Card, Elevation } from "@blueprintjs/core";




class Projectnewdesign extends Component {
    render() {
        return (
            <div className="contact-body">
                    <div className="project-grid">                    
                        <Container fluid className="maincontainer">
                            <Row>           
                                <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Whatsapp bot</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <Whatsappbot />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col>
                                        <br></br>
                                        <Col>
                                        <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Human and Car Detection</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <HumanCar />                                                
                                                </div>
                                            </Card>
                                        </div>
                                        </Col>
                                    <br></br>
                                    <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Face Detection</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <FaceDetection />                                                
                                                </div>
                                            </Card>
                                        </div>
                                        </Col>
                                    <br></br> 
                            </Row>
                            <br></br>
                            <Row> 
                                <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Speech Recognition</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <SpeechRecognition />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col>
                                        <br></br> 
                                        <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Face Recognition LBPH method</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <FaceReco />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col> 
                                        <br></br>
                                        <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Face Recognition Transfer Learning Method</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <FaceReco_Transfer />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col> 
                                        <br></br>                              
                            </Row>
                            <br></br>
                            <Row>
                            <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Face Emotion Detection</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <FaceEmotion />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col>
                                        <br></br> 
                                        <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Finger Sign Gesture Recognition</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <FingerSign />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col> 
                                        <br></br>
                                        <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Know About Yourself App</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <KnowYourself />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col> 
                                        <br></br>
                            </Row>
                            <br></br>
                            <Row>
                            <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Corona Virus Recognition</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <CoronaVirus />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col>
                                        <br></br> 
                                        <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Virtual Pen</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <VirtualPen />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col> 
                                        <br></br>
                                        <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>InvisibleCloth</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <InvisibleCloth />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col> 
                                        <br></br>
                            </Row>
                            <br></br>
                            <Row>                                
                                <Col>
                                    <div className="thecard bp3-card .bp3-interactive">
                                            <Card interactive={true} elevation={Elevation.TWO}>
                                                <div className="frontside">                                        
                                                    <center><h3>Virtual Drum</h3>
                                                    </center>                                        
                                                </div>
                                                <div className="backside">                                     
                                                    <Drums_CV />                                                                                                 
                                                </div>
                                            </Card>
                                        </div> 
                                        </Col>
                                        <br></br>
                                <Col>
                                
                                </Col>
                                <br></br>
                                <Col>
                                
                                </Col>
                                <br></br>
                            </Row>
                            <br></br>
                        </Container>
                     </div>
                </div>
          
        )

    }

    
}

export default Projectnewdesign;





