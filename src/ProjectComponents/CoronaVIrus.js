import React, {Component} from 'react';


import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';


class CoronaVirus extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
               <Card interactive={true} elevation={Elevation.TWO}>
                   <center>
                    <h6>Corona Virus Recognition using Chest X-Ray Images</h6>
                    
                       Its just a simple Data Science Project which to recognize the corona vius using chest x ray images
                
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
                    
                    </center>
                    
               
                </Card>
            </div>
        )
    }
}

export default CoronaVirus;