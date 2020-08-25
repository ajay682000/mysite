import React, {Component} from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import Poem1 from './PoemsListTamil/Poem1'
import Poem2 from './PoemsListTamil/Poem2'
import Poem3 from './PoemsListTamil/Poem3'
import Poem4 from './PoemsListTamil/Poem4'
import Poem5 from './PoemsListTamil/Poem5'
import Poem6 from './PoemsListTamil/Poem6'
import Poem7 from './PoemsListTamil/Poem7'
class TamilKavithai extends Component {
    render() {
        return(
            <div>
                <div className="bp3-card .bp3-interactive">
                <Card interactive={true} elevation={Elevation.TWO}>
                    <center>
                    <h5><b>அம்மாவின் பிறந்தநாள் </b></h5>
                    <p><Poem1 /></p>
                    </center>  
                </Card>
                </div>
                <div className="bp3-card .bp3-interactive">
                <Card interactive={true} elevation={Elevation.TWO}>
                    <center>
                    <h5><b>தந்தையின் பிறந்தநாள் </b></h5>
                    <p><Poem2 /></p>
                    </center>  
                </Card>
                </div>
                <div className="bp3-card .bp3-interactive">
                <Card interactive={true} elevation={Elevation.TWO}>
                    <center>
                    <h5><b>நிலவு  </b></h5>
                    <p><Poem3 /></p>
                    </center>  
                </Card>
                </div>
                <div className="bp3-card .bp3-interactive">
                <Card interactive={true} elevation={Elevation.TWO}>
                    <center>
                    <h5><b>திருமணம்</b></h5>
                    <p><Poem4 /></p>
                    </center>  
                </Card>
                </div>
                <div className="bp3-card .bp3-interactive">
                <Card interactive={true} elevation={Elevation.TWO}>
                    <center>
                    <h5><b>அழகு மங்கை</b></h5>
                    <p><Poem5 /></p>
                    </center>  
                </Card>
                </div>
                <div className="bp3-card .bp3-interactive">
                <Card interactive={true} elevation={Elevation.TWO}>
                    <center>
                    <h5><b>பெண்மை தேடிய ஆண்மை</b></h5>
                    <p><Poem6 /></p>
                    </center>  
                </Card>
                </div>
                <div className="bp3-card .bp3-interactive">
                <Card interactive={true} elevation={Elevation.TWO}>
                    <center>
                    <h5><b>மழலை</b></h5>
                    <p><Poem7 /></p>
                    </center>  
                </Card>
                </div>
                
            </div>
        )
    }
}

export default TamilKavithai;