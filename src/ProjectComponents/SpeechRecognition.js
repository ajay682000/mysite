import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class SpeechRecognition extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Computer Vision</Card.Header> */}
                <Card.Body>
                    <Card.Title>Detecting Human Face in Python</Card.Title>
                    <Card.Text>
                    <b>speech_recognition</b> library is used for recognizing speech. <br></br><b>Text to speech and spech to text</b>
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/SpeechRecognition" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>
                        
                    </div>
                    
                    
                    
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SpeechRecognition;