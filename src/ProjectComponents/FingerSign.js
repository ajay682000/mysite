import React, {Component} from 'react';


import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';


class FingerSign extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
            <Card className="card1" interactive={true} elevation={Elevation.TWO}>
                <center>
                    <h6>Finger Sign Detection in Python</h6>
                      The datasets for the finger sign are prepared, trained and then the Finger Sign Numbers that is <b>None, One, Two, Three, Four, Five</b> are detected.
                    
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/FingerSignGesture" rel="noopener noreferrer" target="_blank">
                    <Button variant="light" className="project-button">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>
                        <br></br>
                        <a href="https://drive.google.com/drive/folders/1gE2Mn540v_hA33njJ5u0kEH1a2YLv5JC" rel="noopener noreferrer" target="_blank">
                    <Button variant="light" className="project-button">
                            <i className="fa fa-file" style={{fontSize:"2em"}} aria-hidden="true" /> Dataset Link
                            </Button>
                        </a>
                    
                        
                    </div>
                    
                    </center>
                    
                
                </Card>
            </div>
        )
    }
}

export default FingerSign;