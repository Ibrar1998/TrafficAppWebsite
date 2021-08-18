import React,{useEffect} from 'react';
import "./Card-style.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

 
const Cards = () => {

    useEffect(() => {
        Aos.init({duration : 2000})
     }, []); 


    return (
        <>
            <div className="container" data-aos="fade-up" >
                 <div className="row">  
                    <div className="col-md-4" >
                        <div className="card text-center">
                            <div className="card-head-style pb-5">
                                <h3 className="card-title" style={{fontSize:'20px'}}>INSPECTOR GENERAL OF POLICE</h3>
                            </div>
                            <div className="overflow">
                                <img src="./images/Qazi.jpg"  alt="Officer" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <div className="">
                                        <h3 className="card-title name-style">Qazi Jamil ur Rahman</h3>
                                </div>
                            </div>     
                        </div> 
                    </div>

                    <div className="col-md-4 ">
                        <div className="card text-center">
                            <div className="card-head-style pb-5">
                                <h3 className="card-title" style={{fontSize:'20px'}}>PSP SSP Traffic Division</h3>
                            </div>
                            <div className="overflow">
                                <img src="./images/ssp.jpeg"  alt="Officer" className="card-img-top" />
                            </div>
                            <div className="card-body ">
                                <div className="">
                                        <h3 className="card-title name-style">Farrukh Rashid</h3>
                                </div>
                            </div>     
                        </div> 
                    </div>

                    <div className="col-md-4 ">
                        <div className="card text-center">
                            <div className="card-head-style pb-5">
                                <h3 className="card-title" style={{fontSize:'20px'}}>ITP License Branch PSP</h3>
                            </div>
                            <div className="overflow">
                                <img src="./images/sp.jpg" height='330px' alt="Officer" className="card-img-top" />
                            </div>
                            <div className="card-body text-dark">
                                <div className="">
                                        <h3 className="card-title name-style">Qazi Jamil ur Rahman</h3>
                                </div>
                            </div>     
                        </div> 
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Cards;
