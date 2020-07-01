import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class FaceEmotion extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Face Recognition</Card.Header> */}
                <Card.Body>
                    <Card.Title>Face Emotion Detection in Python</Card.Title>
                    <Card.Text>
                        In this the Face Emotions like <b>Angry, Happy, Neutral, Sad and Surprise</b> are detected.
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/FaceEmotion" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>

                        <a href="https://drive.google.com/drive/folders/1tN8VCmUrXbF5jM8ICcyW_BYFoqkjlNgE" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
                            <i className="fa fa-file" style={{fontSize:"2em"}} aria-hidden="true" /> Dataset Link
                            </Button>
                        </a>
                    
                        
                    </div>
                    
                    
                    
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default FaceEmotion;