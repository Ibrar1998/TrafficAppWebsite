import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Navbar , Nav , NavDropdown} from 'react-bootstrap';
import './Navbar.css';
import Button from '@material-ui/core/Button';



const MenueBar = () =>  {
   
  return (
      <>
        <div className="full-change" >
            <div className="container-fluid">
                <div className="row">
                                <div className="col-md-6  ">
                                      <Link to='/'>
                                      <span className="d-flex justify-content-start">
                                       <img src="./images/ITP.png" className="my-2" alt="ITP" width="40px" height="40px"></img>
                                       <h3 className='my-3 px-2' style={{fontSize : '20px'}}>Islmabad Traffic Police</h3></span>
                                       </Link>
                                </div>
                        
                                <div className="col-md-6 d-flex justify-content-end ">
                                    
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

                                                <Nav.Link  className="Menue-icon-style">
                                                  <Link 
                                                  to='/AboutITP' 
                                                  style={{color:'black' , textDecoration:'none'}}
                                                 
                                                  >
                                                    ABOUT ITP
                                                    </Link>
                                                </Nav.Link>



                                                
                                                
                                                <Nav.Link >
                                                              <Link to='/Login' >
                                                                 <Button variant="contained" color="primary"  style={{width:'100px' , height: '35px' }}> LOGIN </Button>
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



























        