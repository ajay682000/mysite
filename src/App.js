import React, { Component } from 'react';
import './App.css';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Main from './Components/Main';
import PgHeader from './Components/PgHeader';
import PgFooter from './Components/PgFooter';

class App extends Component {
  render() {
    return (
      
     <div>
       
         <PgHeader />
         
      
            {/* <div style={{height: '300px', position: 'relative'}}> */}
          <div>
          <Layout fixedHeader>
              {/* <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Drawer> */}
              <Content>
              
                <div className="page-content"></div>
                
                <Main />
                
                <PgFooter />
                
              </Content>
              
          </Layout>
            
      </div>
      
      </div>
    );
  }
  
}

export default App;
