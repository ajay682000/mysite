import React, {Component} from 'react';

import Skills from './Skills';

class ProgressSkills extends Component {
    render() {
        return(
            <div>
                            <Skills 
                                skill="Python"
                                progress={60}
                            />
                            <Skills 
                                skill="C"
                                progress={50}
                            />
                            <Skills 
                                skill="C++"
                                progress={50}
                            />
                            <Skills 
                                skill="Java"
                                progress={40}
                            />
                            <Skills 
                                skill="Html/Css"
                                progress={60}
                            />
                            <Skills 
                                skill="Javascript"
                                progress={70}
                            />
                            
                            <Skills 
                                skill="React"
                                progress={60}
                            />
                            <Skills 
                                skill="React Native"
                                progress={40}
                            />
                            <Skills 
                                skill="Android Studio"
                                progress={40}
                            />
                            <Skills 
                                skill="php"
                                progress={25}
                            />
                            <Skills 
                                skill="Laravel"
                                progress={15}
                            />
                            <Skills 
                                skill="SQL"
                                progress={30}
                            />
                            <Skills 
                                skill="Django"
                                progress={5}
                            />
                            <Skills 
                                skill="Photoshop"
                                progress={20}
                            />
                            <Skills 
                                skill="Video Editing"
                                progress={75}
                            />
                            
                        </div>
        )
    }

}

export default ProgressSkills;