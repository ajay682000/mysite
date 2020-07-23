import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class VirtualPen extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Face Recognition</Card.Header> */}
                <Card.Body>
                    {/* <Card.Title></Card.Title> */}
                    <Card.Text>
                      A computer vision project made with python. It detects a particular colour and with that colour it will write on the Screen
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/VirtualPen" rel="noopener noreferrer" target="_blank">
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

export default VirtualPen;