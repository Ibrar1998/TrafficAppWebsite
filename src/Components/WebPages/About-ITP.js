import React from 'react';
import SocialAccounts from '../SocialAccounts/SocialAcc';
import Footers from '../Footers/Footers';
import Navbar from '../MenueBar/MenueBar';

export default function AboutITP() {
  return (
    <>
                   <Navbar />
                        <div className="section" style={{backgroundColor:'whitesmoke' , paddingTop:'5em' ,paddingBottom:'5em'}}>

                  
                  <div className="container">
                      <div className="row">
                      <div className='container-fluid'>
                      <div className='row'>
                          <div className="col-12 title-div">
                              <h1 className="text-center">VISION STATEMENT</h1>
                          </div>
                      </div>
                  </div>

                          <div className="col-12 ">
                              <p style={{fontFamily:'sans-serif' , fontSize:'1em' , fontWeight:'700',paddingTop:'2em'}}>
                              To make the Traffic system in the capital city a model of excellence which could be emulated by other law enforcement agencies in Pakistan.
                              </p>
                          </div>

                          <div className='container-fluid'>
                             <div className='row'>
                              <div className="col-12 title-div">
                                  <h1 className="text-center">MISSION STATEMENT</h1>
                              </div>
                            </div>
                          </div>
                          <div>
                                <p style={{fontFamily:'sans-serif' , fontSize:'1em' , fontWeight:'700',paddingTop:'2em' }}>To maintain smooth flow of traffic, prevention of accidents, helping road users in distress, ensuring rule of law through equal application, achieving the target of zero tolerance with firmness but politeness to gain the confidence and support of the community.</p>
                          </div>


                          <div className='container-fluid'>
                             <div className='row'>
                              <div className="col-12 title-div">
                                  <h1 className="text-center">CORE VALUES</h1>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                              <ol style={{fontFamily:'sans-serif' , fontSize:'1em' , fontWeight:'700',paddingTop:'2em'}}>
                                <li> Service Oriented</li>
                                <li>Professional</li>
                                <li>People Freindly</li>
                                <li>Equal Implementation of Law</li>
                                <li>Corruption Free</li>

                              </ol>
                          </div>


                          <div className='container-fluid'>
                             <div className='row'>
                              <div className="col-12 title-div">
                                  <h1 className="text-center">History</h1>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                             <ul style={{fontFamily:'sans-serif' , fontSize:'1em' , fontWeight:'700',paddingTop:'2em'}}>
                               <li>Islamabad Traffic Police was established on 28th January 2006 and formally inaugurated by the then Prime Minister of Pakistan.</li>
                               <li>ITP has many achievements. The major achievements are listed below.</li>
                               <li>ITP has been successful in achieving its Vision Statement of making traffic system in the capital city a model of excellence which could be emulated by other law enforcement agencies in Pakistan.</li>
                               <li>ITP has been successful in including its Mission Statement into the working of its personnel in order to ensure that
                                    To maintain smooth flow of traffic.
                                    Prevention of accidents.
                                    To help road users in distress
                                    To achieve the target of Zero tolerance with firmness but politeness.
                                    To ensure the role of law through equal application.
                                    To gain the confidence and support of the community.</li>
                               <li>ITP has been successful to a large extant in achieving its Core Values of Professionalism, Integrity, Service Oriented and People Friendly Policing.</li>
                               <li>ITP has been successful achieve the objective of corruption free Police Department as the charter given while establishing it.</li>
                               <li>ITP achieve its target of Zero Tolerance as well.</li>
                               <li>ITP has ensured equal application of law and eliminated VIP culture from the capital by issuing tickets of fine.</li>
                               <li>Created awareness among road users about traffic laws and regulations through traffic education campaigns and vital change in the attitude of road users has been observed.</li>
                               <li>ITP emphasizes and concentrates mainly on traffic education to maintain road discipline. A traffic education team has been created exclusively to meet the objectives. The team is supported by print & electronic media, civil society and corporate sector. To carry out the assigned task the education team chalked out a comprehensive program to educate the school, college and university students, driver of commercial organizations, diplomatic corps, public transport, private vehicles and government and non government organizations.</li>
                                <li>In order to facilitate general public and take immediate action against traffic violators, Islamabad Traffic Police established 1915 Helpline which on receipt of a complaint of any violation, it immediately conveys it to the respective traffic police officer and informs the complainant about the action taken by Traffic Police within the shortest possible time.</li>
                                <li>Special enforcement squads i.e. Pressure Horn, Route Violation, Signals, Parking, One Wheeling Checking and Environment Squad have been established to check the certain violations have been established.</li>
                                <li>ITP successfully arranged the issuance of Digital Driving Licenses of International standard in Traffic Office. The procedure for obtaining DDL is very transparent. The facilities of medical examination, photographer and post office have been provided to the applicants under one roof.</li>
                             
                             
                             
                             </ul>
                          </div>

                          
                  </div>


                  </div>
                  </div>



      <Footers />
      <SocialAccounts />
    </>
  );
}
