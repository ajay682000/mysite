import React, {Component} from 'react';

import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';

class SpeechRecognition extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
               <Card interactive={true} elevation={Elevation.TWO}>
               <center>
                   <h6>Speech Recognition in Python</h6>
                        Recognize the human voice that said in english and convert to text. 
                        
               
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/SpeechRecognition" rel="noopener noreferrer" target="_blank">
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

export default SpeechRecognition;