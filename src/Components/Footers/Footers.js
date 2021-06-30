import React from 'react';
import './Footers.css';

const Footers = () => {
    return (
        <>
            <div className="bg-dark ">
            <div className="container width-style py-5 ">
                <div className="row text-white">
                    
                    <div className="col-md-3 px-2">
                          <h6 style={{color : 'white'}}>ABOUT US</h6>
                          <hr className="line"></hr>
                          <p>Driving License Issuance Management System (DLIMS) Phase-II automates the processes for driving license issuance, renewal and upgrades. These activities are carried out throughout the province of Punjab. This system provides quick processing service to public and up to date statistics to the authorities by using state of the art technology and equipment. The system redefines the issuance process of all types of licenses by using a centralized network.</p>
                    </div>

                    <div className="col-md-3 px-2">
                            <h6 style={{color : 'white'}}>CUSTOMER CARE STANDARDS</h6>
                            <hr className="line"></hr>
                            <p>The customer care standards will be enhanced in such a way that the applicant will only have to visit the licensing testing center and upon passing the test, the applicant will get internationally renowned Secured Card based driving license. In order to have a self-sustainable model to continue giving best service delivery to the general public, revolving fund will be created for inward and outward transactions.</p>
                    </div>

                    <div className="col-md-3 px-2">
                           <h6 style={{color : 'white'}}>KEY FEATURES</h6>
                           <hr className="line"></hr>
                           <p>Centralized Issuance and Management of Driving Licenses
                               <br></br>
                               <br></br>
                              Centralized Database of Licensing System of whole Punjab
                              <br></br>
                               <br></br>
                              Centralized Driving License Printing Facility
                              <br></br>
                               <br></br>
                              Delivery of Issued Licenses through courier and basing on that verification of the Applicant can be made easy</p> 
                    </div>

                    <div className="col-md-3 px-2">
                            <h6 style={{color : 'white'}}>CONTACT US</h6>
                            <hr className="line"></hr>
                            <p>
                            Phone Number: +92.42.35777268
                            <br></br>
                            <br></br>
                            Email:complaint.dlims@pitb.gov.pk
                            </p>
                    </div>

                </div>
            </div>

            <div className="container">
                
                    <hr className="changing"></hr>
                
                <div className="row">
                    <div className="col-md-6 text-white">
                            <p>© 2021 PITB - DLIMS.PUNJAB.GOV.PK. ALL RIGHTS RESERVED.</p>
                    </div>

                    <div className="col-md-4">

                    </div>

                    <div className="col-md-2 text-white">
                        <p>TOTAL VISITORS: 9961938</p>
                    </div>

                </div>
                </div>   
            
        </div>

               
        </>
    )
}

export default Footers;
