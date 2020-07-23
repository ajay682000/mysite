import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class CoronaVirus extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               {/* <Card.Header>Face Recognition</Card.Header> */}
                <Card.Body>
                    <Card.Title>Corona Virus Recognition using Chest X-Ray Images</Card.Title>
                    <Card.Text>
                       Its just a simple Data Science Project which to recognize the corona vius using chest x ray images
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/Corona-Virus-Rocognition-Chest-X-Ray" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>

                        <a href="https://drive.google.com/drive/folders/1BZJ6SEKQKjCk9ibnyjg2qxQeW50gNUSV?usp=sharing" rel="noopener noreferrer" target="_blank">
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

export default CoronaVirus;