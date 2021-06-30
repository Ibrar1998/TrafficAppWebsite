import React from 'react';
import './itemlist-style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Itemlist = () => {

    
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <div className="main">
            <div className="container  py-5 " >
                <div className="row pt-4 text-center">
                    
                    <div className="col-md-3 py-4  coustom-style">
                    <FontAwesomeIcon icon="User"/> 
                       <a href="#Appointment"><h5 className="py-2">Book Appointment</h5></a>
                       
                    </div>

                    <div className="col-md-3   py-4 px-4 coustom-style ">
                    <a href="#Driving"><h5 className="py-2">Regular Driving License</h5></a>
                    </div>

                    <div className="col-md-3  py-4 px-4 coustom-style">
                    <a href="#Duplicate"><h5 className="py-2">R/Duplicate Driving License</h5></a>
                    </div>

                    <div className="col-md-3  py-4 px-4  coustom-style">
                    <a href="#NOC"><h5 className="py-2">License Verification NOC</h5></a>
                    </div>


                </div>
                <br></br>
                

                <div className="row text-center">
                    
                    <div className="col-md-3  py-4 px-4 coustom-style">
                        
                        <a href="#Appointment"><h5 className="py-3">Pay Digital Challan</h5></a>
                     </div>
 
                     <div className="col-md-3  py-4 px-4 coustom-style ">
                     <a href="#Driving"><h5 className="py-3">News And Updates</h5></a>
                     </div>
 
                     <div className="col-md-3  py-4 px-4 coustom-style">
                     <a href="#Duplicate"><h5 className="py-3">Driving Learner Permit</h5></a>
                     </div>
 
                     <div className="col-md-3  py-4 px-4  coustom-style">
                     <a href="#NOC"><h5 className="py-3">Driving License Formate</h5></a>
                     </div>


                </div>

                <br></br>

                <div className="row text-center pb-4">
                    
                    <div className="col-sm-3 py-4 px-4 coustom-style">
                        
                        <a href="#Appointment"><h5 className="py-3">Locate ITP Offices</h5></a>
                     </div>
 
                     <div className="col-sm-3 col-12 py-4 px-4 coustom-style ">
                     <a href="#Driving"><h5 className="py-3">Events and Activities</h5></a>
                     </div>
 
                     <div className="col-sm-3  py-4 px-4 coustom-style">
                     <a href="#Duplicate"><h5 className="py-3">Traffic Education</h5></a>
                     </div>
 
                     <div className="col-sm-3  py-4 px-4  coustom-style">
                     <a href="#NOC"><h5 className="py-3">ITP Press Release</h5></a>
                     </div>


                </div>


            </div>  
            </div>
        </>
    )
}
export default Itemlist;