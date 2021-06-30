import React from 'react';
import Img1 from '../../../assets/Traffic-Violation.png';
import Footers from '../../Footers/Footers';
import SocialAccounts from '../../SocialAccounts/SocialAcc';
import Navbar from '../../MenueBar/MenueBar';
export default function TrafficViolations() {
    return (
        <>      
                <Navbar />
                <div className="section" style={{paddingBottom:'10em'}}>

                    
                    <div className="container">
                    <div className="row">
                        <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-12 title-div">
                                <h1 className="text-center">TRAFFIC VIOLATIONS AND FINE</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <img src={Img1} alt="Mg of Road Signs" className="img-fluid" ></img>
                    </div>

                    </div>


                    </div>
                    </div>

                  

                    <Footers/>
                    <SocialAccounts />
        </>
    )
}
