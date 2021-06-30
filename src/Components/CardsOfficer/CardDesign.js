import React from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import "./Card-style.css";

const CardDesign = (props) => {
    return (
        <>      
                <div className='container' style={{marginLeft:'3em', paddingTop:'5em' , cursor:'pointer'}}>
                <div className='row'>
                <div className="card text-center">

                    
                
                        <div className="card-head-style">
                                <h3 className="card-title">{props.titles}</h3>
                        </div>
                        
                        <div className="overflow">
                            <img src={props.img} alt="Officer" className="card-img-top" />
                        </div>

                        <div className="card-body text-dark">


                                <div className="">
                                        <h3 className="card-title name-style">{props.name}</h3>
                                </div>

                            {/* <p className="card-text text-secoundary">
                                LoremsdhaOSJa saSUIAsaS  AshaOSAms iJHSAiosjaISJAsijaA, aISJHAlsaLSMAlsaLJS
                            </p> */}
                            
                        </div>     
            
                </div> 
                </div>
                </div> 
        </>
    )
}

export default CardDesign;
