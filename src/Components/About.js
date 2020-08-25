import React , {Component, useState} from 'react';
import '../App.css';
// import {Tabs, Tab} from 'react-mdl';
import {Tabs, Tab} from 'react-bootstrap';
import Con1 from '../Images/con1.jpeg';
import Poems from '../AboutComponents/Poems';
import Sports from '../AboutComponents/Sports';
import ShortFilm from '../AboutComponents/ShortFIlm';
import Aboutme from '../AboutComponents/Aboutme';

// class About extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             activeTab: 0
//         };
//     }
    function About() {
        const [key, setKey] = useState('home');
        return (
            <div >
                {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple> */}
                <Tabs 
                defaultActiveKey="Tab1"
                // activeKey={key} 0
                id="controlled-tab-example"
                onSelect={(k) => setKey(k)}
                // className="category-tabs"
                >
                    <Tab eventKey="Tab1" title="Personal Info"><Aboutme /></Tab>
                    <Tab eventKey='Tab2' title="Short Films"><ShortFilm /></Tab>
                    <Tab eventKey="Tab3" title="Poems | கவிதை"><Poems /></Tab>
                    {/* <Tab eventKey='Tab4' title="Sports" ><Sports /></Tab> */}
                    {/* <Tab eventKey='Tab5' title="Tab 5" disabled>Tab4</Tab> */}
                </Tabs>
               
            </div>
        )
    }
// }

export default About;
