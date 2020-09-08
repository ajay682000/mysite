import React ,{Component} from 'react';

import StickyFooter from 'react-sticky-footer';
import {Link} from 'react-router-dom';
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'; 

class PgFooter extends Component {
    render() {
        return(
            <div className="footer">
                <StickyFooter   
                    bottomThreshold={50}
                    normalStyles={{       
                        // 2e2f30
                    // backgroundColor: "#2e2f30",
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
                    <Link to="/" className="pgheader1" >Home</Link>
                    <Link to="/about" className="pgheader1" >My Blog</Link> 
                    <Link to="/contact" className="pgheader1" >Contact</Link>
                    <Link to="/projects" className="pgheader1" >Projects</Link>
                    <Link to="/resume" className="pgheader1" >Resume</Link>

                    <br></br><br></br>

                    
                    <div className="project-links">
                    <a href="https://github.com/ajay682000/mysite" rel="noopener noreferrer" target="_blank">
                    <Button variant="" className="footer-button">
                            <i className="fa fa-github-square" aria-hidden="true" /> Source Code of this Website
                            </Button>
                        </a>
                       </div> 
                    
                    <p className="footer-p">Made with react
                    <i className="fab fa-react" aria-hidden="true" /> 
                    <br></br>
                    Developed by Ajay Krishnan
                    <br></br>
                    Follow me on</p> 
                    <div className="social-links">
                        
                        
                         {/* LinkedIn */}
                         <OverlayTrigger overlay={<Tooltip id="button-tooltip">LinkedIn</Tooltip>} placement='bottom'>
                        <a href="https://www.linkedin.com/in/ajay-krishnan-7a8633b1/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin"  aria-hidden="true" />
                            
                        </a>
                        </OverlayTrigger>
                        
                        {/* <OverlayTrigger overlay={<Tooltip id="button-tooltip">Github</Tooltip>} placement='bottom'>
                        <a href="https://github.com/ajay682000" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Gitlab</Tooltip>} placement='bottom'>
                        <a href="https://gitlab.com/ajay_682000" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-gitlab"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger> */}
                        {/* Facebook */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Facebook</Tooltip>} placement='bottom'>
                        <a href="https://www.facebook.com/ajay.pasupathiramanathan" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        {/* Instagram */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Instagram</Tooltip>} placement='bottom'>
                        <a href="https://www.instagram.com/ajay_682000/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        {/* Whatsapp */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Whatsapp</Tooltip>} placement='bottom'>
                        <a href="https://api.whatsapp.com/send?phone=+918489154492" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-whatsapp"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        {/* Telegram */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Telegram</Tooltip>} placement='bottom'>
                        <a href="https://t.me/ajay_682000" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-telegram-plane"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        {/* Twitter */}
                        <OverlayTrigger overlay={<Tooltip id="button-tooltip">Twitter</Tooltip>} placement='bottom'>
                        <a href="https://twitter.com/ajay_682000" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter"  aria-hidden="true" />
                        </a>
                        </OverlayTrigger>
                        
                        
                    </div>

                </StickyFooter>
            </div>
        )
    }
}

export default PgFooter;