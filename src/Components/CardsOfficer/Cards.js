import React from 'react';
import CardDesign from './CardDesign';


const Cards = () => {
    return (
        <>
            <div className="container-fluid">
                 <div className="row  d-flex justify-content-center ">  
                    <div className="col-lg-3 col-md-6">
                        <CardDesign img="./images/Qazi.jpg" titles="INSPECTOR GENERAL OF POLICE, ISLAMABAD" name="Qazi Jamil ur Rahman, PSP"/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <CardDesign img="./images/ssp.jpeg" titles="PSP SSP Traffic Division" name="Farrukh Rashid"/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <CardDesign img="./images/sp.jpg" titles="ITP License Branch PSP" name="Qazi Jamil ur Rahman, "/>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <CardDesign img="./images/sd.png" titles="Station Director ITP FM" name="Mrs. Aisha Jamil "/>
                    </div>
                    

                </div>
            </div>    
        </>
    )
}

export default Cards;
