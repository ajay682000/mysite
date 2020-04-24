import React , {Component} from 'react';

import Con1 from '../Images/con1.jpeg';

class About extends Component {
    render() {
        return (
            <div className="contact-body" style={{textAlign:'center'}}>
               <img src={Con1}
                    alt="Under Construction" 
                    width='50%'
                    height='50%'
                    
                    />
            </div>
        )
    }
}

export default About;
