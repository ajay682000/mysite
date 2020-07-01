import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class FingerSign extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Face Recognition</Card.Header> */}
                <Card.Body>
                    <Card.Title>Finger Sign Detection in Python</Card.Title>
                    <Card.Text>
                        In this the Finger Signs like <b>None, One, Two, Three, Four, Five</b> are detected.
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/FingerSignGesture" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>

                        <a href="https://drive.google.com/drive/folders/1gE2Mn540v_hA33njJ5u0kEH1a2YLv5JC" rel="noopener noreferrer" target="_blank">
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

export default FingerSign;