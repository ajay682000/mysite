import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class InvisibleCloth extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Face Recognition</Card.Header> */}
                <Card.Body>
                    {/* <Card.Title></Card.Title> */}
                    <Card.Text>
                      A computer vision project made with python. A cloth fully with a same colour is made to get a person invisible. A background image of that partiicular place is also captured after we choose the colour to be detected.
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/Invisible" rel="noopener noreferrer" target="_blank">
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

export default InvisibleCloth;