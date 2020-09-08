import React, {Component} from 'react';


import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';

class Drums_CV extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
               <Card className="card1" interactive={true} elevation={Elevation.TWO}>
                   <center>
                    <h6>Virtual Drum Machine</h6>
                    
                    Used openCV and Selenium. This detects the colour of a object and with that color if we move over the text different sounds are produced. 
                    The sound is getting from the website <a href="https://www.onemotion.com/drum-machine/">One Motion</a>
                    
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/Drums_ComputerVision" rel="noopener noreferrer" target="_blank">
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

export default Drums_CV;