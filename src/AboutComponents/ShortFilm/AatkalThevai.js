import React, {Component} from 'react'

import {Card} from 'react-bootstrap';

class AatkalThevai extends Component {
    render() {
        return (
            <div>
                
                <Card className="card1"> 
                <Card.Body>
                <Card.Title><b>Aatkal Thevai</b></Card.Title>
                    <b>Language:</b> Tamil <br></br>
                    <b>Genre:</b> Social, Short, Comedy <br></br>
                    <b>Released Date:</b> May 17, 2018
                    <br></br>
                    <div>
                        <br></br>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/FgGKWUSb508" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                    </div>
                </Card.Body>
                </Card>              
            </div>
        )
    }
}

export default AatkalThevai;