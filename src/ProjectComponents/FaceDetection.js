import React, {Component} from 'react';
import { Card, Elevation } from "@blueprintjs/core";

import { Button} from 'react-bootstrap';

class FaceDetection extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
               <Card interactive={true} elevation={Elevation.TWO}>
               <center>
               <h6>Face Detection in Python</h6>
                    Real time Human Face Detection. <b>Haarcascade Classifier of frontalface detection</b> is used to detect the human face.
                    
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/FaceDetection" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>
                        
                    </div>
                    
                    </center>
                    
               
                </Card>
            </div>
        )
    }
}

export default FaceDetection;