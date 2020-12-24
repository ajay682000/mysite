import React, {Component} from 'react';

import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';


class EmployeeApp extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
            <Card className="card1" interactive={true} elevation={Elevation.TWO}>
            <center>
                    <h6>Employee Management App</h6>
                       Made with <b>React Native</b> to store,delete,update the details of the employee
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/EmployeeApp" rel="noopener noreferrer" target="_blank">
                    <Button variant="light" className="project-button">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link (Private Repository)
                            </Button>
                        </a>
                        <br></br>
                        <a href="https://drive.google.com/file/d/1hodnJrlzuhGJkvHj8c-7j3LwqVZNcYam/view?usp=sharing">
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

export default EmployeeApp;