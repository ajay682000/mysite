import React,{Component} from 'react';

import Pic from '../Images/ak.jpeg';


class Resumeleft extends Component {
    render() {
        return (
            <div>
            <div style={{textAlign:'center'}}>
                            <img src={Pic}
                                alt="Ajay Krishnan" 
                                className="avathar-img"
                                />         
                            </div>
                        <h2>Ajay Krisnan P</h2>
                       <h5 style={{color:'grey'}}>Engineering Student</h5>
                       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                       <p>
                       Enna pathi naane perumaiya solla onnum illa. Enna pathi ethavathu therinja sollunga. Neenga solluratha vachu inga eluthuren. Matha padi perusa solra alavuku nan worth illa. I am a comedy piece uhh
                       </p>
                       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                       <h5 style={{fontWeight: 'bold'}}>Address</h5>
                       {/* <p>Dubai Main Road, <br></br>
                           Dubai Kuruku Sandhu, <br></br>
                           Dubai Kammai Opposite, <br></br>
                           Dubai
                       </p> */}
                       <p> 
                           125/76J13A,<br></br> T.P.Mills Road, <br></br>
                            Kattu Street, <br></br> Rajapalayam - 626117
                       </p>
                       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                       <h5 style={{fontWeight: 'bold'}}>Phone</h5>
                       <p>
                       {/* +919876543210 <br></br> +919632587410 */}
                        
                        +918489154492, <br></br>+917010668291
                       </p>
                       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                       <h5 style={{fontWeight: 'bold'}}>Email</h5>
                       <p>
                        {/* ethoorcompany@anthacompany.com */}
                        ajaykrishnan682000.ak@gmail.com
                       </p>
                       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                       <h5 style={{fontWeight: 'bold'}}>Website</h5>
                       <p>
                        {/* something.akak.com */}
                        <a href = "https://ajay682000.github.io/mysite/">https://ajay682000.github.io/mysite/</a>
                       </p>
                       </div>

        )
    }
}

export default Resumeleft;