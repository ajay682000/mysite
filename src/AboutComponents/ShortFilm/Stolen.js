import React, {Component} from 'react'

import {Card} from 'react-bootstrap';

class Stolen extends Component {
    render() {
        return (
            <div>
                
                <Card className="card1"> 
                <Card.Body>
                <Card.Title><b>Stolen</b></Card.Title>
                    <b>Language:</b> Tamil <br></br>
                    <b>Genre:</b> Thriller, Suspense, Action, Series <br></br>
                    <b>Released Date:</b> Nov 17, 2018
                    <br></br>
                    <div>
                        <br></br>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/hrtMbt8_Wxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Card.Body>
                </Card>
                
                
                
                
            </div>
        )
    }
}

export default Stolen;