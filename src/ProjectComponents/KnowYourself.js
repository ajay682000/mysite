import React, {Component} from 'react';

import { Card, Elevation } from "@blueprintjs/core";
import { Button} from 'react-bootstrap';


class KnowYourself extends Component{
    render(){
        return(
            <div className="bp3-card .bp3-interactive">
                
            <Card interactive={true} elevation={Elevation.TWO}>
            <center>
                    <h6>A Fun App</h6>
                       Inside the app you can know about yourself by the birth date or by the blood group or be the zodiac signs. Another interesting features in that app is that the death calculator, friendship calculator.<br></br>
                       Another exciting feature is that it contains number guess game.(App Available on Amazon App Store.)
                    
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/Knowaboutyourselfapp" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>

                        <a href="https://www.amazon.com/Ajay-Krishnan-AK-Foundation-Yourself/dp/B07WV4WK2T/ref=sr_1_1?dchild=1&keywords=know+about+yourself+app&qid=1593657586&sr=8-1" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
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

export default KnowYourself;