import React, {Component} from 'react';

import { Card, Elevation } from "@blueprintjs/core";
import {Button} from 'react-bootstrap';

class Whatsappbot extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
               <Card className="card1" interactive={true} elevation={Elevation.TWO}>
                   <center>
               <h6>Detecting Human and Car in Python</h6>
                    
                    Real time Car and Standing Human detection which uses <b>Haarcascade Classifier</b> for detection. 
                    
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/ComputerVision/tree/master/Jupyteranotebook" rel="noopener noreferrer" target="_blank">
                    <Button variant="light" className="project-button">
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

export default Whatsappbot;