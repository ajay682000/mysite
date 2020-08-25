import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class FaceReco_Transfer extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Face Recognition</Card.Header> */}
                <Card.Body>
                    <Card.Title>Face Recognition system in Python using Transfer Learning</Card.Title>
                    <Card.Text>
                    In this project your own face is captured, trained to the machine and your face will be identified by machine
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/FaceRecognition_TransferLearning" rel="noopener noreferrer" target="_blank">
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

export default FaceReco_Transfer;