import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class Drums_CV extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Face Recognition</Card.Header> */}
                <Card.Body>
                    <Card.Title>Virtual Drum Machine</Card.Title>
                    <Card.Text>
                    Used openCV and Selenium. This detects the colour of a object and with that color if we move over the text different sounds are produced. 
                    The sound is getting fromm the website <a href="https://www.onemotion.com/drum-machine/">One Motion</a>
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/Drums_ComputerVision" rel="noopener noreferrer" target="_blank">
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

export default Drums_CV;