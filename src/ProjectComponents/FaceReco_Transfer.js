import React, {Component} from 'react';

import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';

class FaceReco_Transfer extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
               <Card interactive={true} elevation={Elevation.TWO}>
                  <center>
              <h6>Face Recognition system in Python using Transfer Learning</h6>
                   
                    The face is Captured, stored and then trained using <b>Transfer Learning</b> and then the face is detected.
                   
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/FaceRecognition_TransferLearning" rel="noopener noreferrer" target="_blank">
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

export default FaceReco_Transfer;