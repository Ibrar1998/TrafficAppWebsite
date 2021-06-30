import React from 'react';
import './Govt-style.css';

const Govt = () => {
    return (
        <>
           <div className="container-fluid"> 
                <div className="container">
                <div className="row py-3 ">
                    <div className="col-12 text-center"> 
                        <h3 className="heading-style ">Our Collaboration</h3>
                    </div>
                </div>    

                <div className="container-fluid govt-logo-style">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 text-center img-style">
                           <a href="https://dlims.punjab.gov.pk/"> <img src="./images/DLMIS.png"  alt="DLMIS Logo" /></a>
                        </div>

                        <div className="col-md-3 col-sm-6 text-center img-style">

                        <a href="https://pitb.gov.pk/"><img src="./images/ptib.png"  alt="PTIB Logo"></img></a>
                        </div>

                        <div className="col-md-3 col-sm-6 text-center img-style ">
                        <a href="https://www.punjab.gov.pk/"> <img src="./images/pbgovt.png"  alt="Punjab Govet Logo"></img></a>
                        </div>

                        <div className="col-md-3 col-sm-6 text-center img-style">
                        <a href="https://www.islamabadtrafficpolice.gov.pk/"> <img src="./images/DLMIS.png"  alt="DLMIS Logo" /></a>
                        </div>
                    </div>

                </div>
                </div>
           </div> 
        </>
    )
}

export default Govt;
