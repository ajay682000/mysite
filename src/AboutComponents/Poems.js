import React, {Component} from 'react'
import {Tabs, Tab} from 'react-mdl'


import TamilKavithai from './Poems/TamilKavithai';
import EnglishPoem from './Poems/EnglishPoem';

class Poems extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <div>
                    <TamilKavithai />
                </div>
            )
        }
        if(this.state.activeTab === 1) {
            return (
                <div>
                    <EnglishPoem />
                </div>
            )
        }
    }
   

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab><b className="demo-tabs-b">தமிழ் | (Tamil)</b></Tab>
                    <Tab><b className="demo-tabs-b">English</b></Tab>
                </Tabs>
                <section>
                    <div className="content">
                    
                        {this.toggleCategories()}
                    </div>
                </section>
            </div>    
        );
    }
}

export default Poems;