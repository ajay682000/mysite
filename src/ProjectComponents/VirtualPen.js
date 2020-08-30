import React, {Component} from 'react';


import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';


class VirtualPen extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
               <Card interactive={true} elevation={Elevation.TWO}>
                   <center>
                      A computer vision project made with python. It detects a particular colour and with that colour it will write on the Screen
                    
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/VirtualPen" rel="noopener noreferrer" target="_blank">
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

export default VirtualPen;