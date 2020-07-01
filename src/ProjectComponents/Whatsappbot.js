import React, {Component} from 'react';


import {Card, Button} from 'react-bootstrap';

class Whatsappbot extends Component{
    render(){
        return(
            <div>
               <Card className="text-center">
               <Card.Header>Whatsapp Automation</Card.Header>
                <Card.Body>
                    <Card.Title>Sending messages automatically in just a click</Card.Title>
                    <Card.Text>
                    This uses <b>Sellinum</b> webdriver for automating the messages. The link for the program is given below. 
                    This program executes only on Chrome Browser as <b>chrome driver</b> is used.
                    </Card.Text>
                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/whatsapp-bot" rel="noopener noreferrer" target="_blank">
                    <Button variant="light">
                            <i className="fa fa-github-square" style={{fontSize:"2em"}} aria-hidden="true" /> Github Link
                            </Button>
                        </a>
                        
                    </div>
                    
                    
                    
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Whatsappbot;