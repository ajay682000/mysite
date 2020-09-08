import React, {Component} from 'react';


import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';


class FaceEmotion extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
            <Card className="card1" interactive={true} elevation={Elevation.TWO}>
                <center>
                    <h6>Face Emotion Detection in Python</h6>
                
                        The datasets were prepared, trained and then the Face Emotions like <b>Angry, Happy, Neutral, Sad and Surprise</b> are detected.
                    
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/FaceEmotion" rel="noopener noreferrer" target="_blank">
                    <Button variant="light" className="project-button">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>
                        <br></br>
                        <a href="https://drive.google.com/drive/folders/1tN8VCmUrXbF5jM8ICcyW_BYFoqkjlNgE" rel="noopener noreferrer" target="_blank">
                    <Button variant="light" className="project-button">
                            <i className="fa fa-file" style={{fontSize:"2em"}} aria-hidden="true" /> Dataset Link
                            </Button>
                        </a>
                    
                        
                    </div>
                    
                    
                    </center>
                    
               
                </Card>
            </div>
        )
    }
}

export default FaceEmotion;