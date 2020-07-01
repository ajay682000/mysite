import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class Whatsappbot extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Computer Vision</Card.Header> */}
                <Card.Body>
                    <Card.Title>Detecting Human and Car in Python</Card.Title>
                    <Card.Text>
                    <b>OpenCV</b> library is used for detecting. Many <b>Harcascade Classifiers</b> have been used for detecting various objects
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/ComputerVision/tree/master/Jupyteranotebook" rel="noopener noreferrer" target="_blank">
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

export default Whatsappbot;