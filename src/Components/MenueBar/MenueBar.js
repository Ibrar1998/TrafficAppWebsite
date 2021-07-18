import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar , Nav , NavDropdown} from 'react-bootstrap';
import './Navbar.css';


const MenueBar = () =>  {

  return (
      <>

    <div className="full-change">
            <div className="container-fluid">
                <div className="row">
                                <div className="col-md-2 d-flex justify-content-start ">
                                      <Link to='/'>
                                       <img src="./images/ITP.png" className="my-1" alt="ITP" width="60px" height="60px"></img>
                                       </Link>
                                        
                                </div>
                        
                                   

                                    <div className="col-md-10 d-flex justify-content-end ">

                                      
                                        <Navbar>
                                            <Nav className="Menue-style ">
                                                <Nav.Link className="Menue-icon-style">
                                                              <Link 
                                                              to='/' 
                                                              style={{color:'black' , textDecoration:'none'}}
                                                              >
                                                                  HOME
                                                              </Link>
                                                </Nav.Link>

                                                <Nav.Link  className="Menue-icon-style">
                                                  <Link 
                                                  to='/AboutITP' 
                                                  style={{color:'black' , textDecoration:'none'}}
                                                 
                                                  >
                                                    ABOUT ITP
                                                    </Link>
                                                </Nav.Link>
                                            

                                               
                                                
                                                <NavDropdown title="LICENSING" id="collasible-nav-dropdown" className='Menue-icon-style-icon' >

                                                    <NavDropdown.Item  className="some-change">
                                                              <Link 
                                                              to='/HowToApplyy' 
                                                              style={{color:'black' , textDecoration:'none'}}
                                                              
                                                              >
                                                              How To Apply
                                                              </Link>
                                                    </NavDropdown.Item>

                                                    <NavDropdown.Item  className="some-change">
                                                              <Link 
                                                              to='/VerifyLicense' 
                                                              style={{color:'black' , textDecoration:'none'}}  
                                                             
                                                              > 
                                                                  Verify License
                                                              </Link>  
                                                    </NavDropdown.Item>

                                                   
                                                </NavDropdown>




                                                <NavDropdown title="EDUCATION WING" id="collasible-nav-dropdown" className='Menue-icon-style-icon' >


                                                    <NavDropdown.Item  className="some-change">
                                                            <Link 
                                                            to='/RoadSignsTest' 
                                                            style={{color:'black' , textDecoration:'none'}}
                                                            
                                                            >
                                                            Road Signs Test
                                                            </Link>
                                                    </NavDropdown.Item>


                                                    <NavDropdown.Item  className="some-change">
                                                            <Link 
                                                            to='/TrafficViolations' 
                                                            style={{color:'black' , textDecoration:'none'}}
                                                          
                                                            >
                                                            Traffic Voilations and Fine
                                                            </Link>
                                                    </NavDropdown.Item>

                                                    <NavDropdown.Item  className="some-change">
                                                            <Link 
                                                            to='/ImpRoadSigns' 
                                                            style={{color:'black' , textDecoration:'none'}}
                                                            
                                                            >
                                                            Important Road Signs
                                                            </Link>
                                                    </NavDropdown.Item>
                                                
                                                
                                                </NavDropdown>

                                                
                                                
                                                <Nav.Link >
                                                              <Link to='/Login' >
                                                                 <button className="btn btn-primary" style={{width:'100px' , height: '35px' }}> LOGIN </button>
                                                              </Link>
                                                </Nav.Link>
                                            

                                            </Nav>
                                        </Navbar>
                                    </div>        
                                   
                </div>
            </div>
        </div> 
    </>
  );
}

export default MenueBar;



























        