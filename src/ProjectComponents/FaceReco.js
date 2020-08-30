import React, {Component} from 'react';

import { Card, Elevation } from "@blueprintjs/core";
import {Button} from 'react-bootstrap';

class FaceReco extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
               <Card interactive={true} elevation={Elevation.TWO}>
              <center>
                    <h6>Face Recognition system in Python</h6>
                    
                    The face is captured and stored and then trained using <b>LBPH method</b> and then the face is detected
                    
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/FaceRecognitionandDetection" rel="noopener noreferrer" target="_blank">
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

export default FaceReco;