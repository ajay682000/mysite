import React, {Component} from 'react';


import Education from '../ResumeComponents/Education';
import Internships from '../ResumeComponents/Internships';
import Skills from '../ResumeComponents/Skills';
import ProgressSkills from '../ResumeComponents/ProgressSkills';
import IV from '../ResumeComponents/Iv';
import Projects from '../ResumeComponents/Projects'
import PersonalDetails from '../ResumeComponents/Personaldetails';


class Resumeright extends Component {
    render() {
        return(
            <div>
                <h2>Education</h2>
                           <Education 
                                startYear={2003}
                                endYear = {2004}
                                schoolName = "Vaima VIdyalaya"
                                schoolDesc = "Studied Pre Kindergarten during the academic year 2003 - 2004"
                           />
                           <Education 
                                startYear={2004}
                                endYear = {2005}
                                schoolName = "Kalaivani VIdyalaya"
                                schoolDesc = "Studied Lower Kindergarten during the academic year 2003 - 2004"
                           />
                           <Education 
                                startYear={2005}
                                endYear = {2018}
                                schoolName = "Sri Ramana Vidyalaya Montessori Matric Hr.Sec School"
                                schoolDesc = "Completed rest of my schooling from June 2005 to April 2018 at Sri Ramana Vidyalaya"
                           />
                           <Education 
                                startYear={2018}
                                endYear = {2022}
                                schoolName = "Chennai Institute of Technology"
                                schoolDesc = "Pursuing my Bachelor of Engineering in the department of Computer Science and Engineering"
                           />
                           <hr style={{borderTop: '3px solid #e22947'}}></hr>
                            <h2> Skills</h2>
                            <ProgressSkills />

                           <hr style={{borderTop: '3px solid #e22947'}}></hr>
                            <h2>Internships</h2>
                            
                            <Internships 
                                internYear={2019}
                                startMonth="August"
                                endMonth="December"
                                provider="Gogosoon Pvt.Ltd"
                                internshipdesc="Gained knowledge in React"
                            />    
                            <hr style={{borderTop: '3px solid #e22947'}}></hr>        
                            <h2>Industrial Visits</h2> 
                            <IV 
                            date={19}
                            month="July"
                            year={2019}
                            companyname="BSNL"
                            />   
                            <hr style={{borderTop: '3px solid #e22947'}}></hr>
                            <h2>Projects</h2>
                            <Projects />
                            <hr style={{borderTop: '3px solid #e22947'}}></hr>
                            <h2>Personal Details</h2>
                            <PersonalDetails />
            </div>
        )
    }
}

export default Resumeright;