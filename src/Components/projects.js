import React , {Component} from 'react';

import Con2 from '../Images/Con2.png';

class Project extends Component {
    render() {
        return (
            <div className="contact-body" style={{textAlign: 'center'}}>
               <img src={Con2}
                    alt="Under Construction" 
                    width='50%'
                    height='50%'
                    />
            </div>
        )
    }
}

export default Project;
