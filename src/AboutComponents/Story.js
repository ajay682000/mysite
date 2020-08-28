import React,{Component} from 'react'
import { Button, Card, Elevation } from "@blueprintjs/core";

import Story1 from './Writings/Story1'
class Sports extends Component {
    render() {
        return(
            <div>
                <div className="bp3-card .bp3-interactive">
                <Card interactive={true} elevation={Elevation.TWO}>
                    
                    <p><Story1 /></p>
                     
                </Card>
                </div>
            </div>
        )
    }
}

export default Sports;