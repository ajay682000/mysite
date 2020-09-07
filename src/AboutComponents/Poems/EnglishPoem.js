import React, {Component} from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";

import Poem1 from './PoemsListEnglish/Poem1';

class EnglishPoem extends Component {
    render() {
        return(
            <div>
                <div className="bp3-card .bp3-interactive">
                <Card className="card1" interactive={true} elevation={Elevation.TWO}>
                    <center>
                    <h5><b>Life </b></h5>
                    <p><Poem1 /></p>
                    </center>  
                </Card>
                </div>
            </div>
        )
    }
}

export default EnglishPoem