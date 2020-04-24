import React ,{Component} from 'react';

import StickyFooter from 'react-sticky-footer';
import {Link} from 'react-router-dom';

class PgFooter extends Component {
    render() {
        return(
            <div>
                <StickyFooter
                    bottomThreshold={50}
                    normalStyles={{
                    backgroundColor: "#2e2f30",
                    color: '#ffffff',
                    padding: "2rem",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    textAlign: 'center',
                 }}
                    // stickyStyles={{
                    // backgroundColor: "#ffffff",
                    // padding: "2rem"
                    // }}
                >
                    <Link to="/" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>Home</Link>
                    <Link to="/about" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>About</Link> 
                    <Link to="/contact" style={{color:'#ffffff', paddingRight:'30px', fontWeight:'bold'}}>Contact</Link>
                    <Link to="/projects" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>Projects</Link>
                    <Link to="/resume" style={{color:'#ffffff',paddingRight:'30px', fontWeight:'bold'}}>Resume</Link>

                    <br></br><br></br>
                    Website Build Using React 
                    <i className="fa fa-react"  aria-hidden="true" />
                    <br></br>
                    Build By Ajay Krishnan
                    <br></br>
                    ------Contact me on------ <br></br>
                    <div className="social-links">
                        
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/ajay-krishnan-7a8633b1/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin"  aria-hidden="true" />
                        </a>
                        {/*  // Github 
                        <a href="https://github.com/ajay682000" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github"  aria-hidden="true" />
                        </a>
                        // GitLab  
                        <a href="https://gitlab.com/ajay_682000" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-gitlab"  aria-hidden="true" /> 
                        </a> */}
                        {/* Facebook */}
                        <a href="https://www.facebook.com/ajay.pasupathiramanathan" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook"  aria-hidden="true" />
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/ajay_682000/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram"  aria-hidden="true" />
                        </a>
                        {/* Whatsapp */}
                        <a href="https://api.whatsapp.com/send?phone=+918489154492" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-whatsapp"  aria-hidden="true" />
                        </a>
                        
                        
                    </div>

                </StickyFooter>
            </div>
        )
    }
}

export default PgFooter;