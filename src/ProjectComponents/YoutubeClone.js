import React, {Component} from 'react';

import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';


class YoutubeClone extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
            <Card className="card1" interactive={true} elevation={Elevation.TWO}>
            <center>
                    <h6>Youtube Clone App</h6>
                       Just a replica of the Youtube App uses Youtube API to fetch the data. Its is made with <b>React Native</b>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/YoutubeClone" rel="noopener noreferrer" target="_blank">
                    <Button variant="light" className="project-button">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>
                        <br></br>
                        <a href="https://drive.google.com/file/d/1LIOTwWV1VXsqdLIjV7KLTTQghF6rNoDI/view?usp=sharing">
                    <Button variant="light" className="project-button">
                            <i className="fa fa-mobile" style={{fontSize:"2em"}} aria-hidden="true" /> App Link
                            </Button>
                        </a>
                    
                        
                    </div>
                    
                   </center>    
                
                </Card>
            </div>
        )
    }
}

export default YoutubeClone;