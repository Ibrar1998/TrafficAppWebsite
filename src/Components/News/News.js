import React from 'react';
import Marquee from "react-fast-marquee";
import './news-style.css';


const News = () => {
    return (
        <>
            <div className="container-fluid " >
                <div className="row ">
                    <div className="col-md-2  col-sm-2  col-3  py-2 text-center color-heading "> <h3 className="">LATEST NEWS </h3></div>
                    <div className="col-md-10 col-sm-10 col-9 py-2  chnage-color  ">
                           <Marquee className="py-1" speed='60' gradient={false} direction="right" pauseOnHover={true}	><img src="./images/ITP.png" className="mr-2" alt="ITP LOGO" width="30px" height="30px"/>  Driving License Issuance Management System (DLIMS) Phase-II automates the processes for driving license issuance, renewal and upgrades</Marquee> 
                    </div>

                </div>
            </div>  
        </>
    )
}

export default News;