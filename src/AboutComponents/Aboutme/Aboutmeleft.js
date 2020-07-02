import React, {Component} from 'react'
import Pdabout from './Pdabout';
class Aboutmeleft extends Component {
    render() {
        return(
            <div className="aboutme-left">
              <h5 style={{color:'grey', fontWeight:'bold'}}>About me</h5>
                       <hr style={{borderTop: '3px solid #cf4452', width: '30%'}}></hr>

               <p>This is Ajay Krishnan currently pursuing my Undergraduate course in Computer Science and Engineering. 
                   I am an enthusiastic learner. A quote which I inspired is <b>"Don't see different things. See the things differently."</b></p> 

                   <h5 style={{color:'grey', fontWeight:'bold'}}>Email</h5>
                       <hr style={{borderTop: '3px solid #cf4452', width: '30%'}}></hr>
                <p>ajaykrishnan682000.ak @gmail.com <br></br></p>

               <h5 style={{color:'grey', fontWeight:'bold'}}>Phone</h5>
                       <hr style={{borderTop: '3px solid #cf4452', width: '30%'}}></hr>
                <p>+918489154492 <br></br> +917010668291</p>
               <h5 style={{color:'grey', fontWeight: 'bold'}}>Personal Details</h5>
                       <hr style={{borderTop: '3px solid #cf4452', width: '30%'}}></hr>
                       <Pdabout 
                                Details="Father Name"
                                detailans="Pasupathi Ramanathan R"
                            />
                            <Pdabout 
                                Details="Mother Name"
                                detailans="Punithavalli P"
                            />
                            <Pdabout 
                                Details="Date of Birth"
                                detailans="06-08-2000"
                            />
                            <Pdabout 
                                Details="Gender"
                                detailans="Male"
                            />
                            <Pdabout 
                                Details="Nationality"
                                detailans="Indian"
                            />
                            <Pdabout 
                                Details="Marital Status"
                                detailans="Unmarried"
                            />
                            <Pdabout 
                                Details="Hobby"
                                detailans="Self Learning"
                            />
            </div>
        )
    }
}

export default Aboutmeleft;