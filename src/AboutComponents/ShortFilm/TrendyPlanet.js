import React, {Component} from 'react'

import {Media, Button} from 'react-bootstrap';
import Logo from '../../Images/TrendyPlanet.jpg';


class TrendyPlanet extends Component {
    render(){
        return(
            <div>
                <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={Logo}
                    alt="Trendy Planet Production"
                />
                <Media.Body>
                    <h5>Trendy Planet Production</h5>
                    <p>
                    Trendy Planet Production is out Youtube channel where we host out Short films and Short videos.
                    Till now we have launched two short films and more short films are yet to come.
                    </p>
                    <div>
                    <a href="https://www.instagram.com/trendyplanetproductions/" rel="noopener noreferrer" target="_blank">
                    <Button variant="" className="trendyplanetbutton">
                            <i className="fa fa-instagram" style={{fontSize:"1em"}} aria-hidden="true"> Click here to see <br></br>Our Instagram Page</i> 
                            </Button>
                        </a>
                    </div>
                </Media.Body>
                </Media>
            </div>
        )
    }
}

export default TrendyPlanet;